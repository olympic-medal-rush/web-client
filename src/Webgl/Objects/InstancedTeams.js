import { app } from '@/App';
import flagColors from '@jsons/flag_atlas.json';
import { gsap } from 'gsap';
import {
	BufferAttribute,
	Color,
	Euler,
	InstancedBufferGeometry,
	InstancedInterleavedBuffer,
	InterleavedBufferAttribute,
	LinearSRGBColorSpace,
	Matrix4,
	Mesh,
	Quaternion,
	RepeatWrapping,
	StaticDrawUsage,
	StreamDrawUsage,
	Vector3,
} from 'three';
import { lerp } from 'three/src/math/MathUtils';
import { TeamsMaterial } from '@Webgl/Materials/Teams/material';
import { Bimap } from '@utils/BiMap';
import { MATERIALS } from '@utils/config';
import { globalUniforms } from '@utils/globalUniforms';
import { computeEnvmap } from '@utils/misc';

class InstancedTeams extends Mesh {
	#teams;
	/** @type {Record<string, import('three').InterleavedBufferAttribute>} */
	#staticAttributes = {
		color1: null,
		color2: null,
		color3: null,
	};
	/** @type {Record<string, import('three').InterleavedBufferAttribute>} */
	#streamAttributes = {
		instancePositionAttribute: null,
		jumpProgress: null,
		rotationY: null,
	};
	/** @type {import('three').InstancedInterleavedBuffer} */
	#staticInstancedInterleaveBuffer;
	/** @type {import('three').InstancedInterleavedBuffer} */
	#streamInstancedInterleaveBuffer;
	#staticInstancesStride = 0;
	#streamInstancesStride = 0;

	#matrix = new Matrix4();
	#quat = new Quaternion();
	#euler = new Euler();

	constructor({ teams = [], model, maxCount = 100 }) {
		super();
		this.#teams = new Bimap(teams.map((team, i) => [i, team]));

		this.maxCount = maxCount;

		this.geometry = this.#createGeometry({ baseGeometry: model.getObjectByName('player').geometry });
		this.material = this.#createMaterial();

		this.#count = teams.length;
		this.frustumCulled = false;

		app.debug?.mapping.add(this, 'InstancedTeams');
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
		geometry.setAttribute('aVertexID', this.#createVertexIDAttribute(geometry.getAttribute('uv1')));
		geometry.deleteAttribute('uv1');

		this.#staticInstancesStride = 3 + 3 + 3;
		this.#streamInstancesStride = 2 + 1 + 1;

		const instancesDynamicData = [];
		const instancesStreamData = [];

		const teamsArr = [...this.#teams.values()];

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

			// Set jumpProgress
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
		this.#streamAttributes.jumpProgress = new InterleavedBufferAttribute(this.#streamInstancedInterleaveBuffer, 1, 2, false);
		this.#streamAttributes.rotationY = new InterleavedBufferAttribute(this.#streamInstancedInterleaveBuffer, 1, 3, false);

		geometry.setAttribute('aColor1', this.#staticAttributes.color1);
		geometry.setAttribute('aColor2', this.#staticAttributes.color2);
		geometry.setAttribute('aColor3', this.#staticAttributes.color3);

		geometry.setAttribute('aInstancePosition', this.#streamAttributes.instancePosition);
		geometry.setAttribute('aJumpProgress', this.#streamAttributes.jumpProgress);
		geometry.setAttribute('aRotationY', this.#streamAttributes.rotationY);

		return geometry;
	}

	/**
	 *
	 * @param {import('three').BufferAttribute} uv1
	 */
	#createVertexIDAttribute(uv1) {
		const data = [];

		for (let i = 0; i < uv1.count; i++) data[i] = uv1.getX(i);
		return new BufferAttribute(new Float32Array(data), 1, false);
	}

	#createMaterial() {
		const envMap = computeEnvmap(app.webgl.renderer, app.core.assetsManager.get('envmap'), false);
		const [positionOffsets, normalOffsets, metalnessMap, aoMap, noise] = app.core.assetsManager.get(
			'playerPositionOffsets',
			'playerNormalOffsets',
			'playerMetalness',
			'playerAo',
			'noise',
		);
		positionOffsets.flipY = normalOffsets.flipY = aoMap.flipY = metalnessMap.flipY = false;
		positionOffsets.generateMipmaps = normalOffsets.generateMipmaps = aoMap.generateMipmaps = false;
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
				tNormalOffsets: { value: normalOffsets },

				tMetalnessMap: { value: metalnessMap },
				tAoMap: { value: aoMap },
				tEnvMap: { value: envMap },
			},
			defines: {
				...envMap.userData,
				NEAR: `${app.webgl.scene.shadowCamera.near}.`,
				FAR: `${app.webgl.scene.shadowCamera.far}.`,
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
		if (this.#teams.hasValue(team)) return console.error('Team instance already exists');
		this.#teams.add(this.#count, team);

		this.#streamAttributes.instancePosition.setXY(this.#count, team.position.x + 0.5, team.position.y + 0.5);

		const { color1, color2, color3 } = this.#getTeamColors(team.iso);
		this.#staticAttributes.color1.setXYZ(this.#count, color1.r, color1.g, color1.b);
		this.#staticAttributes.color2.setXYZ(this.#count, color2.r, color2.g, color2.b);
		this.#staticAttributes.color3.setXYZ(this.#count, color3.r, color3.g, color3.b);

		this.#count++;

		this.#staticInstancedInterleaveBuffer.updateRange.offset = (this.#count - 1) * this.#staticInstancesStride;
		this.#staticInstancedInterleaveBuffer.updateRange.count = this.#staticInstancesStride;
		this.#staticInstancedInterleaveBuffer.needsUpdate = true;

		this.#streamInstancedInterleaveBuffer.updateRange.offset = (this.#count - 1) * this.#streamInstancesStride;
		this.#streamInstancedInterleaveBuffer.updateRange.count = this.#streamInstancesStride;
		this.#streamInstancedInterleaveBuffer.needsUpdate = true;
	}

	/**
	 *
	 * @param {import('@Game/Team').Team} team
	 */
	moveInstance(team) {
		if (!this.#teams.hasValue(team)) return console.error("Team instance doesn't exist");

		const teamIndex = this.#teams.getKey(team);

		const animatedPosition = new Vector3();
		const currentPosition = new Vector3(this.#streamAttributes.instancePosition.getX(teamIndex), 0, this.#streamAttributes.instancePosition.getY(teamIndex));
		const nextPosition = new Vector3(team.position.x, 0, team.position.y).addScalar(0.5);

		this.#matrix.identity();
		this.#matrix.lookAt(currentPosition, nextPosition, this.up);
		this.#euler.setFromRotationMatrix(this.#matrix);

		const currentRotationY = this.#streamAttributes.rotationY.getX(teamIndex);
		const nextRotationY = this.#euler.y;

		const t = { value: 0 };

		const tl = gsap.timeline();
		tl.to(
			t,
			{
				value: 1,
				ease: 'power3.inOut',
				duration: 2,
				onUpdate: () => {
					animatedPosition.lerpVectors(currentPosition, nextPosition, t.value);

					this.#streamAttributes.instancePosition.setXY(teamIndex, animatedPosition.x, animatedPosition.z);
					this.#streamAttributes.jumpProgress.setX(teamIndex, t.value);
					this.#streamAttributes.rotationY.setX(teamIndex, lerp(currentRotationY, nextRotationY, t.value));

					this.#streamInstancedInterleaveBuffer.updateRange.offset = teamIndex * this.#streamInstancesStride;
					this.#streamInstancedInterleaveBuffer.updateRange.count = this.#streamInstancesStride;
					this.#streamInstancedInterleaveBuffer.needsUpdate = true;
				},
			},
			0,
		);
	}

	set #count(value) {
		this.geometry.instanceCount = value;
		this.visible = value !== 0;
	}

	get #count() {
		return this.geometry.instanceCount;
	}
}

export { InstancedTeams };
