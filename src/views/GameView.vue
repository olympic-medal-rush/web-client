<script async setup>
import { state } from '@/State';
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
import { useGameStore } from '@stores/game';
import { app } from '@webglApp/App';
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { EVENTS } from '@utils/constants';

const { t } = useI18n();
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
		<div class="Header">
			<TheCounterMedals />
			<TheCounterPlayers />
			<TheNotifications />
		</div>
		<TheScoreboard />
		<VoteArrows />
		<MedalCompass v-for="medal in domGameStore.medals" :id="medal.id" :key="medal.id" :position="app.webgl.medals.get(medal.id).screenPosition"></MedalCompass>
		<!-- Notifications -->
		<NewMedal />
		<NewCollectMedal />
		<NewTeam />
	</div>
</template>

<style lang="scss" scoped>
.Header {
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	margin: 16px 10px 0 10px;
}
</style>
