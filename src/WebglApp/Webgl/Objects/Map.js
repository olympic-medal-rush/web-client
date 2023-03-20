import { MeshMatcapMaterial, Object3D } from 'three';

export default class Map extends Object3D {
	constructor(glb) {
		super();
		this.glb = glb;

		this.globalMaterial = new MeshMatcapMaterial({ color: 0xffffff });

		this.glb.traverse((child) => {
			if (child.isMesh) {
				child.material = this.globalMaterial;
			}
		});

		this.add(this.glb);
	}
}
