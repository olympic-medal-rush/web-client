import { globalUniforms } from '@webglApp/utils/globalUniforms';
import { BoxGeometry, InstancedBufferGeometry, InstancedInterleavedBuffer, InterleavedBufferAttribute, Mesh, MeshBasicMaterial, PlaneGeometry } from 'three';
import { randFloat } from 'three/src/math/MathUtils';
import { FlameMaterial } from '../Materials/Flame/material';

export default class Flame extends Mesh {
	constructor() {
		super();
		this.count = 50;

		this.geometry = this.#createGeometry();
		this.material = this.#createMaterial();
	}

	#createGeometry() {
		const geometry = new InstancedBufferGeometry();
		geometry.instanceCount = this.count;
		const cube = new BoxGeometry(1, 1, 1);

		geometry.index = cube.index;
		geometry.attributes = cube.attributes;

		const intancesStride = 2;
		const instancesData = [];

		let increment = 0;

		for (let i = 0; i < this.count; i++) {
			const instancedIndexStride = i * intancesStride;
			increment = instancedIndexStride;

			// Add random size
			instancesData[increment++] = randFloat(0.05, 0.3);

			// Add random speed
			instancesData[increment++] = randFloat(0.001, 0.005);

			// Add random pos to Instances
			// instancesData.push();
		}

		const intanceInterleavedBuffer = new InstancedInterleavedBuffer(new Float32Array(instancesData), intancesStride);
		geometry.setAttribute('aSize', new InterleavedBufferAttribute(intanceInterleavedBuffer, 1, 0, false));
		geometry.setAttribute('aSpeed', new InterleavedBufferAttribute(intanceInterleavedBuffer, 1, 1, false));

		return geometry;
	}

	#createMaterial() {
		const material = new FlameMaterial({
			uniforms: {
				uTime: globalUniforms.uTime,
			},
		});

		return material;
	}
}
