import { Vector2 } from 'three';
import { MEDAL_POINTS } from '@utils/config';
import { DIRECTIONS } from '@utils/constants';

class Team {
	/**
	 *
	 * @param {TeamInfos} params
	 */
	constructor({ iso, position, medals = { 0: 0, 1: 0, 2: 0 } }) {
		this.iso = iso;
		this.position = new Vector2(position.x, position.y);
		this.medals = medals;
		this.medalsCount = medals[0] + medals[1] + medals[2];
		this.score = medals[0] * MEDAL_POINTS[0] + medals[1] * MEDAL_POINTS[1] + medals[2] * MEDAL_POINTS[2];
	}

	/**
	 *
	 * @param {Direction} direction
	 */
	move(direction) {
		switch (direction) {
			case DIRECTIONS.up:
				this.position.y -= 1;
				break;
			case DIRECTIONS.right:
				this.position.x += 1;
				break;
			case DIRECTIONS.down:
				this.position.y += 1;
				break;
			case DIRECTIONS.left:
				this.position.x -= 1;
				break;
		}

		return this;
	}

	/**
	 *
	 * @param {import('./Medal').Medal} medal
	 */
	collect(medal) {
		this.medals[medal.type]++;
		this.medalsCount++;
		this.score += MEDAL_POINTS[medal.type];

		return this;
	}
}

export { Team };
