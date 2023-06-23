import { defineStore } from 'pinia';

export const useMedalsStore = defineStore('medals', {
	state: () => {
		return { medals: {}, shouldRefresh: new Set(), preloaded: new Set() };
	},
	actions: {
		/**
		 *
		 * @param {string} iso
		 */
		async getMedals(iso) {
			if (!this.medals[iso] || this.shouldRefresh.has(iso)) {
				this.shouldRefresh.delete(iso);

				try {
					const response = await fetch(`${import.meta.env.OLYMPIC_MEDALS_API}/medals/${iso.toUpperCase()}`);
					const medals = await response.json();
					medals.forEach((medal) => {
						new Image().src = medal.cover_url;
					});
					this.medals[iso] = medals;
				} catch (err) {
					console.error(err);
					return;
				}
			}
			return this.medals[iso];
		},
	},
});
