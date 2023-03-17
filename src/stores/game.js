import { defineStore } from 'pinia';

export const useGameStore = defineStore('game', {
	state: () => {
		return { playersCounter: 0 };
	},
	actions: {
		updatePlayersCounter(count) {
			this.playersCounter = count;
		},
	},
});
