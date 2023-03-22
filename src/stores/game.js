import { GlobalApp } from '@/main';
import { defineStore } from 'pinia';
import { MEDAL_POINTS } from '@utils/config';

export const useGameStore = defineStore('game', {
	state: () => {
		return { playersCounter: 0, scorebord: [] };
	},
	actions: {
		updatePlayersCounter(count) {
			this.playersCounter = count;
		},
		initScorebord() {
			for (const [key, value] of GlobalApp.game.teams) {
				this.addNewTeamToScorebord(value);
			}
			this.filterScorebord();
		},
		addNewTeamToScorebord(data) {
			const score = data.medals[0] * MEDAL_POINTS[0] + data.medals[1] * MEDAL_POINTS[1] + data.medals[2] * MEDAL_POINTS[2];
			this.scorebord.push({ name: data.iso, score: score });
		},
		updateScoreTeam(data) {
			const newScore = data.medals[0] * MEDAL_POINTS[0] + data.medals[1] * MEDAL_POINTS[1] + data.medals[2] * MEDAL_POINTS[2];
			this.scorebord[this.scorebord.findIndex((team) => team.name === data.iso)].score = newScore;
			this.filterScorebord();
		},
		filterScorebord() {
			this.scorebord = this.scorebord.sort(function (a, b) {
				return b.score - a.score;
			});
		},
	},
});
