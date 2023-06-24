import { app } from '@/App';
import { state } from '@/State';
import terrainStructure from '@jsons/terrain_data.json';
import { useTeamsStore } from '@stores/teams';
import { NearestFilter, Object3D, TextureLoader } from 'three';
import { CAMERA } from '@utils/config';
import { EVENTS } from '@utils/constants';
import { globalUniforms } from '@utils/globalUniforms';
import { applyInstances } from '@utils/misc';
import { BuildingMaterial } from '../Materials/Building/material';
import { FlagMaterial } from '../Materials/Flag/material';
import { Grid } from './Grid';
import { Skybox } from './Skybox';

class Terrain extends Object3D {
	constructor(glb, scaleFactor = 3) {
		super();
		applyInstances(glb);

		this.teamsStore = useTeamsStore();

		const [buildingsColors, noise, aoMap] = app.core.assetsManager.get('buildingsColors', 'noise', 'aoBuildings');
		buildingsColors.flipY = false;
		buildingsColors.magFilter = buildingsColors.minFilter = NearestFilter;
		aoMap.flipY = false;

		const buildingsUniforms = {
			uLightPosition: app.webgl.scene.commonShadowUniforms.uLightPosition,
			uEmissiveOnly: globalUniforms.uEmissiveOnly,

			tColors: { value: buildingsColors },
			tAoMap: { value: aoMap },
			tGrain: { value: app.tools.noise.texture },
			tNoise: { value: noise },
		};

		const globalMaterial = new BuildingMaterial({
			uniforms: {
				...buildingsUniforms,
			},
			defines: {
				NEAR: `${CAMERA.near}.`,
				FAR: `${CAMERA.far}.`,
				AO_CHANNEL: 'b',
			},
		});

		const instancedMaterial = new BuildingMaterial({
			uniforms: {
				...buildingsUniforms,
			},
			defines: {
				NEAR: `${CAMERA.near}.`,
				FAR: `${CAMERA.far}.`,
				USE_INSTANCING: true,
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
			if (child.name === 'Flag') {
				child.material = flagMaterial;
				this.flagObject = child;
			} else if (child.isMesh) {
				if (child.isInstancedMesh) {
					child.material = instancedMaterial;
				} else child.material = globalMaterial;
			}
		});

		this.grid = new Grid(terrainStructure.data[0].length, scaleFactor);
		this.skybox = new Skybox(terrainStructure.data[0].length, scaleFactor);

		this.add(glb, this.grid, this.skybox);

		state.on(EVENTS.SCOREBOARD_UPDATE, this.updateFlag);
	}

	getWinnerFlag() {
		if (this.teamsStore.scoreboard[0]?.score > 0) return this.flagLoader.load(`/assets/images/flags/${this.teamsStore.scoreboard[0].iso}.png`);
		else return app.core.assetsManager.get('joFlag');
	}

	updateFlag = () => {
		this.flagObject.material.uniforms.uTex.value.dispose();
		this.flagObject.material.uniforms.uTex.value = this.getWinnerFlag();
	};
}

export { Terrain };
