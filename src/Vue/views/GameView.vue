<script async setup>
import { state } from '@/State';
import { useGameStore } from '@Vue/stores/game';
import VoteArrows from '@components/Inputs/VoteArrows.vue';
import MedalCompass from '@components/MedalCompass.vue';
import NewCollectMedal from '@components/Notifications/NewCollectMedal.vue';
import NewMedal from '@components/Notifications/NewMedal.vue';
import NewTeam from '@components/Notifications/NewTeam.vue';
import TheCounterMedals from '@components/TheCounterMedals.vue';
import TheCounterPlayers from '@components/TheCounterPlayers.vue';
import TheNotifications from '@components/TheNotifications.vue';
import ThePlayerCountry from '@components/ThePlayerTeam.vue';
import TheScoreboard from '@components/TheScoreboard.vue';
import { onMounted, ref } from 'vue';
import { EVENTS } from '@utils/constants';

const domGameStore = useGameStore();

const game = ref();

onMounted(() => {
	/// #if DEBUG
	state.on(EVENTS.KEY_DOWN, (key) => {
		if (key === 'H') game.value.classList.toggle('sixty-debug-hidden');
	});
	/// #endif
});
</script>

<template>
	<div ref="game" class="game">
		<ThePlayerCountry />
		<TheScoreboard />
		<div class="Header">
			<TheCounterMedals />
			<TheCounterPlayers />
			<TheNotifications />
		</div>
		<VoteArrows />
		<MedalCompass v-for="medal in domGameStore.medals" :key="medal.id"></MedalCompass>

		<!-- Notifications -->
		<NewMedal />
		<NewCollectMedal />
		<NewTeam />
		<RouterView />
	</div>
</template>

<style lang="scss" scoped>
.game {
	width: 100vw;
	height: 100%;
	overflow: hidden;
}
.Header {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	// z-index: 3;
	position: absolute;
	top: 20px;
	left: 13px;
	width: calc(100% - (2 * 13px));
}
</style>
