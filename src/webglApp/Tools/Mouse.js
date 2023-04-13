import { state } from '@/State';
import { app } from '@webglApp/App';
import { Vector2 } from 'three';
import { EVENTS } from '@utils/constants';

class Mouse {
	#pinchStart;
	constructor() {
		state.register(this);

		this.isTouch = !!(
			window.matchMedia('(pointer: coarse)').matches ||
			typeof window.ontouchstart === 'function' ||
			navigator.maxTouchPoints > 0 ||
			// @ts-ignore
			navigator.msMaxTouchPoints > 0
		);

		this.isDown = false;
		this.isDragging = false;
	}

	onAttach() {
		this.coordinates = {
			webgl: new Vector2(),
			dom: new Vector2(app.tools.viewport.width * 0.5, app.tools.viewport.height * 0.5),
		};
		this.previousCoordinates = { webgl: this.coordinates.webgl.clone(), dom: this.coordinates.dom.clone() };

		app.$app.addEventListener('mousemove', this.#mouseMove);
		app.$app.addEventListener('touchmove', this.#mouseMove, { passive: true });

		app.$app.addEventListener('pointerdown', this.#pointerDown);

		app.$app.addEventListener('touchstart', this.#touchStart, { passive: true });
		app.$app.addEventListener('wheel', this.#wheel, { passive: true });

		app.$app.addEventListener('mouseup', this.#pointerUp);
		app.$app.addEventListener('touchend', this.#pointerUp);

		app.$app.addEventListener('pointerleave', this.#pointerLeave);
	}

	#mouseMove = (e) => {
		if (!this.isTouch) this.updateCoordinate(e.clientX, e.clientY);
		else if (e.touches && e.touches.length > 0) this.updateCoordinate(e.touches[0].clientX, e.touches[0].clientY);

		state.emit(EVENTS.POINTER_MOVE, this.coordinates);

		if (e.touches?.length === 2 && this.#pinchStart) {
			const distance = Math.hypot(e.touches[0].pageX - e.touches[1].pageX, e.touches[0].pageY - e.touches[1].pageY);
			state.emit(EVENTS.PINCH, distance - this.#pinchStart);
			this.#pinchStart = distance;
		}

		if (this.isDown) {
			this.isDragging = true;
			state.emit(EVENTS.DRAG, new Vector2().subVectors(this.coordinates.webgl, this.previousCoordinates.webgl));
		}
	};

	#pointerUp = () => {
		if (!this.isDown) return;

		this.previousCoordinates.webgl.copy(this.coordinates.webgl);
		this.previousCoordinates.dom.copy(this.coordinates.dom);

		this.isDown = false;

		if (this.isDragging) {
			this.isDragging = false;
			state.emit(EVENTS.DRAG_END, this.coordinates);
		}

		state.emit(EVENTS.POINTER_UP, this.coordinates);
	};

	#pointerDown = (e) => {
		if (this.isDown) return;

		switch (e.pointerType) {
			case 'mouse':
				this.isTouch = false;
				break;
			case 'touch':
				this.isTouch = true;
				break;
			case 'pen':
				this.isTouch = true;
				break;
		}

		this.updateCoordinate(e.clientX, e.clientY);

		this.isDown = true;
		state.emit(EVENTS.POINTER_DOWN, this.coordinates);
	};

	#pointerLeave = () => {
		if (this.isTouch) return;
		this.isDown = false;
		state.emit(EVENTS.POINTER_UP, this.coordinates);
	};

	#touchStart = (e) => {
		if (e.touches?.length === 2) {
			this.#pinchStart = Math.hypot(e.touches[0].pageX - e.touches[1].pageX, e.touches[0].pageY - e.touches[1].pageY);
		}
	};

	#wheel = (e) => {
		state.emit(EVENTS.WHEEL, e.deltaY);
	};

	updateCoordinate(x, y) {
		this.previousCoordinates.dom.copy(this.coordinates.dom);
		this.previousCoordinates.webgl.copy(this.coordinates.webgl);

		this.coordinates.webgl.set((x / app.tools.viewport.width) * 2 - 1, -(y / app.tools.viewport.height) * 2 + 1);
		this.coordinates.dom.set(x, y);
	}
}

export { Mouse };
