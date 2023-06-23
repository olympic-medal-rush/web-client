import { app } from '@/App';
import { state } from '@/State';
import { useMedalsInGameStore } from '@stores/medalsInGame';
import { useTeamsStore } from '@stores/teams';
import { useVotesStore } from '@stores/votes';
import { EVENTS } from '@utils/constants';
import { Medal } from './Medal';
import { Team } from './Team';

class GameController {
	#joinStatePayload = null;
	constructor() {
		/** @type Map<string, Team> */
		this.teams = new Map();
		/** @type Map<string, Medal> */
		this.medals = new Map();

		this.medalsInGameStore = useMedalsInGameStore();
		this.teamsStore = useTeamsStore();
		this.voteStore = useVotesStore();

		this.userId = null;
		this.currentTeam = null;
		this.voteId = null;
		this.hasJoin = false;
	}

	/**
	 *
	 * @param {GameStatePayload} statePayload
	 */
	setState(statePayload) {
		if (this.userId) this.#cleanState();
		this.userId = statePayload.user_id;
		statePayload.medals?.forEach((medalInGame) => this.medals.set(medalInGame.id, new Medal(medalInGame)));
		Object.entries(statePayload.countries_states).forEach(([key, teamInfos]) => {
			if (key !== 'ALL') {
				this.teams.set(key, new Team(teamInfos));
				this.teamsStore.add(this.teams.get(key));
			}
		});

		this.medalsInGameStore.add([...this.medals.values()]);

		state.emit(EVENTS.STATE_READY, { teams: this.teams, medals: this.medals });
		if (this.#joinStatePayload) this.userJoin(this.#joinStatePayload);
	}

	/**
	 *
	 * @param {CountryStatePayload} joinStatePayload
	 */
	userJoin(joinStatePayload) {
		this.#joinStatePayload = joinStatePayload;

		this.voteId = joinStatePayload.vote_id;
		// This assumes that the new team event has already been received
		this.currentTeam = this.teams.get(joinStatePayload.iso);

		state.emit(EVENTS.JOIN_READY, this.currentTeam);

		this.teamsStore.setCurrent(this.currentTeam.iso);
		state.on(EVENTS.TICK, this.voteStore.updateTime);
	}

	/**
	 * Receive player count regularly
	 *
	 * @param {PlayerCountsPayload} data
	 */
	updatePlayerCount(data) {
		Object.entries(data).forEach(([iso, count]) => {
			this.teamsStore.updatePlayerCount(iso, count);
		});
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
		this.teamsStore.add(team);
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

		this.medalsInGameStore.add(newMedals);
		state.emit(EVENTS.SPAWN_MEDALS, newMedals);
	}

	/**
	 *
	 * @param {MedalCollectionPayload} medalCollectionPayload
	 */
	medalCollect(medalCollectionPayload) {
		if (!this.teams.has(medalCollectionPayload.iso) || !this.medals.has(medalCollectionPayload.medal_id)) return console.error("Medal or team doesn't exist");

		const medalCollectedTeam = this.teams.get(medalCollectionPayload.iso);
		const collectedMedal = this.medals.get(medalCollectionPayload.medal_id);
		collectedMedal.dispose();

		medalCollectedTeam.collect(this.medals.get(medalCollectionPayload.medal_id));
		this.medals.delete(medalCollectionPayload.medal_id);

		state.emit(EVENTS.COLLECT_MEDAL, collectedMedal, medalCollectedTeam);

		this.teamsStore.collectMedal(medalCollectionPayload.iso, collectedMedal);
	}

	/**
	 *
	 * @param {VoteResultsPayload} voteResultsPayload
	 */
	voteResults(voteResultsPayload) {
		if (this.teamsStore.currentIso && voteResultsPayload.iso === this.teamsStore.currentIso) {
			this.voteStore.resetTime();
			this.voteStore.resetVote();
		}

		if (!this.teams.has(voteResultsPayload.iso)) return console.error("Team doesn't exist");

		if (voteResultsPayload.direction === 4) return;

		const movedTeam = this.teams.get(voteResultsPayload.iso).move(voteResultsPayload.direction);
		state.emit(EVENTS.VOTE_RESULTS, movedTeam);
	}

	/**
	 *
	 * @param {UserVotePayload} userVotePlayload
	 */
	userVote(userVotePlayload) {
		app.server.userVote(userVotePlayload);
	}

	/**
	 *
	 * @param {VoteCountPayload} voteCountPayload
	 */
	voteCount(voteCountPayload) {
		this.voteStore.setVote(voteCountPayload);
		state.emit(EVENTS.VOTE_COUNT, voteCountPayload);
	}

	#cleanState() {
		this.teamsStore.clear();
		this.medalsInGameStore.clear();
		state.emit(EVENTS.CLEAN_STATE, true);
	}
}

export { GameController };
