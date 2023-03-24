import { state } from '@/State';
import { app } from '@webglApp/App';
import { PerspectiveCamera, Vector3 } from 'three';
import { damp } from 'three/src/math/MathUtils';
import { CAMERA } from '@utils/config';

const BASE_FOV = 45;

class MainCamera extends PerspectiveCamera {
	#playerFocus;
	#targetPosition = new Vector3();
	constructor() {
		super(BASE_FOV, app.tools.viewport.ratio, 1, 1000);
		state.register(this);

		this.lerpPlayerPos = new Vector3();
		this.position.fromArray(CAMERA.defaultPosition);
	}

	onAttach() {
		app.debug?.mapping.add(this, 'Camera');
	}

	onResize({ ratio }) {
		this.aspect = ratio;
		this.fov = BASE_FOV / Math.min(1, ratio * 1.5);
		this.updateProjectionMatrix();
	}

	get playerFocus() {
		return this.#playerFocus;
	}

	set playerFocus(value) {
		this.#playerFocus = value;
		this.lerpPlayerPos.copy(this.#playerFocus.position);
	}

	onTick({ dt }) {
		if (this.orbitControls || !this.playerFocus) return;

		this.lerpPlayerPos.x = damp(this.lerpPlayerPos.x, this.playerFocus.position.x, 10, dt);
		this.lerpPlayerPos.y = damp(this.lerpPlayerPos.y, this.playerFocus.position.y, 10, dt);
		this.lerpPlayerPos.z = damp(this.lerpPlayerPos.z, this.playerFocus.position.z, 10, dt);

		this.position.x = this.lerpPlayerPos.x;
		this.position.z = this.lerpPlayerPos.z + 8;

		this.lookAt(this.lerpPlayerPos.x, 0, this.lerpPlayerPos.z);
	}
}

export { MainCamera };
