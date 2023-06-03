import { DynamicDrawUsage, InstancedBufferGeometry, InstancedInterleavedBuffer, InterleavedBufferAttribute, Mesh } from 'three';
import { MedalsMaterial } from '@Webgl/Materials/Medals/material';

class InstancedMedals extends Mesh {
	/** @type {Map<import('@Game/Medal').Medal, number>} */
	#medals;
	/** @type {Record<string, import('three').InterleavedBufferAttribute>} */
	#attributes = {
		instancePosition: null,
		medalType: null,
	};
	constructor({ medals = [], model, maxCount = 500 }) {
		super();
		this.#medals = new Map(medals.map((medal, i) => [medal, i]));

		this.maxCount = maxCount;

		this.geometry = this.#createGeometry({ baseGeometry: model.getObjectByName('medal').geometry });
		this.material = this.#createMaterial();

		// Only after geometry creation
		this.#count = medals.length;

		this.frustumCulled = false;
	}

	/**
	 *
	 * @param {{baseGeometry: import('three').BufferGeometry}} params
	 * @returns
	 */
	#createGeometry({ baseGeometry }) {
		const geometry = new InstancedBufferGeometry();
		geometry.instanceCount = this.maxCount; // needed to initialize buffers at maximum

		geometry.index = baseGeometry.index;
		geometry.attributes = baseGeometry.attributes;

		// create two more attributes common to each instance - instancePosition and medalType
		const instancesStride = 3; // vec2 + float
		const instancesData = [];

		const medalsArr = [...this.#medals.keys()];

		let increment = 0;

		for (let i = 0; i < this.maxCount; i++) {
			const instancedIndexStride = i * instancesStride;
			increment = instancedIndexStride;

			// Add instancePosition
			instancesData[increment++] = medalsArr[i]?.position.x + 0.5 || 0;
			instancesData[increment++] = medalsArr[i]?.position.y + 0.5 || 0;

			// Set medalType
			instancesData[increment++] = medalsArr[i]?.type;
		}

		const instanceInterleaveBuffer = new InstancedInterleavedBuffer(new Float32Array(instancesData), instancesStride).setUsage(DynamicDrawUsage);

		this.#attributes.instancePosition = new InterleavedBufferAttribute(instanceInterleaveBuffer, 2, 0, false);
		this.#attributes.medalType = new InterleavedBufferAttribute(instanceInterleaveBuffer, 1, 2, false);

		geometry.setAttribute('aInstancePosition', this.#attributes.instancePosition);
		geometry.setAttribute('aMedalType', this.#attributes.medalType);

		return geometry;
	}

	#createMaterial() {
		const material = new MedalsMaterial();

		return material;
	}

	/**
	 *
	 * @param {import('@Game/Medal').Medal} medal
	 */
	addInstance(medal) {
		if (this.#medals.has(medal)) return console.error('Medal instance already exists');

		this.#medals.set(medal, this.#count);

		this.#attributes.instancePosition.setXY(this.#count, medal.position.x, medal.position.y);
		this.#attributes.medalType.setX(this.#count, medal.type);

		this.#count++;
	}

	/**
	 *
	 * @param {import('@Game/Medal').Medal} medal
	 */
	removeInstance(medal) {
		if (!this.#medals.has(medal)) return console.error("Medal instance doesn't exist");

		const medalIndex = this.#medals.get(medal);
		const lastMedalIndex = this.#count - 1;

		const [lastMedalX, lastMedalY] = [this.#attributes.instancePosition.getX(lastMedalIndex), this.#attributes.instancePosition.getY(lastMedalIndex)];
		// const [medalX, medalY] = [this.#attributes.instancePosition.getX(medalIndex), this.#attributes.instancePosition.getY(medalIndex)];

		const lastMedalType = this.#attributes.medalType.getX(lastMedalIndex);
		// const medalType = this.#attributes.medalType.getX(medalIndex);

		this.#attributes.instancePosition.setXY(medalIndex, lastMedalX, lastMedalY);
		this.#attributes.medalType.setX(medalIndex, lastMedalType);

		this.#medals.delete(medal);

		this.#count--;
	}

	set #count(value) {
		this.geometry.instanceCount = value;
		this.visible = value !== 0;

		this.#attributes.instancePosition.needsUpdate = true;
		this.#attributes.medalType.needsUpdate = true;
	}

	get #count() {
		return this.geometry.instanceCount;
	}
}

export { InstancedMedals };
