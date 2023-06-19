import { app } from '@/App';
import flagColors from '@jsons/flag_colors.json';
import { max_value as maxValue, min_value as minValue } from '@jsons/vat.json';
import {
	Color,
	InstancedBufferGeometry,
	InstancedInterleavedBuffer,
	InterleavedBufferAttribute,
	LinearFilter,
	LinearSRGBColorSpace,
	Mesh,
	RepeatWrapping,
	StaticDrawUsage,
	StreamDrawUsage,
} from 'three';
import { TeamsMaterial } from '@Webgl/Materials/Teams/material';
import { MATERIALS } from '@utils/config';
import { globalUniforms } from '@utils/globalUniforms';

class InstancedTeams extends Mesh {
	teams;

	/** @type {Record<string, import('three').InterleavedBufferAttribute>} */
	#staticAttributes = {
		color1: null,
		color2: null,
		color3: null,
	};
	/** @type {Record<string, import('three').InterleavedBufferAttribute>} */
	#streamAttributes = {
		instancePositionAttribute: null,
		animationProgress: null,
		rotationY: null,
	};
	/** @type {import('three').InstancedInterleavedBuffer} */
	#staticInstancedInterleaveBuffer;
	/** @type {import('three').InstancedInterleavedBuffer} */
	#streamInstancedInterleaveBuffer;
	#staticInstancesStride = 0;
	#streamInstancesStride = 0;

	constructor({ teams, model, maxCount = 210 }) {
		super();

		this.teams = teams;
		this.maxCount = maxCount;

		this.geometry = this.#createGeometry({ baseGeometry: model.getObjectByName('player').geometry });
		this.material = this.#createMaterial();

		this.count = teams.size;
		this.frustumCulled = false;

		app.debug?.mapping.add(this.material, 'TeamsMaterial');
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
		geometry.setAttribute('position', baseGeometry.getAttribute('position'));
		// geometry.setAttribute('normal', baseGeometry.getAttribute('normal'));
		geometry.setAttribute('uv', baseGeometry.getAttribute('uv'));
		geometry.setAttribute('aVertexID', baseGeometry.getAttribute('_vertexid'));

		this.#staticInstancesStride = 3 + 3 + 3;
		this.#streamInstancesStride = 2 + 1 + 1 + 1;

		const instancesDynamicData = [];
		const instancesStreamData = [];

		const teamsArr = [...this.teams.values()];

		let staticIncrement,
			streamIncrement = 0;

		for (let i = 0; i < this.maxCount; i++) {
			const staticInstancedIndexStride = i * this.#staticInstancesStride;
			staticIncrement = staticInstancedIndexStride;

			const streamInstancedIndexStride = i * this.#streamInstancesStride;
			streamIncrement = streamInstancedIndexStride;

			// Add instancePosition
			instancesStreamData[streamIncrement++] = teamsArr[i]?.position.x + 0.5 || 0;
			instancesStreamData[streamIncrement++] = teamsArr[i]?.position.y + 0.5 || 0;

			// Set animationProgress
			instancesStreamData[streamIncrement++] = 1;
			// Set rotationY
			instancesStreamData[streamIncrement++] = 0;

			// Set colors
			const { color1, color2, color3 } = this.#getTeamColors(teamsArr[i]?.iso);

			instancesDynamicData[staticIncrement++] = color1.r;
			instancesDynamicData[staticIncrement++] = color1.g;
			instancesDynamicData[staticIncrement++] = color1.b;

			instancesDynamicData[staticIncrement++] = color2.r;
			instancesDynamicData[staticIncrement++] = color2.g;
			instancesDynamicData[staticIncrement++] = color2.b;

			instancesDynamicData[staticIncrement++] = color3.r;
			instancesDynamicData[staticIncrement++] = color3.g;
			instancesDynamicData[staticIncrement++] = color3.b;
		}

		this.#staticInstancedInterleaveBuffer = new InstancedInterleavedBuffer(new Uint8ClampedArray(instancesDynamicData), this.#staticInstancesStride).setUsage(StaticDrawUsage);
		this.#streamInstancedInterleaveBuffer = new InstancedInterleavedBuffer(new Float32Array(instancesStreamData), this.#streamInstancesStride).setUsage(StreamDrawUsage);

		this.#staticAttributes.color1 = new InterleavedBufferAttribute(this.#staticInstancedInterleaveBuffer, 3, 0, false);
		this.#staticAttributes.color2 = new InterleavedBufferAttribute(this.#staticInstancedInterleaveBuffer, 3, 3, false);
		this.#staticAttributes.color3 = new InterleavedBufferAttribute(this.#staticInstancedInterleaveBuffer, 3, 6, false);

		this.#streamAttributes.instancePosition = new InterleavedBufferAttribute(this.#streamInstancedInterleaveBuffer, 2, 0, false);
		this.#streamAttributes.animationProgress = new InterleavedBufferAttribute(this.#streamInstancedInterleaveBuffer, 1, 2, false);
		this.#streamAttributes.rotationY = new InterleavedBufferAttribute(this.#streamInstancedInterleaveBuffer, 1, 3, false);

		geometry.setAttribute('aColor1', this.#staticAttributes.color1);
		geometry.setAttribute('aColor2', this.#staticAttributes.color2);
		geometry.setAttribute('aColor3', this.#staticAttributes.color3);

		geometry.setAttribute('aInstancePosition', this.#streamAttributes.instancePosition);
		geometry.setAttribute('aAnimationProgress', this.#streamAttributes.animationProgress);
		geometry.setAttribute('aRotationY', this.#streamAttributes.rotationY);

		return geometry;
	}

	#createMaterial() {
		const [positionOffsets, normal, metalnessMap, aoMap, noise] = app.core.assetsManager.get('playerPositionOffsets', 'playerNormal', 'playerMetalness', 'playerAo', 'noise');
		positionOffsets.flipY = normal.flipY = aoMap.flipY = metalnessMap.flipY = false;
		positionOffsets.generateMipmaps = normal.generateMipmaps = aoMap.generateMipmaps = metalnessMap.generateMipmaps = false;
		positionOffsets.magFilter = positionOffsets.minFilter = LinearFilter;
		noise.wrapS = noise.wrapT = RepeatWrapping;

		const material = new TeamsMaterial({
			uniforms: {
				// globals
				uTime: globalUniforms.uTime,
				uEmissiveOnly: globalUniforms.uEmissiveOnly,
				...app.webgl.scene.commonShadowUniforms,
				...app.webgl.scene.staticShadowUniforms,

				uGold: { value: MATERIALS.teams.gold },
				uAoMapIntensity: { value: MATERIALS.teams.aoMapIntensity },
				uEnvMapIntensity: { value: MATERIALS.teams.envMapIntensity },

				uRoughness: { value: MATERIALS.teams.roughness },
				uMetalness: { value: MATERIALS.teams.metalness },

				tPositionOffsets: { value: positionOffsets },
				tNormal: { value: normal },

				tNoise: { value: noise },
				tGrain: { value: app.tools.noise.texture },

				tMetalnessMap: { value: metalnessMap },
				tAoMap: { value: aoMap },
				tEnvMap: { value: app.webgl.scene.environment },
			},
			defines: {
				...app.webgl.scene.environment.userData,
				NEAR: `${app.webgl.scene.shadowCamera.near}.`,
				FAR: `${app.webgl.scene.shadowCamera.far}.`,
				MIN_OFFSET: `${minValue}`,
				MAX_OFFSET: `${maxValue}`,
				USE_INSTANCING: true,
				USE_SHADOWS: true,
			},
		});

		return material;
	}

	#getTeamColors(iso = 'NONE') {
		const colors = flagColors[iso];
		const color1 = new Color().setStyle(colors[0], LinearSRGBColorSpace);
		const color2 = new Color().setStyle(colors[1] || colors[0], LinearSRGBColorSpace);
		const color3 = new Color().setStyle(colors[2] || colors[1] || colors[0], LinearSRGBColorSpace);

		return { color1, color2, color3 };
	}

	/**
	 *
	 * @param {import('@Game/Team').Team} team
	 */
	addInstance(team) {
		this.#streamAttributes.instancePosition.setXY(this.count, team.position.x + 0.5, team.position.y + 0.5);

		const { color1, color2, color3 } = this.#getTeamColors(team.iso);
		this.#staticAttributes.color1.setXYZ(this.count, color1.r, color1.g, color1.b);
		this.#staticAttributes.color2.setXYZ(this.count, color2.r, color2.g, color2.b);
		this.#staticAttributes.color3.setXYZ(this.count, color3.r, color3.g, color3.b);

		this.count++;

		this.#staticInstancedInterleaveBuffer.updateRange.offset = (this.count - 1) * this.#staticInstancesStride;
		this.#staticInstancedInterleaveBuffer.updateRange.count = this.#staticInstancesStride;
		this.#staticInstancedInterleaveBuffer.needsUpdate = true;

		this.#streamInstancedInterleaveBuffer.updateRange.offset = (this.count - 1) * this.#streamInstancesStride;
		this.#streamInstancedInterleaveBuffer.updateRange.count = this.#streamInstancesStride;
		this.#streamInstancedInterleaveBuffer.needsUpdate = true;
	}

	moveInstanceUpdate({ teamIndex, animatedPosition, animationProgress, animatedRotation }) {
		this.#streamAttributes.instancePosition.setXY(teamIndex, animatedPosition.x, animatedPosition.y);
		this.#streamAttributes.animationProgress.setX(teamIndex, animationProgress);
		this.#streamAttributes.rotationY.setX(teamIndex, animatedRotation);

		this.#streamInstancedInterleaveBuffer.updateRange.offset = teamIndex * this.#streamInstancesStride;
		this.#streamInstancedInterleaveBuffer.updateRange.count = this.#streamInstancesStride;
		this.#streamInstancedInterleaveBuffer.needsUpdate = true;
	}

	set count(value) {
		this.geometry.instanceCount = value;
		this.visible = value !== 0;
	}

	get count() {
		return this.geometry.instanceCount;
	}
}

export { InstancedTeams };
