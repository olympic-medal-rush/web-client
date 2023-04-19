import terrainStructure from '@jsons/terrain_data.json';
import { MeshMatcapMaterial, Object3D } from 'three';
import { Color } from 'three';
import { ColorMaterial } from '../Materials/Color/material';
import { Grid } from './Grid';

class Terrain extends Object3D {
	#nonEmissiveMaterial = new ColorMaterial({ uniforms: { uColor: { value: new Color(0x000000) } } });
	constructor(glb) {
		super();

		this.glb = glb;
		this.grid = new Grid(terrainStructure);

		this.add(this.glb);
		this.add(this.grid);

		this.traverse((child) => {
			if (child.isMesh) {
				// child.material = globalMaterial;
				child.userData['materials'] = [child.material, this.#nonEmissiveMaterial];
			}
		});
	}
}

export { Terrain };
