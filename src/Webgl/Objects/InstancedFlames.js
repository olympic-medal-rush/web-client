import { BoxGeometry, Color, InstancedBufferGeometry, InstancedInterleavedBuffer, InterleavedBufferAttribute, Mesh } from 'three';
import { randFloat } from 'three/src/math/MathUtils';
import { Bimap } from '@utils/BiMap';
import { globalUniforms } from '@utils/globalUniforms';
import { FlamesMaterial } from '../Materials/Flames/material';

class InstancedFlames extends Mesh {
	#teams;
	/** @type {Set<import('@Game/Team').Team>} */
	#justWonMedalTeams = new Set();
	/** @type {Record<string, import('three').InterleavedBufferAttribute>} */
	#streamAttributes = {
		instancePositionAttribute: null,
		rotationY: null,
	};
	/** @type {import('three').InstancedInterleavedBuffer} */
	#staticInstancedInterleaveBuffer;
	/** @type {import('three').InstancedInterleavedBuffer} */
	#streamInstancedInterleaveBuffer;
	#staticInstancesStride = 0;
	#streamInstancesStride = 0;

	constructor({ teams = [], maxCount = 100, particlesCount = 100 }) {
		super();

		this.#teams = new Bimap(teams.map((team, i) => [i, team]));

		this.maxCount = maxCount;
		this.particlesCount = particlesCount;

		this.geometry = this.#createGeometry();
		this.material = this.#createMaterial();

		this.#count = teams.length;
		this.frustumCulled = false;
	}

	#createGeometry() {
		const geometry = new InstancedBufferGeometry();
		geometry.instanceCount = this.particlesCount * this.maxCount;
		const cube = new BoxGeometry(1, 1, 1);

		geometry.index = cube.index;
		geometry.attributes = cube.attributes;

		this.#staticInstancesStride = 3;
		const staticInstancesData = [];

		let increment = 0;

		// Common particles attributes
		for (let i = 0; i < this.particlesCount; i++) {
			const instancedIndexStride = i * this.#staticInstancesStride;
			increment = instancedIndexStride;

			// Add random size
			staticInstancesData[increment++] = randFloat(0.05, 0.15);

			// Add random speed
			staticInstancesData[increment++] = randFloat(0.0005, 0.001);

			// Add random pos angle to Instances
			staticInstancesData[increment++] = randFloat(0, 2 * Math.PI);
		}

		this.#staticInstancedInterleaveBuffer = new InstancedInterleavedBuffer(new Float32Array(staticInstancesData), this.#staticInstancesStride, this.maxCount);
		geometry.setAttribute('aSize', new InterleavedBufferAttribute(this.#staticInstancedInterleaveBuffer, 1, 0, false));
		geometry.setAttribute('aSpeed', new InterleavedBufferAttribute(this.#staticInstancedInterleaveBuffer, 1, 1, false));
		geometry.setAttribute('aRad', new InterleavedBufferAttribute(this.#staticInstancedInterleaveBuffer, 1, 2, false));

		this.#streamInstancesStride = 2 + 1;
		const streamInstancesData = [];

		const teamsArr = [...this.#teams.values()];

		// Instanced attributes
		for (let i = 0; i < this.maxCount; i++) {
			const instancedIndexStride = i * this.#streamInstancesStride;
			increment = instancedIndexStride;

			// Set instancePosition
			streamInstancesData[increment++] = teamsArr[i]?.position.x + 0.5 || 0;
			streamInstancesData[increment++] = teamsArr[i]?.position.y + 0.5 || 0;

			// Set rotationY
			streamInstancesData[increment++] = 0;
		}

		this.#streamInstancedInterleaveBuffer = new InstancedInterleavedBuffer(new Float32Array(streamInstancesData), this.#streamInstancesStride);
		geometry.setAttribute('aInstancePosition', new InterleavedBufferAttribute(this.#streamInstancedInterleaveBuffer, 2, 0, false));
		geometry.setAttribute('aRotationY', new InterleavedBufferAttribute(this.#streamInstancedInterleaveBuffer, 1, 2, false));

		return geometry;
	}

	#createMaterial() {
		const material = new FlamesMaterial({
			uniforms: {
				uTime: globalUniforms.uTime,
				uEmissiveOnly: globalUniforms.uEmissiveOnly,
				uShadowOnly: globalUniforms.uShadowOnly,

				uGlobalSpead: { value: 1 },
				uRadius: { value: 0.23 },
				uColor: { value: new Color('orange') },
				uElevation: { value: 0.8 },
			},
		});

		return material;
	}

	set #count(value) {
		this.geometry.instanceCount = value;
		this.visible = value !== 0;
	}

	get #count() {
		return this.geometry.instanceCount;
	}
}

export { InstancedFlames };
