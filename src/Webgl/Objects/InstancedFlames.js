import { BoxGeometry, Color, InstancedBufferGeometry, InstancedInterleavedBuffer, InterleavedBufferAttribute, Mesh, StreamDrawUsage } from 'three';
import { randFloat } from 'three/src/math/MathUtils';
import { FlamesMaterial } from '@Webgl/Materials/Flames/material';
import { Bimap } from '@utils/BiMap';
import { globalUniforms } from '@utils/globalUniforms';

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

	constructor({ teams = [], maxCount = 210, particlesCount = 100 }) {
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
		const particlesData = [];

		let increment = 0;

		// Common particles attributes
		for (let i = 0; i < this.maxCount * this.particlesCount; i++) {
			const instancedIndexStride = i * this.#staticInstancesStride;
			increment = instancedIndexStride;

			// Add random size
			particlesData[increment++] = randFloat(0.05, 0.15);

			// Add random speed
			particlesData[increment++] = randFloat(0.0005, 0.001);

			// Add random angle to instances
			particlesData[increment++] = randFloat(0, 2 * Math.PI);
		}

		this.#staticInstancedInterleaveBuffer = new InstancedInterleavedBuffer(new Float32Array(particlesData), this.#staticInstancesStride);
		geometry.setAttribute('aSize', new InterleavedBufferAttribute(this.#staticInstancedInterleaveBuffer, 1, 0, false));
		geometry.setAttribute('aSpeed', new InterleavedBufferAttribute(this.#staticInstancedInterleaveBuffer, 1, 1, false));
		geometry.setAttribute('aRad', new InterleavedBufferAttribute(this.#staticInstancedInterleaveBuffer, 1, 2, false));

		// Instances attributes
		this.#streamInstancesStride = 8;

		const instanceData = [];
		const teamsArr = [...this.#teams.values()];

		for (let i = 0; i < this.maxCount; i++) {
			const instancedIndexStride = i * this.#streamInstancesStride;
			increment = instancedIndexStride;

			// Instance position
			instanceData[increment++] = teamsArr[i]?.position.x + 0.5 || 0;
			instanceData[increment++] = teamsArr[i]?.position.y + 0.5 || 0;

			// speed
			instanceData[increment++] = 1;

			// radius
			instanceData[increment++] = 0.3;

			// elevation
			instanceData[increment++] = 0.8;

			// color
			const color = new Color('orange');
			instanceData[increment++] = color.r;
			instanceData[increment++] = color.g;
			instanceData[increment++] = color.b;
		}

		this.#streamInstancedInterleaveBuffer = new InstancedInterleavedBuffer(new Float32Array(instanceData), this.#streamInstancesStride, this.particlesCount).setUsage(StreamDrawUsage);
		geometry.setAttribute('aInstancePosition', new InterleavedBufferAttribute(this.#streamInstancedInterleaveBuffer, 2, 0, false));
		geometry.setAttribute('aGlobalSpeed', new InterleavedBufferAttribute(this.#streamInstancedInterleaveBuffer, 1, 2, false));
		geometry.setAttribute('aGlobalRadius', new InterleavedBufferAttribute(this.#streamInstancedInterleaveBuffer, 1, 3, false));
		geometry.setAttribute('aGlobalElevation', new InterleavedBufferAttribute(this.#streamInstancedInterleaveBuffer, 1, 4, false));
		geometry.setAttribute('aColor', new InterleavedBufferAttribute(this.#streamInstancedInterleaveBuffer, 3, 5, false));

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
			defines: {},
		});

		return material;
	}

	set #count(value) {
		this.geometry.instanceCount = value * this.particlesCount;
		this.visible = value !== 0;
	}

	get #count() {
		return this.geometry.instanceCount;
	}
}

export { InstancedFlames };
