import { defineStore } from 'pinia';

export const useMedalsStore = defineStore('medals', {
	state: () => {
		return { medals: {} };
	},
	actions: {
		/**
		 *
		 * @param {string} iso
		 */
		async getMedals(iso) {
			if (!this.medals[iso]) {
				const medal = await (await fetch(`${import.meta.env.OLYMPIC_MEDAL_API}/medals/${iso}`)).json();
				this.medals[iso] = medal;
			}
			return this.medals[iso];
		},
	},
});
