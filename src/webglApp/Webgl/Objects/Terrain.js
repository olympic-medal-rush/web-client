import terrainStructure from '@jsons/terrain_data.json';
import { MeshMatcapMaterial, Object3D } from 'three';
import { Grid } from './Grid';

class Terrain extends Object3D {
	constructor(glb) {
		super();
		this.glb = glb;

		const globalMaterial = new MeshMatcapMaterial({ color: 0xffffff });

		this.grid = new Grid(terrainStructure);

		this.glb.traverse((child) => {
			if (child.isMesh) {
				child.material = globalMaterial;
			}
		});
		// this.glb.getObjectByName('Floor').add(this.grid);

		this.add(this.glb);
		this.add(this.grid);
	}
}

export { Terrain };
