import { app } from '@webglApp/App';
import { PerspectiveCamera } from 'three';
import { state } from '../../State';

const BASE_FOV = 45;

class MainCamera extends PerspectiveCamera {
	constructor() {
		super(BASE_FOV, app.tools.viewport.ratio, 1, 1000);
		state.register(this);
	}

	onAttach() {
		app.debug?.mapping.add(this, 'Camera');
	}

	onResize({ ratio }) {
		this.aspect = ratio;
		this.fov = BASE_FOV / Math.min(1, ratio * 1.5);
		this.updateProjectionMatrix();
	}

	// onTick({ dt }) {
	// 	if (this.orbitControls) return;
	// }
}

export { MainCamera };
