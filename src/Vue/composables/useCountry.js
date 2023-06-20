import countries from 'i18n-iso-countries';
import countriesFR from 'i18n-iso-countries/langs/fr.json';

/**
 *
 * @param {string} iso
 * @returns
 */
export function useCountry(iso) {
	return countriesFR.countries[countries.alpha3ToAlpha2(iso.toUpperCase())] || 'Bretagne';
}
