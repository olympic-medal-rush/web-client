import { app } from '@/App';
import { useGameStore } from '@Vue/stores/game';
import FlagAtlas from '@jsons/atlasFlag.json';
import { BackSide, InstancedBufferGeometry, InstancedInterleavedBuffer, InterleavedBufferAttribute, Mesh, PlaneGeometry } from 'three';
import { FlagsMaterial } from '@Webgl/Materials/Flags/material';
import { globalUniforms } from '@utils/globalUniforms';

class InstancedFlags extends Mesh {
	#teams;
	/** @type {Set<import('@Game/Team').Team>} */

	constructor({ teams = [], maxCount = 210 }) {
		super();

		this.domGameStore = useGameStore();

		this.teams = teams;
		this.step = 0;
		this.maxCount = maxCount;
		this.geometry = this.#createGeometry();
		this.material = this.#createMaterial();

		this.geometry.instanceCount = teams.length;

		this.frustumCulled = false;

		// this.#teams = new Bimap(teams.map((team, i) => [i, team]));
		// teams.forEach((team) => this.#createFlag(team.iso, team.position));
	}

	#createGeometry() {
		const geometry = new InstancedBufferGeometry();
		geometry.instanceCount = this.maxCount;
		const plane = new PlaneGeometry(1, 1);
		plane.rotateX(Math.PI * 0.5);
		plane.scale(1.5, 1.5, 1.5);

		geometry.index = plane.index;
		geometry.attributes = plane.attributes;

		this.intancesStride = 6;
		const instancesData = [];

		let increment = 0;

		for (let i = 0; i < this.maxCount; i++) {
			const instancedIndexStride = i * this.intancesStride;
			increment = instancedIndexStride;

			// Add pos Flag
			const posFlags = this.#getPosFlag(i);
			instancesData[increment++] = posFlags.x;
			instancesData[increment++] = posFlags.y;

			// Add offset Flag
			const offsetFlag = this.#getOffsetFlag(posFlags.iso);
			instancesData[increment++] = offsetFlag.left;
			instancesData[increment++] = offsetFlag.top;

			// Add ratio Flag
			instancesData[increment++] = offsetFlag.ratio;

			// Add isMyTeam Flag
			instancesData[increment++] = posFlags.iso === this.domGameStore.playerCountry ? 1 : 0;
		}

		this.intanceInterleavedBuffer = new InstancedInterleavedBuffer(new Float32Array(instancesData), this.intancesStride);
		geometry.setAttribute('aPlacing', new InterleavedBufferAttribute(this.intanceInterleavedBuffer, 2, 0, false));
		geometry.setAttribute('aOffset', new InterleavedBufferAttribute(this.intanceInterleavedBuffer, 2, 2, false));
		geometry.setAttribute('aRatio', new InterleavedBufferAttribute(this.intanceInterleavedBuffer, 1, 4, false));
		geometry.setAttribute('aIsMyTeam', new InterleavedBufferAttribute(this.intanceInterleavedBuffer, 1, 5, false));

		return geometry;
	}

	#createMaterial() {
		const tex = app.core.assetsManager.get('flagsatlas');
		tex.flipY = false;
		const material = new FlagsMaterial({
			uniforms: {
				uTime: globalUniforms.uTime,
				uEmissiveOnly: globalUniforms.uEmissiveOnly,
				uZoom: globalUniforms.uZoom,
				uTex: { value: tex },
			},
			side: BackSide,
			transparent: true,
		});

		return material;
	}

	#getPosFlag(i) {
		if (i < this.teams.length) {
			return {
				x: this.teams[i].position.x,
				y: this.teams[i].position.y,
				iso: this.teams[i].iso,
			};
		} else {
			return { x: 0, y: 0, iso: null };
		}
	}

	#getOffsetFlag(iso) {
		if (iso) {
			const data = FlagAtlas.find((flag) => flag.filename === iso);
			return { filename: data.filename, left: data.left / 2048, top: data.top / 2048, ratio: data.ratio };
		} else {
			return { filename: null, left: 2048 / 2048, top: 0 / 2048, ratio: 1 };
		}
	}
}

export { InstancedFlags };
