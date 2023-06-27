<script async setup>
import { app } from '@/App';
import { state } from '@/State';
import VoteArrows from '@components/Inputs/VoteArrows.vue';
import MedalCompass from '@components/MedalCompass.vue';
import BoostModal from '@components/Modals/BoostModal.vue';
import MedalsModal from '@components/Modals/MedalsModal.vue';
import Modal from '@components/Modals/Modal.vue';
import NotificationsModal from '@components/Modals/NotificationsModal.vue';
import NewBoost from '@components/Notifications/NewBoost.vue';
import NewCollectMedal from '@components/Notifications/NewCollectMedal.vue';
import NewMedal from '@components/Notifications/NewMedal.vue';
import NewTeam from '@components/Notifications/NewTeam.vue';
import TheCounterMedals from '@components/TheCounterMedals.vue';
import TheCounterPlayers from '@components/TheCounterPlayers.vue';
import TheNotifications from '@components/TheNotifications.vue';
import TheOnbording from '@components/TheOnbording.vue';
import TheReactMoji from '@components/TheReactMoji.vue';
import TheScoreboard from '@components/TheScoreboard.vue';
import TheSettings from '@components/TheSettings.vue';
import { gsap } from 'gsap';
import { onMounted, ref } from 'vue';
import { EVENTS } from '@utils/constants';

const isModal = ref(false);
const idModal = ref(0);
const toggleModal = (e, id) => {
	e?.stopPropagation();

	idModal.value = id;
	isModal.value = !isModal.value;
	app.sound.play(`modal${isModal.value ? 'Open' : 'Close'}`);
};

const game = ref();

onMounted(() => {
	/// #if DEBUG
	state.on(EVENTS.KEY_DOWN, (key) => {
		if (key === 'H') game.value.classList.toggle('sixty-debug-hidden');
	});
	/// #endif

	app.sound.play('gameAmbient');
	app.webgl.camera.controlable = true;

	const tl = gsap.timeline();
	tl.to(app.webgl.postProcessing.uniforms.uFadeProgress, { value: 0, duration: 0.5 }, 0);
});
</script>

<template>
	<div ref="game" class="game">
		<TheSettings />
		<TheScoreboard />
		<div class="Header">
			<TheCounterMedals @click="(e) => toggleModal(e, 0)" />
			<TheCounterPlayers @click="(e) => toggleModal(e, 1)" />
			<TheNotifications @click="(e) => toggleModal(e, 2)" />
		</div>
		<TheReactMoji />
		<VoteArrows />
		<MedalCompass />

		<!-- Modals -->
		<Modal :is-active="isModal" :toogle-active="toggleModal">
			<MedalsModal v-if="idModal == 0" />
			<BoostModal v-if="idModal == 1" />
			<NotificationsModal v-if="idModal == 2" />
		</Modal>

		<!-- Onbording -->
		<TheOnbording />

		<!-- Notifications -->
		<NewMedal />
		<NewCollectMedal />
		<NewTeam />
		<NewBoost />

		<RouterView v-slot="{ Component }">
			<transition name="gameroute" mode="out-in"> <component :is="Component"></component></transition>
		</RouterView>
	</div>
</template>

<style lang="scss" scoped>
@use '@styles/tools' as *;
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

/** Route transition */
.gameroute-enter-from {
	transform: translateX(100%);
}

.gameroute-enter-active {
	transition: transform 0.5s $immg-posIn;
}

.gameroute-leave-to {
	transform: translateX(100%);
}

.gameroute-leave-active {
	transition: transform 0.5s $immg-posOut;
}
</style>
