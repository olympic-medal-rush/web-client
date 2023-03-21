import { state } from '@/State';
import { EVENTS } from '@utils/constants';
import { Medal } from './Medal';
import { Team } from './Team';

class GameController {
	constructor() {
		/** @type Map<string, Team> */
		this.teams = new Map();
		/** @type Map<number, Medal> */
		this.medals = new Map();
	}

	/**
	 *
	 * @param {ConnectStatePayload} statePayload
	 */
	setState(statePayload) {
		statePayload.medalsInGame.forEach((medalInGame) => this.medals.set(medalInGame.id, new Medal(medalInGame)));
		Object.entries(statePayload.teamsState).forEach(([key, teamInfos]) => this.teams.set(key, new Team(teamInfos)));

		state.emit(EVENTS.STATE_READY);
	}

	/**
	 *
	 * @param {NewTeamPayload} newTeamPayload
	 * @returns
	 */
	createTeam(newTeamPayload) {
		const team = new Team({ position: newTeamPayload.position });
		this.teams.set(newTeamPayload.iso, team);

		state.emit(EVENTS.CREATE_TEAM, newTeamPayload.iso);
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

		state.emit(EVENTS.ADD_MEDALS, newMedals);
	}

	/**
	 *
	 * @param {MedalCollectionPayload} medalCollectionPayload
	 */
	medalCollect(medalCollectionPayload) {
		this.teams.get(medalCollectionPayload.iso).collect(this.medals.get(medalCollectionPayload.medal.id));
		this.medals.delete(medalCollectionPayload.medal.id);

		state.emit(EVENTS.COLLECT_MEDAL, medalCollectionPayload.medal.id);
	}

	/**
	 *
	 * @param {VoteResultsPayload} voteResultsPayload
	 */
	voteResults(voteResultsPayload) {
		const movedTeam = this.teams.get(voteResultsPayload.iso).move(voteResultsPayload.direction);

		state.emit(EVENTS.VOTE_RESULTS, { iso: voteResultsPayload.iso, team: movedTeam });
	}
}

export { GameController };
