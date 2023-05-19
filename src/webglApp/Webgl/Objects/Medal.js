import { state } from '@/State';
import { app } from '@webglApp/App';
import { MeshMatcapMaterial, Object3D } from 'three';
import { Vector2 } from 'three';
import { Vector3 } from 'three';
import { MEDAL_COLORS } from '@utils/config';
import { MEDAL_TYPES } from '@utils/constants';

class Medal extends Object3D {
	#projectedPosition = new Vector3();

	screenPosition = new Vector2();
	constructor(models, data) {
		super();
		state.register(this);

		const type = Object.keys(MEDAL_TYPES)[data.type];
		this.mesh = models.getObjectByName(type).clone();
		this.seed = Math.random();

		const material = new MeshMatcapMaterial({ color: MEDAL_COLORS[data.type] });
		this.mesh.traverse((child) => {
			if (child.isMesh) child.material = material;
		});

		this.position.setX(data.position.x + 0.5).setZ(data.position.y + 0.5);

		this.add(this.mesh);
	}

	onTick({ et }) {
		this.rotation.y = et * 0.01 * this.seed;

		this.#projectedPosition.copy(this.position).project(app.webgl.camera).multiplyScalar(0.5).addScalar(0.5);
		this.screenPosition.set(this.#projectedPosition.x, this.#projectedPosition.y);
	}
}

export { Medal };
