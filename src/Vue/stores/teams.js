import { state } from '@/State';
import { defineStore } from 'pinia';
import { MEDAL_POINTS } from '@utils/config';
import { EVENTS } from '@utils/constants';
import { useMedalsStore } from './medals';

export const useTeamsStore = defineStore('teams', {
	state: () => {
		return { teams: {}, scoreboard: [], totalPlayerCount: 0, currentIso: null };
	},
	actions: {
		/**
		 *
		 * @param {import("@Game/Team").Team} team
		 */
		add(team, playerCount = 1) {
			this.teams[team.iso] = { iso: team.iso, medals: team.medals, playerCount, score: team.score, medalsCount: team.medalsCount, position: 0 };
			this.scoreboard.push({ iso: team.iso, score: team.score });
			this.filterScoreboard();
		},

		/**
		 *
		 * @param {string} iso
		 * @param {number} count
		 */
		updatePlayerCount(iso, count) {
			if (iso === 'ALL') this.totalPlayerCount = count;
			else this.teams[iso].playerCount = count;
		},

		/**
		 *
		 * @param {string} iso
		 * @param {import('@Game/Medal').Medal} medal
		 */
		collectMedal(iso, medal) {
			this.teams[iso].medalsCount++;
			this.teams[iso].score += MEDAL_POINTS[medal.type];
			this.scoreboard[this.scoreboard.findIndex((score) => score.iso === iso)].score = this.teams[iso].score;
			this.filterScoreboard();

			useMedalsStore().shouldRefresh.add(iso);
		},

		filterScoreboard() {
			const firstIso = this.scoreboard[0].iso;
			this.scoreboard.sort((a, b) => b.score - a.score);
			this.scoreboard.forEach((team, i) => (this.teams[team.iso].position = i + 1));
			state.emit(EVENTS.SCOREBOARD_UPDATE);
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
		getMedalsCount(iso) {
			const medals = this.teams[iso].medals;
			return medals[0] + medals[1] + medals[2];
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
		podium: (state) => state.scoreboard.slice(0, 2),
	},
});
