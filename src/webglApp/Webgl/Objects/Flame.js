import { app } from '@webglApp/App';
import { globalUniforms } from '@webglApp/utils/globalUniforms';
import { BoxGeometry, Color, InstancedBufferGeometry, InstancedInterleavedBuffer, InterleavedBufferAttribute, Mesh, MeshBasicMaterial, PlaneGeometry } from 'three';
import { randFloat } from 'three/src/math/MathUtils';
import { FlameMaterial } from '../Materials/Flame/material';

export default class Flame extends Mesh {
	constructor() {
		super();

		this.count = 100;
		this.geometry = this.#createGeometry();
		this.material = this.#createMaterial();
	}

	#createGeometry() {
		const geometry = new InstancedBufferGeometry();
		geometry.instanceCount = this.count;
		const cube = new BoxGeometry(1, 1, 1);

		geometry.index = cube.index;
		geometry.attributes = cube.attributes;

		const intancesStride = 3;
		const instancesData = [];

		let increment = 0;

		for (let i = 0; i < this.count; i++) {
			const instancedIndexStride = i * intancesStride;
			increment = instancedIndexStride;

			// Add random size
			instancesData[increment++] = randFloat(0.05, 0.15);

			// Add random speed
			instancesData[increment++] = randFloat(0.0005, 0.001);

			// Add random pos angle to Instances
			instancesData[increment++] = randFloat(0, 2 * Math.PI);
		}

		const intanceInterleavedBuffer = new InstancedInterleavedBuffer(new Float32Array(instancesData), intancesStride);
		geometry.setAttribute('aSize', new InterleavedBufferAttribute(intanceInterleavedBuffer, 1, 0, false));
		geometry.setAttribute('aSpeed', new InterleavedBufferAttribute(intanceInterleavedBuffer, 1, 1, false));
		geometry.setAttribute('aRad', new InterleavedBufferAttribute(intanceInterleavedBuffer, 1, 2, false));

		return geometry;
	}

	#createMaterial() {
		const material = new FlameMaterial({
			uniforms: {
				uTime: globalUniforms.uTime,
				uEmissiveOnly: globalUniforms.uEmissiveOnly,
				uGlobalSpead: { value: 1 },
				uRadius: { value: 0.19 },
				uColor: { value: new Color('orange') },
				uElevation: { value: 0.9 },
			},
		});

		return material;
	}
}
