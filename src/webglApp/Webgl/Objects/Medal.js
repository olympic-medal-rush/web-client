import { state } from '@/State';
import { MeshMatcapMaterial, Object3D } from 'three';
import { MEDAL_COLORS } from '@utils/config';

class Medal extends Object3D {
	constructor(model, data) {
		super();
		state.register(this);

		this.model = model;
		this.seed = Math.random();

		const material = new MeshMatcapMaterial({ color: MEDAL_COLORS[data.type] });
		this.model.traverse((child) => {
			if (child.isMesh) child.material = material;
		});

		this.position.setX(data.position.x + 0.5).setZ(data.position.y + 0.5);

		this.add(this.model);
	}

	onTick({ et }) {
		this.rotation.y = et * 0.01 * this.seed;
	}
}

export { Medal };
