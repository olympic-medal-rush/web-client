import { app } from '@/App';
import { max_value as maxValue, min_value as minValue } from '@jsons/vat.json';
import { BoxGeometry, Color, InstancedBufferGeometry, InstancedInterleavedBuffer, InterleavedBufferAttribute, Mesh, StaticDrawUsage } from 'three';
import { randFloat } from 'three/src/math/MathUtils.js';
import { FlamesMaterial } from '@Webgl/Materials/Flames/material';
import { globalUniforms } from '@utils/globalUniforms';

class Flames extends Mesh {
	constructor({ commonUniforms = {}, particlesCount = 100 } = {}) {
		super();

		this.particlesCount = particlesCount;
		this.geometry = this.#createGeometry();
		this.material = this.#createMaterial({ commonUniforms });

		app.debug?.mapping.add(this.material, 'FlamesMaterial');
	}

	#createGeometry() {
		const geometry = new InstancedBufferGeometry();
		geometry.instanceCount = this.particlesCount;
		const cube = new BoxGeometry(1, 1, 1);

		geometry.index = cube.index;
		geometry.attributes = cube.attributes;

		const instancesStride = 3;
		const particlesData = [];

		let increment = 0;

		// Common particles attributes
		for (let i = 0; i < geometry.instanceCount; i++) {
			const instancedIndexStride = i * instancesStride;
			increment = instancedIndexStride;

			// Add random size
			particlesData[increment++] = randFloat(0.05, 0.15);

			// Add random speed
			particlesData[increment++] = randFloat(0.0005, 0.001);

			// Add random angle to instances
			particlesData[increment++] = randFloat(0, 2 * Math.PI);
		}

		const instancedInterleavedBuffer = new InstancedInterleavedBuffer(new Float32Array(particlesData), instancesStride).setUsage(StaticDrawUsage);
		geometry.setAttribute('aSize', new InterleavedBufferAttribute(instancedInterleavedBuffer, 1, 0, false));
		geometry.setAttribute('aSpeed', new InterleavedBufferAttribute(instancedInterleavedBuffer, 1, 1, false));
		geometry.setAttribute('aRad', new InterleavedBufferAttribute(instancedInterleavedBuffer, 1, 2, false));

		return geometry;
	}

	#createMaterial({ commonUniforms }) {
		const material = new FlamesMaterial({
			uniforms: {
				uTime: globalUniforms.uTime,
				uEmissiveOnly: globalUniforms.uEmissiveOnly,
				...commonUniforms,

				uGlobalSpeed: { value: 1 },
				uGlobalRadius: { value: 0.35 },
				uGlobalElevation: { value: 0.8 },
				uColor: { value: new Color('orange') },

				tAnimation: { value: app.webgl.scene.topHeadAnimationTexture },
			},
			defines: {
				MIN_OFFSET: `${minValue}`,
				MAX_OFFSET: `${maxValue}`,
			},
		});

		return material;
	}
}

export { Flames };
