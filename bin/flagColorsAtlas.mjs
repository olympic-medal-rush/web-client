import { readFileSync, writeFileSync } from 'node:fs';
import sharp from 'sharp';

const args = process.argv.slice(2);
const jsonPath = args[0];
const imageOutputPath = args[1];
const jsonOutputPath = args[2];

start();

async function start() {
	const flags = Object.entries(JSON.parse(readFileSync(jsonPath).toString('utf-8')));

	const colorsMap = new Map([...new Set(flags.map(([, value]) => value).flat(1)).values()].map((value, i) => [value, i]));

	const colorsData = flags.map(([key, value]) => value.map((color, i) => ({ iso: key, color, index: i }))).flat(1);

	const textureWidth = getPowerOfTwoDimension(colorsMap.size);
	const textureHeight = textureWidth * textureWidth * 0.5 >= colorsMap.size ? textureWidth * 0.5 : textureWidth;

	const buffer = Buffer.alloc(textureWidth * textureHeight * 3, 0);

	const colorsUvs = new Map();

	for (let i = 0; i < colorsData.length; i++) {
		const hex = colorsData[i].color;

		if (colorsUvs.has(hex)) continue;

		// If color not already added, add to atlas
		const rgb = hexToRgb(hex);
		const colorIndex = colorsMap.get(hex);
		const i3 = colorIndex * 3;

		buffer[i3] = rgb.r;
		buffer[i3 + 1] = rgb.g;
		buffer[i3 + 2] = rgb.b;

		const uv = { x: (colorIndex % textureWidth) / textureWidth, y: Math.floor(colorIndex / textureWidth) / textureHeight };

		colorsUvs.set(hex, uv);
	}

	await sharp(buffer, { raw: { channels: 3, width: textureWidth, height: textureHeight } }).toFile(imageOutputPath);

	const isoUvs = Object.fromEntries(flags.map(([key, colors]) => [key, colors.map((color) => colorsUvs.get(color))]));
	writeFileSync(jsonOutputPath, JSON.stringify(isoUvs), { encoding: 'utf-8' });
}

function getPowerOfTwoDimension(pixelCount) {
	const sideLength = Math.sqrt(pixelCount);
	const width = Math.pow(2, Math.ceil(Math.log2(sideLength)));
	return width;
}

function hexToRgb(hex) {
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result
		? {
				r: parseInt(result[1], 16),
				g: parseInt(result[2], 16),
				b: parseInt(result[3], 16),
		  }
		: null;
}
