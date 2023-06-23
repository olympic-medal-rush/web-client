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
		this.#projectedPosition.copy(this.scenePosition).project(app.webgl.camera).multiplyScalar(0.5).addScalar(0.5);
		this.screenPosition.set(this.#projectedPosition.x, this.#projectedPosition.y);
	};

	dispose() {
		state.off(EVENTS.TICK, this.#onTick);
	}
}

export { Medal };
