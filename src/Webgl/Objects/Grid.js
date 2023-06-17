import { app } from '@/App';
import { state } from '@/State';
import terrainData from '@jsons/terrain_data.json';
import pathfinding from 'pathfinding';
import { DataTexture, Mesh, PlaneGeometry, RepeatWrapping, Vector3 } from 'three';
import { EVENTS } from '@utils/constants';
import { globalUniforms } from '@utils/globalUniforms';
import { GridMaterial } from '../Materials/Grid/material';

class Grid extends Mesh {
	/**
	 *
	 * @param {import('@/types/env').TerrainData} structure
	 */
	constructor(structure) {
		super();
		this.size = structure.data[0].length;

		//Pathfinding
		this.nbPix = this.size * this.size;
		this.data = new Uint8Array(this.nbPix * 4);
		this.dataTex = null;

		// 1. change flor data format
		this.obstacleFlorData = terrainData.data;
		this.obstacleFlorData.forEach((row, i) => {
			row.forEach((col, j) => {
				col === 1 ? (this.obstacleFlorData[i][j] = 1) : (this.obstacleFlorData[i][j] = 0);
			});
		});
		this.grid = new pathfinding.Grid(this.obstacleFlorData);
		// 2. create finder A*
		this.finder = new pathfinding.AStarFinder();

		this.#resetPath();
		state.on(EVENTS.JOIN_READY, this.#findPath);
		state.on(EVENTS.VOTE_RESULTS, this.#findPath);
		state.on(EVENTS.SPAWN_MEDALS, this.#findPath);
		state.on(EVENTS.COLLECT_MEDAL, this.#findPath);

		this.geometry = this.#createGeometry(this.size);
		this.material = this.#createMaterial(this.size);
	}

	#createGeometry(size) {
		const geometry = new PlaneGeometry(size, size, 1, 1);
		geometry.rotateX(-Math.PI * 0.5);
		geometry.translate(size * 0.5, 0, size * 0.5);

		return geometry;
	}

	#createMaterial(size) {
		const [groundData, seamless1, seamless2, seamless3, seamless4] = app.core.assetsManager.get('groundData', 'seamless1', 'seamless2', 'seamless3', 'seamless4');

		seamless1.wrapS = seamless1.wrapT = RepeatWrapping;
		seamless2.wrapS = seamless2.wrapT = RepeatWrapping;
		seamless3.wrapS = seamless3.wrapT = RepeatWrapping;
		seamless4.wrapS = seamless4.wrapT = RepeatWrapping;

		// groundData.magFilter = groundData.minFilter = NearestFilter

		const material = new GridMaterial({
			uniforms: {
				...app.webgl.scene.dynamicShadowUniforms,
				...app.webgl.scene.staticShadowUniforms,
				...app.webgl.scene.commonShadowUniforms,

				uZoom: globalUniforms.uZoom,

				uSize: { value: size },
				uFloorColor: { value: new Vector3(0, 0.39, 0.45) },
				uGridColor: { value: new Vector3(0, 0, 0) },

				tData: { value: groundData },
				tSeamless1: { value: seamless1 },
				tSeamless2: { value: seamless2 },
				tSeamless3: { value: seamless3 },
				tSeamless4: { value: seamless4 },
				tPathFinding: { value: this.#createPathFindingDataTex() },
			},
			defines: {
				NEAR: `${app.webgl.scene.shadowCamera.near}.`,
				FAR: `${app.webgl.scene.shadowCamera.far}.`,
			},
		});

		return material;
	}

	#createPathFindingDataTex() {
		let rowIndex = 0;

		const allMedalPos = [];
		app.game.medals.forEach((medal) => {
			allMedalPos.push([medal.position.x, medal.position.y]);
		});

		for (let i = 0; i < this.nbPix; i++) {
			const stride = i * 4;

			const colIndex = i % this.size;

			if (
				!this.path ||
				this.path.length === 0 ||
				(!this.path.find((coord) => coord[0] === colIndex && coord[1] === this.size - 1 - rowIndex) &&
					!allMedalPos.find((coord) => coord[0] === colIndex && coord[1] === this.size - 1 - rowIndex))
			) {
				this.data[stride + 0] = 0;
				this.data[stride + 1] = 0;
				this.data[stride + 2] = 0;
				this.data[stride + 3] = 255;
			} else {
				this.data[stride + 0] = 255;
				this.data[stride + 1] = 255;
				this.data[stride + 2] = 255;
				this.data[stride + 3] = 255;
			}

			if (colIndex === this.size - 1) rowIndex++;
		}

		if (!this.dataTex) this.dataTex = new DataTexture(this.data, this.size, this.size);
		this.dataTex.needsUpdate = true;

		return this.dataTex;
	}

	#resetPath() {
		this.path = [];
		for (let i = 0; i < this.size * this.size; i++) {
			this.path.push([0, 0]);
		}
	}

	#findPath = () => {
		// 3. find coord team
		const coordTeam = app.game.currentTeam.position;
		// 4. find coord nearest medal
		// 5. find path
		if (this.path.length > 1 && coordTeam.x === this.path[1][0] && coordTeam.y === this.path[1][1]) {
			this.path.shift();
		} else {
			// console.log('FindPath');
			this.#resetPath();
			app.game.medals.forEach((medal) => {
				const testCoordMedal = medal.position;
				const testPath = this.finder.findPath(coordTeam.x, coordTeam.y, testCoordMedal.x, testCoordMedal.y, this.grid.clone());
				if (testPath.length !== 0 && testPath.length < this.path.length) {
					this.path = testPath;
				}
			});
		}

		this.material.uniforms.tPathFinding.value = this.#createPathFindingDataTex();
	};
}

export { Grid };
