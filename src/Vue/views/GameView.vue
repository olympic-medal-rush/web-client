<script async setup>
import { state } from '@/State';
import { useGameStore } from '@Vue/stores/game';
import VoteArrows from '@components/Inputs/VoteArrows.vue';
import MedalCompass from '@components/MedalCompass.vue';
import BoostModal from '@components/Modals/BoostModal.vue';
import MedalsModal from '@components/Modals/MedalsModal.vue';
import Modal from '@components/Modals/Modal.vue';
import NotificationsModal from '@components/Modals/NotificationsModal.vue';
import NewCollectMedal from '@components/Notifications/NewCollectMedal.vue';
import NewMedal from '@components/Notifications/NewMedal.vue';
import NewTeam from '@components/Notifications/NewTeam.vue';
import TheCounterMedals from '@components/TheCounterMedals.vue';
import TheCounterPlayers from '@components/TheCounterPlayers.vue';
import TheNotifications from '@components/TheNotifications.vue';
import TheScoreboard from '@components/TheScoreboard.vue';
import TheSettings from '@components/TheSettings.vue';
import { EVENTS } from '@utils/constants';
import { onMounted, ref } from 'vue';

const isModal = ref(false);
const idModal = ref(0);
const toggleModal = (id) => {
	idModal.value = id;
	isModal.value = !isModal.value;
};

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
		<TheSettings />
		<TheScoreboard />
		<div class="Header">
			<TheCounterMedals @click="() => toggleModal(0)" />
			<TheCounterPlayers @click="() => toggleModal(1)" />
			<TheNotifications @click="() => toggleModal(2)" />
		</div>
		<VoteArrows />
		<MedalCompass v-for="medal in domGameStore.medals" :key="medal.id"></MedalCompass>

		<!-- Modals -->
		<Modal :is-active="isModal" :toogle-active="toggleModal">
			<MedalsModal v-if="idModal == 0" />
			<BoostModal v-if="idModal == 1" />
			<NotificationsModal v-if="idModal == 2" />
		</Modal>

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
	position: absolute;
	top: 20px;
	left: 13px;
	width: calc(100% - (2 * 13px));
}
</style>
