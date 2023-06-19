import { defineStore } from 'pinia';

export const useMedalsStore = defineStore('medals', {
	state: () => {
		return { medals: {} };
	},
	actions: {
		/**
		 *
		 * @param {string} id
		 */
		async getMedal(id) {
			if (!this.medals[id]) {
				const medal = await (await fetch(`${import.meta.env.OLYMPIC_MEDAL_API}/medal/${id}`)).json();
				this.medals[id] = medal;
			}
			return this.medals[id];
		},
	},
});
