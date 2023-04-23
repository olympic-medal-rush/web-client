import terrainStructure from '@jsons/terrain_data.json';
import { Color, MeshMatcapMaterial, Object3D } from 'three';
import { ColorMaterial } from '../Materials/Color/material';
import { Grid } from './Grid';

class Terrain extends Object3D {
	#nonEmissiveMaterial = new ColorMaterial({ uniforms: { uColor: { value: new Color(0x000000) } } });
	constructor(glb) {
		super();
		const globalMaterial = new MeshMatcapMaterial({ color: 0xffffff });
		this.glb = glb;
		this.glb.traverse((child) => {
			if (child.isMesh) child.material = globalMaterial;
		});
		this.grid = new Grid(terrainStructure);

		this.add(this.glb);
		this.add(this.grid);

		this.traverse(
			/** @param {import('three').Mesh} child*/ (child) => {
				if (child.isMesh) {
					// child.material = globalMaterial;
					child.userData['materials'] = [child.material, this.#nonEmissiveMaterial];
				}
			},
		);

		// this.visible = false;
	}
}

export { Terrain };
