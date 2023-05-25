import { state } from '@/State';
import { useGameStore } from '@stores/game';
import { app } from '@webglApp/App';
import { EVENTS } from '@utils/constants';
import { Medal } from './Medal';
import { MedalsMap } from './MedalsMap';
import { Team } from './Team';

class GameController {
	constructor() {
		/** @type Map<string, Team> */
		this.teams = new Map();
		this.medals = new MedalsMap();

		this.domGameStore = useGameStore();

		this.userId = null;
		this.currentTeam = null;
		this.voteId = null;
	}

	/**
	 *
	 * @param {GameStatePayload} statePayload
	 */
	setState(statePayload) {
		this.userId = statePayload.user_id;
		statePayload.medals?.forEach((medalInGame) => this.medals.set(medalInGame.id, new Medal(medalInGame)));
		Object.entries(statePayload.countries_states).forEach(([key, teamInfos]) => this.teams.set(key, new Team(teamInfos)));

		state.emit(EVENTS.STATE_READY, { teams: this.teams, medals: this.medals });
		this.domGameStore.initScoreboard(this.teams);
		this.domGameStore.addMedals([...this.medals.values()]);
	}

	/**
	 *
	 * @param {CountryStatePayload} joinStatePayload
	 */
	userJoin(joinStatePayload) {
		this.voteId = joinStatePayload.vote_id;
		// This assumes that the new team event has already been received
		this.currentTeam = this.teams.get(joinStatePayload.iso);

		state.emit(EVENTS.JOIN_READY, this.currentTeam);
		this.domGameStore.setPlayerCountry(this.currentTeam.iso);
	}

	/**
	 *
	 * @param {NewCountryPayload} newTeamPayload
	 * @returns
	 */
	createTeam(newTeamPayload) {
		if (this.teams.has(newTeamPayload.iso)) return console.error('Team already exists');

		const team = new Team(newTeamPayload);
		this.teams.set(newTeamPayload.iso, team);

		state.emit(EVENTS.CREATE_TEAM, team);
		this.domGameStore.addNewTeamToScoreboard(team);
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
		this.domGameStore.addMedals(newMedals);
		state.emit(EVENTS.SPAWN_MEDALS, newMedals);
	}

	/**
	 *
	 * @param {MedalCollectionPayload} medalCollectionPayload
	 */
	medalCollect(medalCollectionPayload) {
		if (!this.teams.has(medalCollectionPayload.iso) || !this.medals.has(medalCollectionPayload.medal_id)) return console.error("Medal or team doesn't exist");

		const medalCollectedTeam = this.teams.get(medalCollectionPayload.iso);
		medalCollectedTeam.collect(this.medals.get(medalCollectionPayload.medal_id));
		this.medals.delete(medalCollectionPayload.medal_id);

		state.emit(EVENTS.COLLECT_MEDAL, medalCollectionPayload.medal_id, medalCollectedTeam);
		this.domGameStore.updateScoreTeam(medalCollectedTeam);
	}

	/**
	 *
	 * @param {VoteResultsPayload} voteResultsPayload
	 */
	voteResults(voteResultsPayload) {
		if (!this.teams.has(voteResultsPayload.iso)) return console.error("Team doesn't exist");

		// console.log(voteResultsPayload, 'vote results');
		if (voteResultsPayload.direction === 4) return;

		const movedTeam = this.teams.get(voteResultsPayload.iso).move(voteResultsPayload.direction);
		// console.log(movedTeam);
		state.emit(EVENTS.VOTE_RESULTS, movedTeam);
	}

	/**
	 *
	 * @param {UserVotePayload} userVotePlayload
	 */
	userVote(userVotePlayload) {
		app.server.userVote(userVotePlayload);
	}
}

export { GameController };
