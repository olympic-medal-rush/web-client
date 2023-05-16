import { defineStore } from 'pinia';
import { MEDAL_POINTS } from '@utils/config';

export const useGameStore = defineStore('game', {
	state: () => {
		return { playersCounter: 0, scoreboard: [], medals: [] };
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
		},
		addNewTeamToScoreboard(data) {
			const score = data.medals[0] * MEDAL_POINTS[0] + data.medals[1] * MEDAL_POINTS[1] + data.medals[2] * MEDAL_POINTS[2];
			this.scoreboard.push({ name: data.iso, score: score });
		},
		updateScoreTeam(data) {
			const newScore = data.medals[0] * MEDAL_POINTS[0] + data.medals[1] * MEDAL_POINTS[1] + data.medals[2] * MEDAL_POINTS[2];
			this.scoreboard[this.scoreboard.findIndex((team) => team.name === data.iso)].score = newScore;
			this.filterScoreboard();
		},
		filterScoreboard() {
			this.scoreboard = this.scoreboard.sort((a, b) => b.score - a.score);
		},

		// MEDALS

		/** @param {import('../game/Medal').Medal[]} medals*/
		addMedals(medals) {
			Object.values(medals).forEach((medal) => this.medals.push(medal));
		},

		/** @param {import('../game/Medal').Medal} medal*/
		removeMedal(medal) {
			this.medals.slice(this.medals.indexOf(medal), 1);
		},

		/** @param {import('../game/Team').Team} team*/
		closestMedal(team) {
			return this.medals.sort((a, b) => a.position.distanceTo(team.position) - b.position.distanceTo(team.position))[0];
		},
	},
	getters: {},
});
