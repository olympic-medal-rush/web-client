import { parse } from 'csv-parse';
import fs from 'node:fs';
import process from 'node:process';

const args = process.argv.slice(2);
const spreadsheetId = args[0];
const exportDirectory = args[1];

importSpreadsheet(spreadsheetId, exportDirectory)
	.then(() => console.log('🌈 Done'))
	.catch((e) => console.error(e));

function importSpreadsheet(docId, exportDirectory, options) {
	return new Promise(function (resolve, reject) {
		options = {
			...options,
			languagesLine: 0,
			keyColumn: 2,
			keySeparator: '.',
		};

		let url = 'https://docs.google.com/spreadsheets/d/%spreadsheetId%/export?format=csv&id=%spreadsheetId%';
		url = url.replace(/%spreadsheetId%/g, docId);

		fetch(url)
			.then((res) => res.text())
			.then((body) => {
				parse(body, function (error, data) {
					if (error) return reject(error);

					try {
						const languages = data[options.languagesLine];
						languages.splice(0, options.keyColumn);

						const translations = {};

						for (const i in data) {
							if (i > options.languagesLine) {
								const row = data[i];
								const key = row[options.keyColumn - 1];
								row.splice(0, options.keyColumn);

								if (key.trim() === '') continue;

								for (const j in languages) {
									const lang = languages[j];
									if (!Object.prototype.hasOwnProperty.call(translations, lang)) translations[lang] = {};

									const keys = key.split(options.keySeparator);
									let current = translations[lang];
									for (const k in keys) {
										const subKey = keys[k];
										if (!Object.prototype.hasOwnProperty.call(current, subKey)) current[subKey] = {};
										if (parseInt(k) === keys.length - 1) current[subKey] = row[j];
										else current = current[subKey];
									}
								}
							}
						}

						//Save files
						for (const lang in translations) {
							translations[lang]['locale'] = lang;
							translations[lang]['lang'] = lang.substring(0, 2);
							const content = JSON.stringify(translations[lang]);

							fs.writeFileSync(exportDirectory + lang + '.json', content, 'utf8');
							console.log("Translation '" + lang + ".json' written");
						}
					} catch (e) {
						return reject(e);
					}

					resolve();
				});
			})
			.catch((e) => {
				return reject(e);
			});
	});
}
