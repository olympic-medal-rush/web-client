import { MEDAL_TYPES } from '@utils/constants';

class MedalsMap {
	#map = new Map();
	#bronzeMap = new Map();
	#silverMap = new Map();
	#goldMap = new Map();

	constructor() {}

	/**
	 *
	 * @param {string} key
	 * @param {import('@/Game/Medal').Medal} value
	 */
	set(key, value) {
		this.#map.set(key, value);
		switch (value.type) {
			case MEDAL_TYPES.bronze:
				this.#bronzeMap.set(key, value);
				break;
			case MEDAL_TYPES.silver:
				this.#silverMap.set(key, value);
				break;
			case MEDAL_TYPES.gold:
				this.#goldMap.set(key, value);
				break;
		}
	}

	get(key) {
		return this.#map.get(key);
	}

	has(key) {
		return this.#map.has(key);
	}

	delete(key) {
		this.#map.delete(key);
		this.#bronzeMap.delete(key);
		this.#silverMap.delete(key);
		this.#goldMap.delete(key);
	}

	values() {
		return this.#map.values();
	}

	get bronzeSize() {
		return this.#bronzeMap.size;
	}

	get silverSize() {
		return this.#silverMap.size;
	}

	get goldSize() {
		return this.#goldMap.size;
	}

	get size() {
		return this.#map.size;
	}
}

export { MedalsMap };
