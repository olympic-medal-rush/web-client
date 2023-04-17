import { state } from '@/State';
import { app } from '@webglApp/App';
import { PerspectiveCamera, Vector2, Vector3 } from 'three';
import { clamp, damp, mapLinear } from 'three/src/math/MathUtils';
import { CAMERA, TERRAIN } from '@utils/config';
import { globalUniforms } from '../utils/globalUniforms';

class MainCamera extends PerspectiveCamera {
	orbitControls;
	dragEase = CAMERA.dragEase;
	zoomEase = CAMERA.zoomEase;
	targetZoom = 0;
	#lerpedZoom = 0;
	#playerPosition = new Vector3();
	#targetPosition = new Vector2();
	#focusPlayer = false;
	constructor() {
		super(CAMERA.baseFov, app.tools.viewport.ratio, 1, 1000);
		state.register(this);

		this.position.fromArray(CAMERA.defaultPosition);
		this.#targetPosition.set(this.position.x, this.position.z);
	}

	onAttach() {
		app.debug?.mapping.add(this, 'Camera');
	}

	onDrag(diff) {
		if (this.focusPlayer) this.focusPlayer = false;
		this.#resetEases();

		this.dragEase = 10;

		const cameraHalfWidth = this.getVisibleWidthAtZDepth() * 0.5;
		const cameraHalfHeight = this.getVisibleHeightAtZDepth() * 0.5;
		this.#targetPosition.x -= diff.x * cameraHalfWidth;
		this.#targetPosition.y += diff.y * cameraHalfHeight;
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
		if (this.orbitControls) return;

		this.#lerpedZoom = damp(this.#lerpedZoom, this.targetZoom, this.zoomEase, dt);

		globalUniforms.uZoom.value = this.#lerpedZoom;

		this.position.y = mapLinear(this.#lerpedZoom, 0, 1, CAMERA.minZoom, CAMERA.maxZoom);

		this.#targetPosition.x = clamp(this.#targetPosition.x, 0, TERRAIN.size);
		this.#targetPosition.y = clamp(this.#targetPosition.y, 0, TERRAIN.size + this.#lerpedZoom * 20);

		this.position.x = damp(this.position.x, this.focusPlayer ? this.#playerPosition.x : this.#targetPosition.x, this.dragEase, dt);
		this.position.z = damp(this.position.z, (this.focusPlayer ? this.#playerPosition.z : this.#targetPosition.y) + CAMERA.zoomOffsetY * this.#lerpedZoom, this.dragEase, dt);

		// this.rotation.x = -Math.PI * 0.5 + smoothstep(this.#lerpedZoom, 0.8, 1) * CAMERA.maxTiltAngle;
		this.rotation.x = -Math.PI * 0.5 + this.#lerpedZoom * CAMERA.maxTiltAngle;
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
		this.zoomEase = CAMERA.zoomEase;
	}

	get playerPosition() {
		return this.#playerPosition;
	}

	set playerPosition(value) {
		this.#playerPosition = value;
	}

	set focusPlayer(value) {
		this.#focusPlayer = value;
		if (value) this.targetZoom = 1;
		else this.#targetPosition.set(this.#playerPosition.x, this.#playerPosition.z);
	}

	get focusPlayer() {
		return this.#focusPlayer;
	}
}

export { MainCamera };
