import { state } from '@/State';
import { app } from '@webglApp/App';
import { PerspectiveCamera, Vector2, Vector3 } from 'three';
import { clamp, damp, mapLinear } from 'three/src/math/MathUtils';
import { CAMERA } from '@utils/config';
import { TERRAIN } from '@utils/config';
import { globalUniforms } from '../utils/globalUniforms';

class MainCamera extends PerspectiveCamera {
	orbitControls;
	dragEase = CAMERA.dragEase;
	zoomEase = CAMERA.zoomEase;
	targetZoom = 0;
	#lerpedZoom = 0;
	#playerFocus;
	#targetPosition = new Vector2();
	constructor() {
		super(CAMERA.baseFov, app.tools.viewport.ratio, 1, 1000);
		state.register(this);

		this.lerpPlayerPos = new Vector3();
		this.position.fromArray(CAMERA.defaultPosition);
		this.#targetPosition.set(this.position.x, this.position.z);
	}

	onAttach() {
		app.debug?.mapping.add(this, 'Camera');
	}

	onDrag(diff) {
		this.#resetEases();

		this.dragEase = 10;
		const cameraHalfWidth = this.getVisibleWidthAtZDepth() * 0.5;
		const cameraHalfHeight = this.getVisibleWidthAtZDepth() * 0.5;

		this.#targetPosition.x -= mapLinear(diff.x, -1, 1, -cameraHalfWidth, cameraHalfWidth);
		this.#targetPosition.y -= mapLinear(diff.y, -1, 1, cameraHalfHeight, -cameraHalfHeight);
	}

	onDragEnd() {
		this.dragEase = CAMERA.dragEase;
	}

	onPinch(distance) {
		this.#resetEases();
		this.targetZoom = clamp(this.targetZoom + distance * 0.005, 0, 1);
	}

	onWheel(y) {
		this.#resetEases();
		this.targetZoom = clamp(this.targetZoom - y * 0.001, 0, 1);
	}

	onTick({ dt }) {
		if (this.orbitControls || !this.playerFocus) return;

		this.#lerpedZoom = damp(this.#lerpedZoom, this.targetZoom, this.zoomEase, dt);

		globalUniforms.uZoom.value = this.#lerpedZoom;

		this.position.y = mapLinear(this.#lerpedZoom, 0, 1, CAMERA.minZoom, CAMERA.maxZoom);

		this.#targetPosition.x = clamp(this.#targetPosition.x, 0, TERRAIN.size);
		this.#targetPosition.y = clamp(this.#targetPosition.y, 0, TERRAIN.size + this.#lerpedZoom * 20);

		this.position.x = damp(this.position.x, this.#targetPosition.x, this.dragEase, dt);
		this.position.z = damp(this.position.z, this.#targetPosition.y + CAMERA.zoomOffsetY * this.#lerpedZoom, this.dragEase, dt);

		// this.lerpPlayerPos.x = damp(this.lerpPlayerPos.x, this.playerFocus.position.x, 10, dt);
		// this.lerpPlayerPos.y = damp(this.lerpPlayerPos.y, this.playerFocus.position.y, 10, dt);
		// this.lerpPlayerPos.z = damp(this.lerpPlayerPos.z, this.playerFocus.position.z, 10, dt);

		this.rotation.x = -Math.PI * 0.5 + this.#lerpedZoom * CAMERA.maxTiltAngle;

		// this.position.x = this.lerpPlayerPos.x;
		// this.position.z = this.lerpPlayerPos.z + 8;
		// this.lookAt(this.lerpPlayerPos.x, 0, this.lerpPlayerPos.z);
	}

	onResize({ ratio }) {
		this.aspect = ratio;
		this.fov = CAMERA.baseFov / Math.min(1, ratio * 1.5);
		this.updateProjectionMatrix();
	}

	getVisibleHeightAtZDepth(depth = 0) {
		if (depth < this.position.y) depth -= this.position.y;
		else depth += this.position.y;

		const vFOV = (this.fov * Math.PI) / 180;
		return 2 * Math.tan(vFOV / 2) * Math.abs(depth);
	}

	getVisibleWidthAtZDepth(depth = 0) {
		const height = this.getVisibleHeightAtZDepth(depth);
		return height * this.aspect;
	}

	#resetEases() {
		this.dragEase = CAMERA.dragEase;
		this.zoom = CAMERA.zoomEase;
	}

	get playerFocus() {
		return this.#playerFocus;
	}

	set playerFocus(value) {
		this.#playerFocus = value;
		this.lerpPlayerPos.copy(this.#playerFocus.position);
	}
}

export { MainCamera };
