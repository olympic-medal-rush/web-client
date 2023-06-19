import { app } from '@/App';
import { state } from '@/State';
import MojiData from '@jsons/reactmoji.json';
import { InstancedBufferGeometry, InstancedInterleavedBuffer, InterleavedBufferAttribute, Mesh, NearestFilter, PlaneGeometry, Vector2 } from 'three';
import { randFloat } from 'three/src/math/MathUtils';
import { EVENTS } from '@utils/constants';
import { globalUniforms } from '@utils/globalUniforms';
import { ReactmojiMaterial } from '../Materials/Reactmoji/material';

export default class Reactmoji extends Mesh {
	#textureDimensions = new Vector2();

	constructor({ maxCount = 50 } = {}) {
		super();

		const tex = app.core.assetsManager.get('reactmoji');
		const { width, height } = tex.source.data;
		this.#textureDimensions.set(width, height);

		// this.particlesCount = particlesCount;
		this.maxCount = maxCount;

		this.geometry = this.#createGeometry();
		this.material = this.#createMaterial();

		this.useInstances = [];

		this.frustumCulled = false;

		state.on(EVENTS.REACT_MOJI, this.#onReactMoji);
	}

	#createGeometry() {
		const geometry = new InstancedBufferGeometry();
		geometry.instanceCount = this.maxCount;
		const plane = new PlaneGeometry(1, 1);

		geometry.index = plane.index;
		geometry.attributes = plane.attributes;

		this.intancesStride = 5;
		const instancesData = [];

		let increment = 0;

		for (let i = 0; i < this.maxCount; i++) {
			const instancedIndexStride = i * this.intancesStride;
			increment = instancedIndexStride;

			const offsetMoji = this.#getReactmoji();

			// Add random size
			instancesData[increment++] = randFloat(0.4, 0.6);

			// Add random speed
			instancesData[increment++] = randFloat(0.0005, 0.0007);

			// Add random moji
			instancesData[increment++] = offsetMoji.x;
			instancesData[increment++] = offsetMoji.y;

			// Add random placing
			instancesData[increment++] = randFloat(-0.45, 0.45);
		}

		this.intanceInterleavedBuffer = new InstancedInterleavedBuffer(new Float32Array(instancesData), this.intancesStride);
		geometry.setAttribute('aSize', new InterleavedBufferAttribute(this.intanceInterleavedBuffer, 1, 0, false));
		geometry.setAttribute('aSpeed', new InterleavedBufferAttribute(this.intanceInterleavedBuffer, 1, 1, false));
		geometry.setAttribute('aOffset', new InterleavedBufferAttribute(this.intanceInterleavedBuffer, 2, 2, false));
		geometry.setAttribute('aPlacing', new InterleavedBufferAttribute(this.intanceInterleavedBuffer, 1, 4, false));

		return geometry;
	}

	#getReactmoji(id) {
		let offset;
		if (id || id === 0) {
			offset = { x: MojiData.frames[id].frame.x / this.#textureDimensions.x, y: MojiData.frames[id].frame.y / this.#textureDimensions.y };
		} else {
			offset = { x: 1, y: 1 };
		}
		return offset;
	}

	#createMaterial() {
		const tex = app.core.assetsManager.get('reactmoji');
		tex.flipY = false;
		tex.generateMipmaps = false;
		tex.magFilter = tex.minFilter = NearestFilter;
		const material = new ReactmojiMaterial({
			uniforms: {
				uTime: globalUniforms.uTime,
				uEmissiveOnly: globalUniforms.uEmissiveOnly,
				uTex: { value: tex },
				uGlobalSpead: { value: 1 },
				uElevation: { value: 2 },
			},
			transparent: true,
			depthWrite: false,
		});

		return material;
	}

	#resetMoji(index) {
		this.geometry.getAttribute('aOffset').setXY(index, 1, 1);
		this.intanceInterleavedBuffer.updateRange.offset = this.intancesStride * index;
		this.intanceInterleavedBuffer.updateRange.count = 1 * this.intancesStride;

		this.intanceInterleavedBuffer.needsUpdate = true;

		const id = this.useInstances.indexOf(index);
		if (id !== -1) {
			this.useInstances.splice(id, 1);
		}
	}

	#getFreeInstance() {
		for (let i = 0; i < this.maxCount - 1; i++) {
			const indexCourant = i;
			// Vérifier si l'index courant est présent dans le tableau historique des index
			if (!this.useInstances.includes(indexCourant)) {
				return indexCourant; // Renvoyer l'index non utilisé
			}
		}
		// Si tous les index sont utilisés, renvoyer undefined ou une valeur spéciale pour indiquer qu'aucun index n'est disponible
		return undefined;
	}

	#onReactMoji = (iso, type) => {
		// console.log('REACTMOJI', type);
		const newOffset = this.#getReactmoji(type);
		const index = this.#getFreeInstance();
		if (index || index === 0) {
			this.useInstances.push(index);
			this.geometry.getAttribute('aOffset').setXY(index, newOffset.x, newOffset.y);
			this.intanceInterleavedBuffer.updateRange.offset = this.intancesStride * index;
			this.intanceInterleavedBuffer.updateRange.count = 1 * this.intancesStride;

			this.intanceInterleavedBuffer.needsUpdate = true;

			setTimeout(() => this.#resetMoji(index), 1500);
		}
	};
}
