import countries from 'i18n-iso-countries';
import { writeFileSync } from 'node:fs';
import sharp from 'sharp';

const args = process.argv.slice(2);
const EXPORT_DIRECTORY = args[0];
const API_URL = 'https://flagcdn.com/';

start();

async function start() {
  
	const countrysISO = Object.entries(countries.getAlpha2Codes());

  countrysISO.forEach((iso) => {
    fetchFlag(iso[0].toLowerCase()).then(
      async (resp) => {
        const img = await sharp(Buffer.from(resp)).resize({ width: 256, height: 256, fit: 'fill', kernel: 'nearest' }).toBuffer()
        writeFileSync(`${EXPORT_DIRECTORY}/${iso[1]}.png`, img);
        console.log(`🏳️  ${iso[1]} flag processed.`);
      }
    );
    
  })
}

async function fetchFlag(iso) {
  return await (await fetch(API_URL + iso.toLowerCase() + '.svg')).arrayBuffer();
}