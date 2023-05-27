import { app } from '@/App';
import { InterleavedBufferAttribute } from 'three';
import { InstancedInterleavedBuffer } from 'three';
import { InstancedBufferGeometry } from 'three';
import { Mesh } from 'three';
import { MedalsMaterial } from '../Materials/Medals/material';

class InstancedMedals extends Mesh {
	constructor({ type, maxCount = 50, count = 0 }) {
		super();

		this.type = type;
		this.maxCount = maxCount;

		const medalsMesh = app.core.assetsManager.get('medals');

		this.geometry = this.#createGeometry({ baseGeometry: medalsMesh.getObjectByName(type).geometry });
		this.material = this.#createMaterial();

		// This needs to be after geometry creation
		this.count = count;
	}

	/**
	 *
	 * @param {{baseGeometry: import('three').BufferGeometry}} params
	 * @returns
	 */
	#createGeometry({ baseGeometry }) {
		const geometry = new InstancedBufferGeometry();
		geometry.instanceCount = this.maxCount;

		geometry.index = baseGeometry.index;
		geometry.attributes = baseGeometry.attributes;

		const instancesStride = 2;
		const instancesData = [];

		let increment = 0;

		const medalsPositions = [...app.game.medals.values()].map((medal) => medal.position);

		for (let i = 0; i < this.maxCount; i++) {
			const instancedIndexStride = i * instancesStride;
			increment = instancedIndexStride;

			// Add instance position
			instancesData[increment++] = medalsPositions[i]?.x + 0.5 || 0;
			instancesData[increment++] = medalsPositions[i]?.y + 0.5 || 0;
		}

		const instanceInterleaveBuffer = new InstancedInterleavedBuffer(new Float32Array(instancesData), instancesStride);
		geometry.setAttribute('aInstancePosition', new InterleavedBufferAttribute(instanceInterleaveBuffer, 2, 0, false));

		return geometry;
	}

	#createMaterial() {
		const material = new MedalsMaterial();

		return material;
	}

	set count(value) {
		this.geometry.instanceCount = value;
	}

	get count() {
		return this.geometry.instanceCount;
	}
}

export { InstancedMedals };
