import { app } from '@/App';
import { state } from '@/State';
import { PerspectiveCamera } from 'three';
import { CAMERA } from '@utils/config';

class LoginCamera extends PerspectiveCamera {
	constructor() {
		super(CAMERA.baseFov, app.tools.viewport.ratio, CAMERA.near, CAMERA.far);
		state.register(this);

		this.position.z += 6;
	}

	getVisibleHeightAtZDepth(depth = 0) {
		if (depth < this.position.z) depth -= this.position.z;
		else depth += this.position.z;

		const vFOV = (this.fov * Math.PI) / 180;
		return 2 * Math.tan(vFOV / 2) * Math.abs(depth);
	}

	getVisibleWidthAtZDepth(depth = 0) {
		const height = this.getVisibleHeightAtZDepth(depth);
		return height * this.aspect;
	}

	onResize({ ratio }) {
		this.aspect = ratio;
		this.fov = CAMERA.baseFov / Math.min(1, ratio * 1.5);
		this.updateProjectionMatrix();
	}
}

export { LoginCamera };
