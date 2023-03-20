import terrainStructure from '@jsons/terrain_data.json';
import { MeshMatcapMaterial, Object3D } from 'three';
import Grid from './Grid';

export default class Map extends Object3D {
	constructor(glb) {
		super();
		this.glb = glb;

		this.globalMaterial = new MeshMatcapMaterial({ color: 0xffffff });

		this.grid = new Grid(terrainStructure);

		this.glb.traverse((child) => {
			if (child.isMesh) {
				child.material = this.globalMaterial;
			}
		});
		this.glb.getObjectByName('Floor').add(this.grid);

		this.add(this.glb);
	}
}
