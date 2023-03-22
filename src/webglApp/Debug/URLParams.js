import { URL_PARAMS_LIST } from './debugConfig';

class URLParams {
	params = new Map();

	constructor() {
		this.searchParams = new URLSearchParams(window.location.search);

		for (const param of URL_PARAMS_LIST) {
			this.params.set(param, this.searchParams.get(param));
		}
	}

	getBool(name) {
		return this.params.get(name) === 'true' || this.params.get(name) === '1';
	}

	getString(name) {
		return this.params.get(name);
	}

	getNumber(name) {
		return parseFloat(this.params.get(name)) || null;
	}

	has(name) {
		return this.params.get(name) !== null;
	}
}

export { URLParams };
