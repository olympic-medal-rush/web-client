import { Vector2 } from 'three';
import { MEDAL_TYPES } from '@utils/constants';

class Medal {
	/**
	 *
	 * @param {MedalInGame} params
	 */
	constructor(params) {
		this.position = new Vector2(params.position.x, params.position.y);
		this.type = params.type;
		this.typeStr = Object.keys(MEDAL_TYPES)[params.type];
		this.id = params.id;
	}
}

export { Medal };
