import countries from 'i18n-iso-countries';
import { writeFileSync } from 'node:fs';
import sharp from 'sharp';

const args = process.argv.slice(2);
const imageOutputPath = args[0];
const jsonOutputPath = args[1];

const API_URL = 'https://flagcdn.com/';
const PIXEL_THRESHOLD = 5000;

start();

async function start() {
	const countryColors = {};

	const entries = Object.entries(countries.getAlpha2Codes()).sort(([, alpha3a], [, alpha3b]) => alpha3a.localeCompare(alpha3b));
	for (const [alpha2, alpha3] of entries) countryColors[alpha3] = await getFlagColors(alpha2);

	countryColors['BZH'] = ['#000000', '#ffffff'];

	await generateAtlas(countryColors);

	console.log(`🚀 ${Object.keys(countryColors).length} flags processed.`);
}

async function generateAtlas(countryColors) {
	const flags = Object.entries(countryColors);

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

async function getFlagColors(alpha2) {
	const svgBuffer = await (await fetch(API_URL + alpha2.toLowerCase() + '.svg')).arrayBuffer();

	const histogram = await sharp(Buffer.from(svgBuffer))
		.resize({ width: 1000, height: 1000, fit: 'fill', kernel: 'nearest' })
		.raw()
		.toBuffer({ resolveWithObject: true })
		.then(({ data, info }) => {
			const histogram = {};
			for (let i = 0; i < data.length; i += info.channels) {
				const r = data[i];
				const g = data[i + 1];
				const b = data[i + 2];
				const key = `${r},${g},${b}`;
				histogram[key] = (histogram[key] || 0) + 1;
			}
			return histogram;
		});

	const colors = Object.entries(histogram)
		.sort(([, count1], [, count2]) => count2 - count1)
		.slice(0, 3)
		.filter(([, count]) => count >= PIXEL_THRESHOLD)
		.map(([colorRgb]) => rgbToHex(...colorRgb.split(',')));
	return colors;
}

function rgbToHex(red, green, blue) {
	const redHex = parseInt(red).toString(16).padStart(2, '0');
	const greenHex = parseInt(green).toString(16).padStart(2, '0');
	const blueHex = parseInt(blue).toString(16).padStart(2, '0');

	const hexString = `#${redHex}${greenHex}${blueHex}`;

	return hexString;
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
