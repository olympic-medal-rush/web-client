import countries from 'i18n-iso-countries';
import sharp from 'sharp';

const args = process.argv.slice(2);
const EXPORT_DIRECTORY = args[0];
const API_URL = 'https://flagcdn.com/';

start();

async function start() {
	const countrysISO = Object.entries(countries.getAlpha2Codes());

	countrysISO.forEach(async (iso) => {
		fetchFlag(iso[0].toLowerCase()).then(async (resp) => {
			await sharp(Buffer.from(resp)).resize({ width: 256 }).toFile(`${EXPORT_DIRECTORY}/${iso[1]}.png`);
			console.log(`🏳️  ${iso[1]} flag processed.`);
		});

		await sharp(Buffer.from(await fetchFlagUrl('https://upload.wikimedia.org/wikipedia/commons/a/a7/Olympic_flag.svg')))
			.resize({ width: 256 })
			.toFile(`${EXPORT_DIRECTORY}/JO-FLAG.png`);

		await sharp(Buffer.from(await fetchFlagUrl('https://upload.wikimedia.org/wikipedia/commons/2/29/Flag_of_Brittany_%28Gwenn_ha_du%29.svg')))
			.resize({ width: 256 })
			.toFile(`${EXPORT_DIRECTORY}/BZH.png`);
	});
}

async function fetchFlag(iso) {
	return await (await fetch(API_URL + iso.toLowerCase() + '.svg')).arrayBuffer();
}

async function fetchFlagUrl(url) {
	return await (await fetch(url)).arrayBuffer();
}
