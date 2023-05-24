import { state } from '@/State';
import terrainStructure from '@jsons/terrain_data.json';
import { useGameStore } from '@stores/game';
import { app } from '@webglApp/App';
import { globalUniforms } from '@webglApp/utils/globalUniforms';
import { Color, Object3D, TextureLoader } from 'three';
import { CAMERA } from '@utils/config';
import { EVENTS } from '@utils/constants';
import { BuildingMaterial } from '../Materials/Building/material';
import { ColorMaterial } from '../Materials/Color/material';
import { DrapeauMaterial } from '../Materials/Drapeau/material';
import { Grid } from './Grid';

class Terrain extends Object3D {
	#nonEmissiveMaterial = new ColorMaterial({ uniforms: { uColor: { value: new Color(0x000000) } } });
	constructor(glb) {
		super();
		const globalMaterial = new BuildingMaterial({
			uniforms: {
				uLightPosition: app.webgl.scene.commonShadowUniforms.uLightPosition,
			},
			defines: {
				NEAR: `${CAMERA.near}.`,
				FAR: `${CAMERA.far}.`,
			},
		});
		this.glb = glb;
		this.flagLoader = new TextureLoader();
		this.domGameStore = useGameStore();
		this.flagObject = null;

		this.glb.traverse((child) => {
			if (child.isMesh) child.material = globalMaterial;
			if (child.name === 'Drapeau') {
				child.material = new DrapeauMaterial({
					uniforms: {
						uTime: globalUniforms.uTime,
						uTex: { value: this.getWinnerFlag() },
					},
				});
				this.flagObject = child;
			}
		});

		this.grid = new Grid(terrainStructure);

		this.add(this.glb);
		this.add(this.grid);

		this.traverse(
			/** @param {import('three').Mesh} child*/ (child) => {
				if (child.isMesh) {
					child.userData['materials'] = [child.material, this.#nonEmissiveMaterial];
				}
			},
		);

		state.on(EVENTS.SCOREBOARD_UPDATE, () => this.updateFlag());
	}

	getWinnerFlag() {
		if (this.domGameStore.scoreboard[0] && this.domGameStore.scoreboard[0].score && this.domGameStore.scoreboard[0].score > 0)
			return this.flagLoader.load(`/assets/images/flags/${this.domGameStore.scoreboard[0].name}.png`);
		else return this.flagLoader.load(`/assets/images/flags/JO-flag.png`);
	}

	updateFlag() {
		this.flagObject.material.uniforms.uTex.value = this.getWinnerFlag();
	}
}

export { Terrain };
