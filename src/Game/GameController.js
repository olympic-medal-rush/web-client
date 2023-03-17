import { Medal } from './Medal';
import { Team } from './Team';

class GameController {
	/**
	 *
	 * @param {ConnectStatePayload} state
	 */
	constructor(state) {
		/** @type Map<string, Team> */
		this.teams = new Map();
		/** @type Map<number, Medal> */
		this.medals = new Map();

		this.#applyState(state);
	}

	/**
	 *
	 * @param {ConnectStatePayload} state
	 */
	#applyState(state) {
		state.medalsInGame.forEach((medalInGame) => this.medals.set(medalInGame.id, new Medal(medalInGame)));
		Object.entries(state.teamsState).forEach(([key, teamInfos]) => this.teams.set(key, new Team(teamInfos)));
	}

	/**
	 *
	 * @param {NewTeamPayload} newTeamPayload
	 * @returns
	 */
	addTeam(newTeamPayload) {
		const team = new Team({ position: newTeamPayload.position });
		this.teams.set(newTeamPayload.iso, team);

		return team;
	}

	/**
	 *
	 * @param {MedalApparitionPayload} medalApparitionPayload
	 */
	addMedals(medalApparitionPayload) {
		const newMedals = [];
		medalApparitionPayload.medals.forEach((medalInGame) => {
			const medal = new Medal(medalInGame);
			this.medals.set(medalInGame.id, medal);
			newMedals.push(medal);
		});

		return newMedals;
	}

	/**
	 *
	 * @param {MedalCollectionPayload} medalCollectionPayload
	 */
	collectMedal(medalCollectionPayload) {
		this.teams.get(medalCollectionPayload.iso).collect(this.medals.get(medalCollectionPayload.medal.id));
		this.medals.delete(medalCollectionPayload.medal.id);
	}

	/**
	 *
	 * @param {VoteResultsPayload} voteResultsPayload
	 */
	moveTeam(voteResultsPayload) {
		this.teams.get(voteResultsPayload.iso).move(voteResultsPayload.direction);
	}
}

export { GameController };

/* 
This class will create teams and medal from the current game state
	- Medals are the medals on the playground
	- Teams are the active teams

This should implement multiple methods :
	addTeam() => to create a new team if a team joins the game while you're playing
	addMedal() => to create a new medal on the playground


Medals :
	Have a position on the playground
	Have a type

Teams :
	Have a score, incremented when a medal is collected
	Can move in a direction
	Can collect a medal
	Have a position in the playground, updated on move

*/
