import { state } from '@/State';
import { app } from '@webglApp/App';
import { PerspectiveCamera } from 'three';
import { CAMERA } from '@utils/config';

class LoginCamera extends PerspectiveCamera {
	constructor() {
		super(CAMERA.baseFov, app.tools.viewport.ratio, CAMERA.near, CAMERA.far);
		state.register(this);
	}

	onResize({ ratio }) {
		this.aspect = ratio;
		this.fov = CAMERA.baseFov / Math.min(1, ratio * 1.5);
		this.updateProjectionMatrix();
	}
}

export { LoginCamera };