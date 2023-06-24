import { app } from '@/App';
import MojiData from '@jsons/reactmoji.json';
import {
	CustomBlending,
	DstAlphaFactor,
	InstancedBufferGeometry,
	InstancedInterleavedBuffer,
	InterleavedBufferAttribute,
	Mesh,
	NearestFilter,
	PlaneGeometry,
	SrcAlphaFactor,
	StreamDrawUsage,
	Vector2,
} from 'three';
import { randFloat } from 'three/src/math/MathUtils';
import { globalUniforms } from '@utils/globalUniforms';
import { ReactmojiMaterial } from '../../Materials/Reactmoji/material';

class InstancedReactMoji extends Mesh {
	#textureDimensions = new Vector2();

	#streamAttributes = {
		instancePosition: null,
	};

	/** @type {import('three').InstancedInterleavedBuffer} */
	#particlesInstancedInterleaveBuffer;
	/** @type {import('three').InstancedInterleavedBuffer} */
	#streamInstancedInterleaveBuffer;
	#particlesIntancesStride = 0;
	#streamInstancesStride = 0;

	constructor({ teams, maxCount = 210, particlesCount = 50 }) {
		super();

		const tex = app.core.assetsManager.get('reactmoji');
		const { width, height } = tex.source.data;
		this.#textureDimensions.set(width, height);

		this.teams = teams;

		this.maxCount = maxCount;
		this.particlesCount = particlesCount;

		this.geometry = this.#createGeometry();
		this.material = this.#createMaterial();

		this.count = teams.size;
		this.frustumCulled = false;

		// this.useInstances = [];
		// state.on(EVENTS.REACT_MOJI, this.#onReactMoji);
	}

	#createGeometry() {
		const geometry = new InstancedBufferGeometry();
		geometry.instanceCount = this.particlesCount * this.maxCount;
		const plane = new PlaneGeometry(1, 1);

		geometry.index = plane.index;
		geometry.attributes = plane.attributes;

		this.#particlesIntancesStride = 5;
		const particlesData = [];

		let increment = 0;

		for (let i = 0; i < geometry.instanceCount; i++) {
			const instancedIndexStride = i * this.#particlesIntancesStride;
			increment = instancedIndexStride;

			// const offsetMoji = this.#getReactmoji();

			// Add random size
			particlesData[increment++] = randFloat(0.4, 0.6);

			// Add random speed
			particlesData[increment++] = randFloat(0.0005, 0.0007);

			// Add random moji
			particlesData[increment++] = 0;
			particlesData[increment++] = 0;

			// Add random placing
			particlesData[increment++] = randFloat(-0.45, 0.45);
		}

		this.#particlesInstancedInterleaveBuffer = new InstancedInterleavedBuffer(new Float32Array(particlesData), this.#particlesIntancesStride);
		geometry.setAttribute('aSize', new InterleavedBufferAttribute(this.#particlesInstancedInterleaveBuffer, 1, 0, false));
		geometry.setAttribute('aSpeed', new InterleavedBufferAttribute(this.#particlesInstancedInterleaveBuffer, 1, 1, false));
		geometry.setAttribute('aOffset', new InterleavedBufferAttribute(this.#particlesInstancedInterleaveBuffer, 2, 2, false));
		geometry.setAttribute('aPlacing', new InterleavedBufferAttribute(this.#particlesInstancedInterleaveBuffer, 1, 4, false));

		this.#streamInstancesStride = 2;
		const instanceStreamData = [];

		const teamsArr = [...this.teams.values()];

		for (let i = 0; i < this.maxCount; i++) {
			const instancedIndexStride = i * this.#streamInstancesStride;
			increment = instancedIndexStride;

			//// STREAM ATTRIBUTES
			// Instance position
			instanceStreamData[increment++] = teamsArr[i]?.position.x + 0.5 || 0;
			instanceStreamData[increment++] = teamsArr[i]?.position.y + 0.5 || 0;
		}

		this.#streamInstancedInterleaveBuffer = new InstancedInterleavedBuffer(new Float32Array(instanceStreamData), this.#streamInstancesStride, this.particlesCount).setUsage(
			StreamDrawUsage,
		);
		this.#streamAttributes.instancePosition = new InterleavedBufferAttribute(this.#streamInstancedInterleaveBuffer, 2, 0, false);

		geometry.setAttribute('aInstancePosition', this.#streamAttributes.instancePosition);

		return geometry;
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
			// transparent: true,
			depthWrite: false,
			blending: CustomBlending,
			blendDstAlpha: DstAlphaFactor,
			blendSrcAlpha: SrcAlphaFactor,
		});

		return material;
	}

	/**
	 *
	 * @param {import('@Game/Team').Team} team
	 */
	addInstance(team) {
		this.#streamAttributes.instancePosition.setXY(this.count, team.position.x + 0.5, team.position.y + 0.5);
		this.count++;

		this.#streamInstancedInterleaveBuffer.updateRange.offset = (this.count - 1) * this.#streamInstancesStride;
		this.#streamInstancedInterleaveBuffer.updateRange.count = this.#streamInstancesStride;
		this.#streamInstancedInterleaveBuffer.needsUpdate = true;
	}

	moveInstanceUpdate({ teamIndex, animatedPosition }) {
		this.#streamAttributes.instancePosition.setXY(teamIndex, animatedPosition.x, animatedPosition.y);

		// this.#streamInstancedInterleaveBuffer.updateRange.offset = teamIndex * this.#streamInstancesStride;
		// this.#streamInstancedInterleaveBuffer.updateRange.count = this.#streamInstancesStride;
		this.#streamInstancedInterleaveBuffer.needsUpdate = true;
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

	// #resetMoji(index) {
	// 	this.geometry.getAttribute('aOffset').setXY(index, 1, 1);
	// 	this.intanceInterleavedBuffer.updateRange.offset = this.intancesStride * index;
	// 	this.intanceInterleavedBuffer.updateRange.count = 1 * this.intancesStride;

	// 	this.intanceInterleavedBuffer.needsUpdate = true;

	// 	const id = this.useInstances.indexOf(index);
	// 	if (id !== -1) {
	// 		this.useInstances.splice(id, 1);
	// 	}
	// }

	// #getFreeInstance() {
	// 	for (let i = 0; i < this.maxCount - 1; i++) {
	// 		const indexCourant = i;
	// 		// Vérifier si l'index courant est présent dans le tableau historique des index
	// 		if (!this.useInstances.includes(indexCourant)) {
	// 			return indexCourant; // Renvoyer l'index non utilisé
	// 		}
	// 	}
	// 	// Si tous les index sont utilisés, renvoyer undefined ou une valeur spéciale pour indiquer qu'aucun index n'est disponible
	// 	return undefined;
	// }

	// #onReactMoji = (iso, type) => {
	// 	// console.log('REACTMOJI', type);
	// 	const newOffset = this.#getReactmoji(type);
	// 	const index = this.#getFreeInstance();
	// 	if (index || index === 0) {
	// 		this.useInstances.push(index);
	// 		this.geometry.getAttribute('aOffset').setXY(index, newOffset.x, newOffset.y);
	// 		this.intanceInterleavedBuffer.updateRange.offset = this.intancesStride * index;
	// 		this.intanceInterleavedBuffer.updateRange.count = 1 * this.intancesStride;

	// 		this.intanceInterleavedBuffer.needsUpdate = true;

	// 		setTimeout(() => this.#resetMoji(index), 1500);
	// 	}
	// };

	set count(value) {
		this.geometry.instanceCount = value * this.particlesCount;
		this.visible = value !== 0;
	}

	get count() {
		return this.geometry.instanceCount / this.particlesCount;
	}

	dispose() {
		this.removeFromParent();
		this.material.dispose();
		this.geometry.dispose();
	}
}

export { InstancedReactMoji };
