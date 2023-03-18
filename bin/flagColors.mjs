import countries from 'i18n-iso-countries';
import { writeFileSync } from 'node:fs';
import sharp from 'sharp';

const args = process.argv.slice(2);
const EXPORT_DIRECTORY = args[0];

const API_URL = 'https://flagcdn.com/';
const PIXEL_THRESHOLD = 5000;

start();

async function start() {
	const countryColors = {};

	const entries = Object.entries(countries.getAlpha2Codes()).sort(([, alpha3a], [, alpha3b]) => alpha3a.localeCompare(alpha3b));
	for (const [alpha2, alpha3] of entries) countryColors[alpha3] = await getFlagColors(alpha2);

	writeFileSync(`${EXPORT_DIRECTORY}flag-colors.json`, JSON.stringify(countryColors), { encoding: 'utf-8' });

	console.log(`🚀 ${Object.keys(countryColors).length} flags processed.`);
}

async function getFlagColors(alpha2) {
	const svgBuffer = await (await fetch(API_URL + alpha2.toLowerCase() + '.svg')).arrayBuffer();
	const quantizedBuffer = await sharp(Buffer.from(svgBuffer))
		.resize({ width: 1000, height: 1000, fit: 'fill' })
		.png({ colors: 8, compressionLevel: 0, dither: 0, kernel: sharp.kernel.cubic })
		.toBuffer();

	const histogram = await sharp(quantizedBuffer)
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
