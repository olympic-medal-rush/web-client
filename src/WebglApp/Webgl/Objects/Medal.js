import { MeshMatcapMaterial, Object3D } from 'three';
import { MEDAL_COLORS } from '@utils/config';

export default class Medal extends Object3D {
	constructor(model, data) {
		super();

		this.glb = model;

		const material = new MeshMatcapMaterial({ color: MEDAL_COLORS[data.type] });
		this.glb.traverse((child) => {
			if (child.isMesh) child.material = material;
		});

		this.position.setX(data.position.x + 0.5).setZ(data.position.y + 0.5);

		this.add(this.glb);
	}
}
