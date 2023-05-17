import { state } from '@/State';
import { store } from '@/Store';
import { app } from '@webglApp/App';
import { PerspectiveCamera, Vector2, Vector3 } from 'three';
import { clamp, damp, mapLinear, smoothstep } from 'three/src/math/MathUtils';
import { CAMERA, TERRAIN } from '@utils/config';
import { STORE_KEYS } from '@utils/constants';
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
		super(CAMERA.baseFov, app.tools.viewport.ratio, CAMERA.near, CAMERA.far);
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
		this.#targetPosition.y += diff.y * cameraHalfHeight * (this.#lerpedZoom + 1);
	}

	onDragEnd() {
		this.dragEase = CAMERA.dragEase;
	}

	onPinch(distance) {
		if (this.focusPlayer) this.focusPlayer = false;
		this.#resetEases();
		this.targetZoom = clamp(this.targetZoom + distance * 0.005, 0, 1);
	}

	onWheel(y) {
		if (this.focusPlayer) this.focusPlayer = false;
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

		if (this.focusPlayer) {
			this.position.x = damp(this.position.x, this.#playerPosition.x, CAMERA.playerPosEase, dt);
			this.position.z = damp(this.position.z, this.#playerPosition.z + CAMERA.zoomOffsetY * this.#lerpedZoom, CAMERA.playerPosEase, dt);
		} else {
			this.position.x = damp(this.position.x, this.#targetPosition.x, this.dragEase, dt);
			this.position.z = damp(this.position.z, this.#targetPosition.y + CAMERA.zoomOffsetY * this.#lerpedZoom, this.dragEase, dt);
		}

		this.rotation.x = -Math.PI * 0.5 + smoothstep(this.#lerpedZoom, 0.3, 1) * CAMERA.maxTiltAngle;
		// this.rotation.x = -Math.PI * 0.5 + this.#lerpedZoom * CAMERA.maxTiltAngle;
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

	getAngleTo(x, y) {
		return Math.atan2(y - this.position.y + CAMERA.zoomOffsetY * this.#lerpedZoom, x - this.position.x);
	}

	get playerPosition() {
		return this.#playerPosition;
	}

	set playerPosition(value) {
		this.#playerPosition = value;
	}

	set focusPlayer(value) {
		this.#focusPlayer = value;
		if (value) {
			this.targetZoom = 1;
		} else this.#targetPosition.set(this.#playerPosition.x, this.#playerPosition.z);
		store.set(STORE_KEYS.FOCUS_PLAYER, value);
	}

	get focusPlayer() {
		return this.#focusPlayer;
	}
}

export { MainCamera };
