import { state } from '@/State';
import { app } from '@webglApp/App';
import { PerspectiveCamera } from 'three';

const BASE_FOV = 45;

class MainCamera extends PerspectiveCamera {
	constructor() {
		super(BASE_FOV, app.tools.viewport.ratio, 1, 1000);
		state.register(this);

		this.playerFocus = null;

		this.position.x = 100;
		this.position.y = 20;
		this.position.z = 100;
		this.lookAt(50, 2, 50);
	}

	onAttach() {
		app.debug?.mapping.add(this, 'Camera');
	}

	onResize({ ratio }) {
		this.aspect = ratio;
		this.fov = BASE_FOV / Math.min(1, ratio * 1.5);
		this.updateProjectionMatrix();
	}

	onTick() {
		if (this.orbitControls || !this.playerFocus) return;

		this.position.y = this.playerFocus.position.y + 4;
		this.position.x = this.playerFocus.position.x;
		this.position.z = this.playerFocus.position.z + 8;
		this.lookAt(this.playerFocus.position.x, this.playerFocus.position.y + 0.5, this.playerFocus.position.z);
	}
}

export { MainCamera };
