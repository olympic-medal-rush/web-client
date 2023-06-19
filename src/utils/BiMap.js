class Bimap {
	#keyToValue;
	#valueToKey;

	/**
	 *
	 * @param {[any, any][]} entries
	 */
	constructor(entries = []) {
		this.#keyToValue = new Map(entries);
		this.#valueToKey = new Map(entries.map(([key, value]) => [value, key]));
	}

	add(key, value) {
		this.#keyToValue.set(key, value);
		this.#valueToKey.set(value, key);
	}

	getValue(key) {
		return this.#keyToValue.get(key);
	}

	getKey(value) {
		return this.#valueToKey.get(value);
	}

	delete(key, value) {
		this.#keyToValue.delete(key);
		this.#valueToKey.delete(value);
	}

	hasValue(value) {
		return this.#valueToKey.has(value);
	}

	hasKey(key) {
		this.#keyToValue.has(key);
	}

	keys() {
		return this.#keyToValue.keys();
	}

	values() {
		return this.#keyToValue.values();
	}

	get size() {
		return this.#keyToValue.size;
	}
}

export { Bimap };
