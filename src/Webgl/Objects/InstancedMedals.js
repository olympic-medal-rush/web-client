import { app } from '@/App';
import { Color, DataTexture, DynamicDrawUsage, InstancedBufferGeometry, InstancedInterleavedBuffer, InterleavedBufferAttribute, LinearSRGBColorSpace, Mesh, RGBAFormat } from 'three';
import { MedalsMaterial } from '@Webgl/Materials/Medals/material';
import { Bimap } from '@utils/BiMap';
import { MEDAL_COLORS } from '@utils/config';
import { globalUniforms } from '@utils/globalUniforms';

class InstancedMedals extends Mesh {
	#medals;
	/** @type {Record<string, import('three').InterleavedBufferAttribute>} */
	#attributes = {
		instancePosition: null,
		medalType: null,
	};
	/** @type {import('three').InstancedInterleavedBuffer} */
	#instancedInterleaveBuffer;
	#instancesStride = 0;

	constructor({ medals = [], model, maxCount = 100 }) {
		super();
		this.#medals = new Bimap(medals.map((medal, i) => [i, medal]));

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
		this.#instancesStride = 3; // vec2 + float
		const instancesData = [];

		const medalsArr = [...this.#medals.values()];

		let increment = 0;

		for (let i = 0; i < this.maxCount; i++) {
			const instancedIndexStride = i * this.#instancesStride;
			increment = instancedIndexStride;

			// Add instancePosition
			instancesData[increment++] = medalsArr[i]?.position.x + 0.5 || 0;
			instancesData[increment++] = medalsArr[i]?.position.y + 0.5 || 0;

			// Set medalType
			instancesData[increment++] = medalsArr[i]?.type / MEDAL_COLORS.length || 0;
		}

		// @ts-ignore
		this.#instancedInterleaveBuffer = new InstancedInterleavedBuffer(new Float32Array(instancesData), this.#instancesStride).setUsage(DynamicDrawUsage);
		this.#attributes.instancePosition = new InterleavedBufferAttribute(this.#instancedInterleaveBuffer, 2, 0, false);
		this.#attributes.medalType = new InterleavedBufferAttribute(this.#instancedInterleaveBuffer, 1, 2, false);

		geometry.setAttribute('aInstancePosition', this.#attributes.instancePosition);
		geometry.setAttribute('aMedalType', this.#attributes.medalType);

		return geometry;
	}

	#createMaterial() {
		const medalHeights = app.core.assetsManager.get('medalHeights');
		medalHeights.flipY = false;

		const material = new MedalsMaterial({
			uniforms: {
				// globals
				uTime: globalUniforms.uTime,
				uEmissiveOnly: globalUniforms.uEmissiveOnly,

				tMedalColor: { value: this.#createColorsDataTexture() },
				tMedalHeights: { value: medalHeights },
			},
			defines: {
				COLOR_COUNT: MEDAL_COLORS.length,
			},
		});

		return material;
	}

	#createColorsDataTexture() {
		const colors = MEDAL_COLORS.map((color) => new Color().setHex(color, LinearSRGBColorSpace));

		const data = [];

		for (let i = 0; i < colors.length; i++) data.push(colors[i].r * 255, colors[i].g * 255, colors[i].b * 255, 255);
		const texture = new DataTexture(new Uint8Array(data), colors.length, 1, RGBAFormat);
		texture.needsUpdate = true;

		return texture;
	}

	/**
	 *
	 * @param {import('@Game/Medal').Medal[]} medals
	 */
	addInstances(medals) {
		medals.forEach((medal) => {
			if (this.#medals.hasValue(medal)) return console.error('Medal instance already exists');
			this.#medals.add(this.#count, medal);

			this.#attributes.instancePosition.setXY(this.#count, medal.position.x + 0.5, medal.position.y + 0.5);
			this.#attributes.medalType.setX(this.#count, medal.type / MEDAL_COLORS.length);

			this.#count++;
		});

		this.#instancedInterleaveBuffer.updateRange.offset = (this.#count - medals.length) * this.#instancesStride;
		this.#instancedInterleaveBuffer.updateRange.count = medals.length * this.#instancesStride;
		this.#instancedInterleaveBuffer.needsUpdate = true;
	}

	/**
	 *
	 * @param {import('@Game/Medal').Medal} medal
	 */
	removeInstance(medal) {
		if (!this.#medals.hasValue(medal)) return console.error("Medal instance doesn't exist");

		const medalIndex = this.#medals.getKey(medal);
		const lastMedalIndex = this.#count - 1;

		const [lastMedalX, lastMedalY] = [this.#attributes.instancePosition.getX(lastMedalIndex), this.#attributes.instancePosition.getY(lastMedalIndex)];
		const lastMedalType = this.#attributes.medalType.getX(lastMedalIndex);

		this.#attributes.instancePosition.setXY(medalIndex, lastMedalX, lastMedalY);
		this.#attributes.medalType.setX(medalIndex, lastMedalType);

		this.#medals.add(medalIndex, this.#medals.getValue(lastMedalIndex));
		this.#medals.delete(lastMedalIndex, medal);

		setTimeout(() => {
			// This is mandatory to make sure we only update the range needed to be updated
			this.#instancedInterleaveBuffer.updateRange.offset = medalIndex * this.#instancesStride;
			this.#instancedInterleaveBuffer.updateRange.count = 1 * this.#instancesStride;
			this.#instancedInterleaveBuffer.needsUpdate = true;

			this.#count--;
		}, 1500);
	}

	dispose() {
		this.removeFromParent();
		this.material.dispose();
		this.material.uniforms.tMedalColor.value.dispose();
		this.geometry.dispose();
	}

	set #count(value) {
		this.geometry.instanceCount = value;
		this.visible = value !== 0;
	}

	get #count() {
		return this.geometry.instanceCount;
	}
}

export { InstancedMedals };
