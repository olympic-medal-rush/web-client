import { Vector2 } from 'three';

class Medal {
	/**
	 *
	 * @param {MedalInGame} params
	 */
	constructor(params) {
		this.position = new Vector2(params.position.x, params.position.y);
		this.type = params.type;
		this.id = params.id;
	}
}

export { Medal };
