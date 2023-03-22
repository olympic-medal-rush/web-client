import { state } from '@/State';
import { GlobalApp } from '@/main';
import { EVENTS } from '@utils/constants';
import { Medal } from './Medal';
import { Team } from './Team';

class GameController {
	constructor() {
		/** @type Map<string, Team> */
		this.teams = new Map();
		/** @type Map<number, Medal> */
		this.medals = new Map();

		this.userId = null;
		this.currentTeam = null;
		this.voteId = null;
	}

	/**
	 *
	 * @param {ConnectStatePayload} statePayload
	 */
	setState(statePayload) {
		this.userId = statePayload.userId;

		statePayload.medalsInGame.forEach((medalInGame) => this.medals.set(medalInGame.id, new Medal(medalInGame)));
		Object.entries(statePayload.teamsState).forEach(([key, teamInfos]) => this.teams.set(key, new Team(teamInfos)));

		state.emit(EVENTS.STATE_READY, { teams: this.teams, medals: this.medals });
	}

	/**
	 *
	 * @param {JoinStatePayload} joinStatePayload
	 */
	userJoin(joinStatePayload) {
		this.voteId = joinStatePayload.voteId;
		// This assumes that the new team event has already been received
		this.currentTeam = this.teams.get(joinStatePayload.iso);

		state.emit(EVENTS.JOIN_READY, this.currentTeam);
	}

	/**
	 *
	 * @param {NewTeamPayload} newTeamPayload
	 * @returns
	 */
	createTeam(newTeamPayload) {
		if (this.teams.has(newTeamPayload.iso)) return console.error('Team already exists');

		const team = new Team(newTeamPayload);
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
			if (this.medals.has(medalInGame.id)) return console.error('Medal already exists');

			const medal = new Medal(medalInGame);
			this.medals.set(medalInGame.id, medal);
			newMedals.push(medal);
		});
		state.emit(EVENTS.SPAWN_MEDALS, newMedals);
	}

	/**
	 *
	 * @param {MedalCollectionPayload} medalCollectionPayload
	 */
	medalCollect(medalCollectionPayload) {
		if (!this.teams.has(medalCollectionPayload.iso) || !this.medals.has(medalCollectionPayload.medal.id)) return console.error("Medal or team doesn't exist");

		this.teams.get(medalCollectionPayload.iso).collect(this.medals.get(medalCollectionPayload.medal.id));
		this.medals.delete(medalCollectionPayload.medal.id);

		state.emit(EVENTS.COLLECT_MEDAL, medalCollectionPayload.medal.id);
	}

	/**
	 *
	 * @param {VoteResultsPayload} voteResultsPayload
	 */
	voteResults(voteResultsPayload) {
		if (!this.teams.has(voteResultsPayload.iso)) return console.error("Team doesn't exist");

		const movedTeam = this.teams.get(voteResultsPayload.iso).move(voteResultsPayload.direction);

		state.emit(EVENTS.VOTE_RESULTS, movedTeam);
	}

	/**
	 *
	 * @param {*} userVotePlayload
	 */
	userVote(userVotePlayload) {
		GlobalApp.server.userVote(userVotePlayload);
	}
}

export { GameController };
