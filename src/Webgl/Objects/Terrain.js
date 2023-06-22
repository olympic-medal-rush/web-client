import { app } from '@/App';
import { state } from '@/State';
import terrainStructure from '@jsons/terrain_data.json';
import { useTeamsStore } from '@stores/teams';
import { Color, Object3D, TextureLoader } from 'three';
import { CAMERA } from '@utils/config';
import { EVENTS } from '@utils/constants';
import { globalUniforms } from '@utils/globalUniforms';
import { applyInstances } from '@utils/misc';
import { BuildingMaterial } from '../Materials/Building/material';
import { ColorMaterial } from '../Materials/Color/material';
import { FlagMaterial } from '../Materials/Flag/material';
import { Grid } from './Grid';
import { Skybox } from './Skybox';

class Terrain extends Object3D {
	#nonEmissiveMaterial = new ColorMaterial({ uniforms: { uColor: { value: new Color(0x000000) } }, defines: { NEAR: `${CAMERA.near}.`, FAR: `${CAMERA.far}.` } });
	#nonEmissiveInstancedMaterial = new ColorMaterial({
		uniforms: { uColor: { value: new Color(0x000000) } },
		defines: { NEAR: `${CAMERA.near}.`, FAR: `${CAMERA.far}.`, USE_INSTANCING: true },
	});
	constructor(glb, scaleFactor = 3) {
		super();
		applyInstances(glb);

		this.teamsStore = useTeamsStore();
		// this.flagObject = null;

		const buildingsColors = app.core.assetsManager.get('buildingsColors');
		buildingsColors.flipY = false;

		const instancesMaterial = new BuildingMaterial({
			uniforms: {
				uLightPosition: app.webgl.scene.commonShadowUniforms.uLightPosition,
				tColors: { value: buildingsColors },
			},
			defines: {
				NEAR: `${CAMERA.near}.`,
				FAR: `${CAMERA.far}.`,
				USE_INSTANCING: true,
			},
		});

		const globalMaterial = new BuildingMaterial({
			uniforms: {
				uLightPosition: app.webgl.scene.commonShadowUniforms.uLightPosition,
				tColors: { value: buildingsColors },
			},
			defines: {
				NEAR: `${CAMERA.near}.`,
				FAR: `${CAMERA.far}.`,
			},
		});

		const flagMaterial = new FlagMaterial({
			uniforms: {
				uTime: globalUniforms.uTime,
				uTex: { value: this.getWinnerFlag() },
			},
			defines: {
				NEAR: `${CAMERA.near}.`,
				FAR: `${CAMERA.far}.`,
			},
		});

		this.flagLoader = new TextureLoader();

		glb.traverse((child) => {
			if (child.isMesh) child.material = child.isInstancedMesh ? instancesMaterial : globalMaterial;
			if (child.name === 'Flag') {
				child.material = flagMaterial;
				this.flagObject = child;
			}
		});

		this.grid = new Grid(terrainStructure.data[0].length, scaleFactor);
		this.skybox = new Skybox(terrainStructure.data[0].length, scaleFactor);

		this.add(glb, this.grid, this.skybox);

		this.traverse(
			/** @param {import('three').Mesh | import('three').InstancedMesh} child*/ (child) => {
				if (child.isMesh) child.userData['materials'] = [child.material, child.isInstancedMesh ? this.#nonEmissiveInstancedMaterial : this.#nonEmissiveMaterial];
			},
		);

		state.on(EVENTS.SCOREBOARD_UPDATE, this.updateFlag);
	}

	getWinnerFlag() {
		if (this.teamsStore.scoreboard[0]?.score > 0) return this.flagLoader.load(`/assets/images/flags/${this.teamsStore.scoreboard[0].iso}.png`);
		else return app.core.assetsManager.get('joFlag');
	}

	updateFlag = () => {
		this.flagObject.material.uniforms.uTex.value = this.getWinnerFlag();
	};
}

export { Terrain };
