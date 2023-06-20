import { defineStore } from 'pinia';

export const useVotesStore = defineStore('votes', {
	state: () => {
		return { up: 0, right: 0, down: 0, left: 0 };
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

		getSommeVote() {
			return this.up + this.right + this.down + this.left;
		},
	},
});