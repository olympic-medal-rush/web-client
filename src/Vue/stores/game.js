import { app } from '@/App';
import { state } from '@/State';
import { defineStore } from 'pinia';
import { MEDAL_POINTS } from '@utils/config';
import { EVENTS } from '@utils/constants';

export const useGameStore = defineStore('game', {
	state: () => {
		return { playersCounter: 0, scoreboard: [], medals: [], playerCountry: 'BZH' };
	},
	actions: {
		updatePlayersCounter(count) {
			this.playersCounter = count;
		},
		// SCOREBOARD
		initScoreboard(teams) {
			for (const [, value] of teams) {
				this.addNewTeamToScoreboard(value);
			}
			this.filterScoreboard();
			console.log('Init store score');
			state.emit(EVENTS.SCOREBOARD_UPDATE);
		},
		addNewTeamToScoreboard(data) {
			let score = data.medals[0] * MEDAL_POINTS[0] + data.medals[1] * MEDAL_POINTS[1] + data.medals[2] * MEDAL_POINTS[2];
			if (!score) score = 0;
			this.scoreboard.push({ name: data.iso, score: score });
			console.log('Add new team store score', { name: data.iso, score: score });
			state.emit(EVENTS.SCOREBOARD_UPDATE);
		},
		updateScoreTeam(data) {
			const newScore = data.medals[0] * MEDAL_POINTS[0] + data.medals[1] * MEDAL_POINTS[1] + data.medals[2] * MEDAL_POINTS[2];
			this.scoreboard[this.scoreboard.findIndex((team) => team.name === data.iso)].score = newScore;
			this.filterScoreboard();
			console.log('Update store score', data);
			state.emit(EVENTS.SCOREBOARD_UPDATE);
		},
		filterScoreboard() {
			this.scoreboard = this.scoreboard.sort((a, b) => b.score - a.score);
		},

		// MEDALS

		/** @param {import('@Game/Medal').Medal[]} medals*/
		addMedals(medals) {
			Object.values(medals).forEach((medal) => this.medals.push(medal));
		},

		/** @param {import('@Game/Medal').Medal} medal*/
		removeMedal(medal) {
			this.medals.slice(this.medals.indexOf(medal), 1);
		},

		closestMedal() {
			const currentPlayer = app.webgl.players.get(app.game.teams.get(this.playerCountry));
			return [...app.webgl.medals.values()]
				?.sort((a, b) => a.position.distanceTo(currentPlayer.position) - b.position.distanceTo(currentPlayer.position))
				.filter((medal) => !medal.isInScreen)[0];
		},

		// Player Country
		setPlayerCountry(iso) {
			this.playerCountry = iso;
		},
	},
	getters: {},
});
