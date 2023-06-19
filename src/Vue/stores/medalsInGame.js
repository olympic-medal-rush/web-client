import { defineStore } from 'pinia';

export const useMedalsInGameStore = defineStore('medalsInGame', {
	state: () => {
		return { medalsInGame: {}, medalsArray: [], count: 0 };
	},
	actions: {
		/** @param {import('@Game/Medal').Medal[]} medals*/
		add(medals) {
			medals.forEach((medal) => {
				this.medalsInGame[medal.id] = { id: medal.id, type: medal.type };
				this.medalsArray.push(this.medalsInGame[medal.id]);
				this.count++;
			});
		},

		/** @param {import('@Game/Medal').Medal} medal*/
		removeMedal(medal) {
			delete this.medalsInGame[medal.id];
			this.medalsArray.splice(
				this.medalsArray.findIndex((medalInArray) => medalInArray.id === medal.id),
				1,
			);
			this.count--;
		},
	},
});
