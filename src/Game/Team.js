import { DIRECTIONS } from '@utils/constants';

class Team {
	/**
	 *
	 * @param {TeamInfos} params
	 */
	constructor({ position, medals = { 0: 0, 1: 0, 2: 0 } }) {
		this.position = position;
		this.medals = medals;
	}

	/**
	 *
	 * @param {Direction} direction
	 */
	move(direction) {
		switch (direction) {
			case DIRECTIONS.up:
				this.position.y += 1;
				break;
			case DIRECTIONS.right:
				this.position.x += 1;
				break;
			case DIRECTIONS.down:
				this.position.y -= 1;
				break;
			case DIRECTIONS.left:
				this.position.x -= 1;
				break;
		}
	}

	/**
	 *
	 * @param {import('./Medal').Medal} medal
	 */
	collect(medal) {
		this.medals[medal.type]++;
	}
}

export { Team };
