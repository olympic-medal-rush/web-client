import { defineStore } from 'pinia';
import { MEDAL_POINTS } from '@utils/config';

export const useTeamsStore = defineStore('teams', {
	state: () => {
		return { teams: {}, scoreboard: [], playerCount: 0, currentIso: null };
	},
	actions: {
		/**
		 *
		 * @param {import("@Game/Team").Team} team
		 */
		add(team, playerCount = 1) {
			this.teams[team.iso] = { iso: team.iso, medals: team.medals, playerCount, position: 0, score: 0 };
			let score = team.medals[0] * MEDAL_POINTS[0] + team.medals[1] * MEDAL_POINTS[1] + team.medals[2] * MEDAL_POINTS[2];
			if (!score) score = 0;

			this.teams[team.iso].score = score;

			this.scoreboard.push({ iso: team.iso, score });
			this.filterScoreboard();
		},

		/**
		 *
		 * @param {string} iso
		 * @param {number} count
		 */
		updatePlayerCount(iso, count) {
			if (iso === 'ALL') this.playerCount = count;
			else this.teams[iso].playerCount = count;
		},

		/**
		 *
		 * @param {string} iso
		 * @param {import('@Game/Medal').Medal} medal
		 */
		collectMedal(iso, medal) {
			this.teams[iso].medals[medal.type]++;
			this.teams[iso].score += MEDAL_POINTS[medal.type];
			this.scoreboard[this.scoreboard.findIndex((score) => score.iso === iso)].score = this.teams[iso].score;
			this.filterScoreboard();
		},

		filterScoreboard() {
			this.scoreboard.sort((a, b) => b.score - a.score);
			this.scoreboard.forEach((team, i) => (this.teams[team.iso].position = i + 1));
		},

		/**
		 *
		 * @param {string} iso
		 */
		getTeam(iso) {
			return this.teams[iso];
		},

		/**
		 *
		 * @param {string} iso
		 * @returns
		 */
		getPlayerCount(iso) {
			return this.teams[iso].playerCount;
		},

		/**
		 *
		 * @param {string} iso
		 */
		setCurrent(iso) {
			this.currentIso = iso;
		},

		clear() {
			this.teams = {};
			this.scoreboard = [];
		},
	},
	getters: {
		currentTeamCount: (state) => state.teams[state.currentIso]?.playerCount || 0,
		currentTeam: (state) => state.teams[state.currentIso],
	},
});
