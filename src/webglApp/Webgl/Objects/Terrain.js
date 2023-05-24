import terrainStructure from '@jsons/terrain_data.json';
import { app } from '@webglApp/App';
import { globalUniforms } from '@webglApp/utils/globalUniforms';
import { Color, Object3D } from 'three';
import { CAMERA } from '@utils/config';
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

		this.glb.traverse((child) => {
			if (child.isMesh) child.material = globalMaterial;
			if (child.name === 'Drapeau')
				child.material = new DrapeauMaterial({
					uniforms: {
						uTime: globalUniforms.uTime,
					},
				});
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
	}
}

export { Terrain };
