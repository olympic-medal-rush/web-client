import { defineStore } from 'pinia';
import { VOTES } from '@utils/config';

export const useVotesStore = defineStore('votes', {
	state: () => {
		return { up: 0, right: 0, down: 0, left: 0, currentRate: VOTES.rate, rate: VOTES.rate };
	},
	actions: {
		/**
		 *
		 * @param {VoteCountPayload} data
		 */
		setVote(data) {
			this.up = data.up;
			this.right = data.right;
			this.down = data.down;
			this.left = data.left;
		},

		resetVote() {
			this.up = 0;
			this.right = 0;
			this.down = 0;
			this.left = 0;
		},

		getTotalCount() {
			return this.up + this.right + this.down + this.left;
		},

		updateTime({ dt }) {
			this.currentRate = this.currentRate - dt * 1000;
		},

		resetTime() {
			this.currentRate = this.rate;
		},

		getLeftTime() {
			return 100 - (Math.max(0, this.currentRate) / this.rate) * 100;
		},

		updateRate(newRate) {
			this.rate = newRate;
			this.currentRate = this.rate;
		},
	},
});
