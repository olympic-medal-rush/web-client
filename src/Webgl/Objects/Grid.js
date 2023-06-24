import { app } from '@/App';
import { state } from '@/State';
import terrainData from '@jsons/terrain_data.json';
import pathfinding from 'pathfinding';
import { Color, DataTexture, Mesh, PlaneGeometry } from 'three';
import { EVENTS } from '@utils/constants';
import { globalUniforms } from '@utils/globalUniforms';
import { GridMaterial } from '../Materials/Grid/material';

class Grid extends Mesh {
	constructor(size, scaleFactor) {
		super();
		this.size = size;
		this.scaleFactor = scaleFactor;

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

		this.geometry = this.#createGeometry(this.size);
		this.material = this.#createMaterial(this.size);

		state.on(EVENTS.TOGGLE_PATHFINDING, this.#togglePathFinding);

		state.on(EVENTS.STATE_READY, this.#updatePathfindingTexture);
		state.on(EVENTS.SPAWN_MEDALS, this.#updatePathfindingTexture);
		state.on(EVENTS.COLLECT_MEDAL, this.#updatePathfindingTexture);
	}

	#createGeometry(size) {
		const geometry = new PlaneGeometry(size * this.scaleFactor, size * this.scaleFactor, 1, 1);
		geometry.rotateX(-Math.PI * 0.5);
		geometry.translate(size * 0.5, 0, size * 0.5);

		return geometry;
	}

	#createMaterial(size) {
		const groundData = app.core.assetsManager.get('groundData');

		const material = new GridMaterial({
			uniforms: {
				...app.webgl.scene.dynamicShadowUniforms,
				...app.webgl.scene.staticShadowUniforms,
				...app.webgl.scene.commonShadowUniforms,

				uZoom: globalUniforms.uZoom,

				uWaterColor: { value: new Color(0xb6b6ef) },
				uGrassColor: { value: new Color(0x94c597) },
				uFloorColor: { value: new Color(0xdfd5ae) },

				tData: { value: groundData },
				tPathFinding: { value: this.#createPathFindingDataTex() },
				tGrain: { value: app.tools.noise.texture },
				tNoise: { value: app.core.assetsManager.get('noise') },
			},
			defines: {
				NEAR: `${app.webgl.scene.shadowCamera.near}.`,
				FAR: `${app.webgl.scene.shadowCamera.far}.`,
				GRID_SIZE: `${size}.`,
				GRID_SIZE_FACTOR: `${this.scaleFactor.toFixed(2)}`,
			},
		});

		app.debug?.mapping.add(material, 'GridMaterial');

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

	#togglePathFinding = (active) => {
		if (active) {
			this.#findPath();
			state.on(EVENTS.VOTE_RESULTS, this.#findPath);
		} else {
			state.off(EVENTS.VOTE_RESULTS, this.#findPath);
			this.#resetPath();
		}
	};

	#updatePathfindingTexture = () => {
		this.material.uniforms.tPathFinding.value = this.#createPathFindingDataTex();
	};

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
