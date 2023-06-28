import { app } from '@/App';
import { state } from '@/State';
import { Vector2, Vector3 } from 'three';
import { EVENTS, MEDAL_TYPES } from '@utils/constants';

class Medal {
	#projectedPosition = new Vector3();

	scenePosition = new Vector3();
	screenPosition = new Vector2();
	/**
	 *
	 * @param {MedalInGame} params
	 */
	constructor(params) {
		this.position = new Vector2(params.position.x, params.position.y);
		this.type = params.type;
		this.typeStr = Object.keys(MEDAL_TYPES)[params.type];
		this.id = params.id;

		this.scenePosition.set(this.position.x + 0.5, 1.5, this.position.y + 0.5);

		state.on(EVENTS.TICK, this.#onTick);
	}

	#onTick = () => {
		const positionInCameraSpace = this.scenePosition.clone().applyMatrix4(app.webgl.camera.matrixWorldInverse);

		this.#projectedPosition.copy(this.scenePosition).project(app.webgl.camera).multiplyScalar(0.5).addScalar(0.5);

		if (positionInCameraSpace.z > 0) {
			// object is behind the camera
			// if the x position is outside of the NDC range, it's likely due to being behind the camera, so we don't update it
			if (Math.abs(this.#projectedPosition.x) <= 1) {
				this.screenPosition.x = this.#projectedPosition.x;
			}
		} else {
			// object is in front of the camera, update both axes
			this.screenPosition.set(this.#projectedPosition.x, this.#projectedPosition.y);
		}
		// this.#projectedPosition.copy(this.scenePosition).project(app.webgl.camera).multiplyScalar(0.5).addScalar(0.5);
		// this.screenPosition.set(this.#projectedPosition.x, this.#projectedPosition.y);
	};

	dispose() {
		state.off(EVENTS.TICK, this.#onTick);
	}
}

export { Medal };
