import { app } from '@/App';
import { state } from '@/State';
import { PerspectiveCamera } from 'three';
import { CAMERA } from '@utils/config';

class LoginCamera extends PerspectiveCamera {
	constructor() {
		super(CAMERA.baseFov, app.tools.viewport.ratio, CAMERA.near, CAMERA.far);
		state.register(this);

		this.position.z += 5;
	}

	onResize({ ratio }) {
		this.aspect = ratio;
		this.fov = CAMERA.baseFov / Math.min(1, ratio * 1.5);
		this.updateProjectionMatrix();
	}
}

export { LoginCamera };
