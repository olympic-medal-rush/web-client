import { app } from '@/App';
import { useGameStore } from '@Vue/stores/game';
import FlagAtlas from '@jsons/atlasFlag.json';
import { gsap } from 'gsap';
import { BackSide, InstancedBufferGeometry, InstancedInterleavedBuffer, InterleavedBufferAttribute, Mesh, PlaneGeometry, Vector2, Vector3 } from 'three';
import { FlagsMaterial } from '@Webgl/Materials/Flags/material';
import { Bimap } from '@utils/BiMap';
import { globalUniforms } from '@utils/globalUniforms';

class InstancedFlags extends Mesh {
	#teams;
	#streamAttributes = {
		instancePosition: null,
	};
	#staticAttributes = {
		uvOffset: null,
		ratio: null,
		isMyTeam: null,
	};
	/** @type {import('three').InstancedInterleavedBuffer} */
	#staticInstancedInterleaveBuffer;
	/** @type {import('three').InstancedInterleavedBuffer} */
	#streamInstancedInterleaveBuffer;

	#staticInstancesStride = 0;
	#streamInstancesStride = 0;

	#textureDimensions = new Vector2();

	constructor({ teams = [], maxCount = 210 }) {
		super();

		this.domGameStore = useGameStore();

		this.#teams = new Bimap(teams.map((team, i) => [i, team]));
		this.step = 0;
		this.maxCount = maxCount;

		const tex = app.core.assetsManager.get('flagsatlas');
		const { width, height } = tex.source.data;
		this.#textureDimensions.set(width, height);

		this.geometry = this.#createGeometry();
		this.material = this.#createMaterial();

		this.#count = teams.length;

		this.frustumCulled = false;

		// teams.forEach((team) => this.#createFlag(team.iso, team.position));
	}

	#createGeometry() {
		const geometry = new InstancedBufferGeometry();
		geometry.instanceCount = this.maxCount;
		const plane = new PlaneGeometry(1, 1);
		plane.translate(0, 0, -2.3);
		plane.rotateX(Math.PI * 0.5);
		plane.scale(1.2, 1.2, 1.2);

		geometry.index = plane.index;
		geometry.attributes = plane.attributes;

		this.#streamInstancesStride = 2;
		this.#staticInstancesStride = 4;

		const streamInstancesData = [];
		const staticInstancesData = [];

		let staticIncrement,
			streamIncrement = 0;

		const teamsArr = [...this.#teams.values()];

		for (let i = 0; i < this.maxCount; i++) {
			const streamInstancedIndexStride = i * this.#streamInstancesStride;
			streamIncrement = streamInstancedIndexStride;

			const staticInstancedIndexStride = i * this.#staticInstancesStride;
			staticIncrement = staticInstancedIndexStride;

			// Add pos Flag
			const posFlags = this.#getPosFlag(teamsArr[i]);
			streamInstancesData[streamIncrement++] = posFlags.x;
			streamInstancesData[streamIncrement++] = posFlags.y;

			// Add offset Flag
			const offsetFlag = this.#getOffsetFlag(posFlags.iso);
			staticInstancesData[staticIncrement++] = offsetFlag.left;
			staticInstancesData[staticIncrement++] = offsetFlag.top;

			// Add ratio Flag
			staticInstancesData[staticIncrement++] = offsetFlag.ratio;

			// Add isMyTeam Flag
			staticInstancesData[staticIncrement++] = 0;
		}

		this.#streamInstancedInterleaveBuffer = new InstancedInterleavedBuffer(new Float32Array(streamInstancesData), this.#streamInstancesStride);
		this.#streamAttributes.instancePosition = new InterleavedBufferAttribute(this.#streamInstancedInterleaveBuffer, 2, 0, false);

		this.#staticInstancedInterleaveBuffer = new InstancedInterleavedBuffer(new Float32Array(staticInstancesData), this.#staticInstancesStride);
		this.#staticAttributes.uvOffset = new InterleavedBufferAttribute(this.#staticInstancedInterleaveBuffer, 2, 0, false);
		this.#staticAttributes.ratio = new InterleavedBufferAttribute(this.#staticInstancedInterleaveBuffer, 1, 2, false);
		this.#staticAttributes.isMyTeam = new InterleavedBufferAttribute(this.#staticInstancedInterleaveBuffer, 1, 3, false);

		geometry.setAttribute('aInstancePosition', this.#streamAttributes.instancePosition);
		geometry.setAttribute('aOffset', this.#staticAttributes.uvOffset);
		geometry.setAttribute('aRatio', this.#staticAttributes.ratio);
		geometry.setAttribute('aIsMyTeam', this.#staticAttributes.isMyTeam);

		return geometry;
	}

	#createMaterial() {
		const tex = app.core.assetsManager.get('flagsatlas');
		const { width, height } = tex.source.data;

		tex.flipY = false;
		const material = new FlagsMaterial({
			uniforms: {
				uTime: globalUniforms.uTime,
				uEmissiveOnly: globalUniforms.uEmissiveOnly,
				uZoom: globalUniforms.uZoom,
				uTex: { value: tex },
			},
			defines: {
				UV_SCALE: `vec2(128. / ${width}., 128. / ${height}.)`,
			},
			side: BackSide,
			transparent: true,
		});

		return material;
	}

	#getPosFlag(team) {
		return {
			x: team?.position.x + 0.5 || 0,
			y: team?.position.y + 0.5 || 0,
			iso: team?.iso || null,
		};
	}

	#getOffsetFlag(iso) {
		if (iso) {
			const data = FlagAtlas.find((flag) => flag.filename === iso);
			return { filename: data.filename, left: data.left / this.#textureDimensions.x, top: data.top / this.#textureDimensions.y, ratio: data.ratio };
		} else {
			return { filename: null, left: this.#textureDimensions.x / this.#textureDimensions.x, top: 0 / this.#textureDimensions.y, ratio: 1 };
		}
	}

	/**
	 *
	 * @param {import('@Game/Team').Team} team
	 */
	addInstance(team) {
		if (this.#teams.hasValue(team)) return console.error('Team instance already exists');
		this.#teams.add(this.#count, team);

		this.#streamAttributes.instancePosition.setXY(this.#count, team.position.x + 0.5, team.position.y + 0.5);

		const offsetFlag = this.#getOffsetFlag(team.iso);
		this.#staticAttributes.uvOffset.setXY(this.#count, offsetFlag.left, offsetFlag.top);
		this.#staticAttributes.ratio.setX(this.#count, offsetFlag.ratio);

		this.#count++;

		this.#streamInstancedInterleaveBuffer.updateRange.offset = (this.#count - 1) * this.#streamInstancesStride;
		this.#streamInstancedInterleaveBuffer.updateRange.count = this.#streamInstancesStride;
		this.#streamInstancedInterleaveBuffer.needsUpdate = true;

		this.#staticInstancedInterleaveBuffer.updateRange.offset = (this.#count - 1) * this.#staticInstancesStride;
		this.#staticInstancedInterleaveBuffer.updateRange.count = this.#staticInstancesStride;
		this.#staticInstancedInterleaveBuffer.needsUpdate = true;
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
		const nextPosition = new Vector3(team.position.x + 0.5, 0, team.position.y + 0.5);

		const t = { positionProgress: 0 };

		const tl = gsap.timeline({
			onUpdate: () => {
				animatedPosition.lerpVectors(currentPosition, nextPosition, t.positionProgress);

				this.#streamAttributes.instancePosition.setXY(teamIndex, animatedPosition.x, animatedPosition.z);

				this.#streamInstancedInterleaveBuffer.updateRange.offset = teamIndex * this.#streamInstancesStride;
				this.#streamInstancedInterleaveBuffer.updateRange.count = this.#streamInstancesStride;
				this.#streamInstancedInterleaveBuffer.needsUpdate = true;
			},
		});

		tl.to(t, { positionProgress: 1, ease: 'power3.inOut', duration: 0.6 }, `<${0.7}`);
	}

	/**
	 *
	 * @param {import('@Game/Team').Team} team
	 */
	setIsMyTeam(team) {
		if (!this.#teams.hasValue(team)) return console.error("Team instance doesn't exist");

		const teamIndex = this.#teams.getKey(team);

		this.#staticAttributes.isMyTeam.setX(teamIndex, 1);
		this.#staticInstancedInterleaveBuffer.updateRange.offset = teamIndex * this.#staticInstancesStride;
		this.#staticInstancedInterleaveBuffer.updateRange.count = this.#staticInstancesStride;
		this.#staticInstancedInterleaveBuffer.needsUpdate = true;
	}

	set #count(value) {
		this.geometry.instanceCount = value;
		this.visible = value !== 0;
	}

	get #count() {
		return this.geometry.instanceCount;
	}
}

export { InstancedFlags };
