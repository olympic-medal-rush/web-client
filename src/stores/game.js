import { GlobalApp } from '@/main';
import { defineStore } from 'pinia';
import { MEDAL_POINTS } from '@utils/config';

export const useGameStore = defineStore('game', {
	state: () => {
		return { playersCounter: 0, scoreboard: [] };
	},
	actions: {
		updatePlayersCounter(count) {
			this.playersCounter = count;
		},
		initScoreboard() {
			for (const [, value] of GlobalApp.game.teams) {
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
			this.scoreboard = this.scoreboard.sort(function (a, b) {
				return b.score - a.score;
			});
		},
	},
});
