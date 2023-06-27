<script setup>
import { state } from '@/State';
import TheLoader from '@components/TheLoader.vue';
import TheLogo from '@components/TheLogo.vue';
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import { EVENTS } from '@utils/constants';

const loaded = ref(false);
const loggedIn = ref(false);

state.on(EVENTS.APP_LOADED, () => (loaded.value = true));
state.on(EVENTS.JOIN_READY, () => (loggedIn.value = true));
</script>

<template>
	<div class="container">
		<main>
			<TheLoader v-if="!loaded" />
			<transition name="fade">
				<TheLogo v-if="loaded && !loggedIn" />
			</transition>
			<RouterView v-if="loaded" v-slot="{ Component, route }">
				<transition name="route" mode="out-in"> <component :is="Component" :key="route.fullPath"></component></transition>
			</RouterView>
		</main>
		<footer></footer>
	</div>
</template>

<style scoped lang="scss">
@use '@styles/tools' as *;

.container,
main {
	height: 100%;
}

/** Route transition */
.route-enter-from {
	opacity: 0;
}

.route-enter-active {
	transition: opacity 0.3s linear;
}

.route-leave-to {
	opacity: 0;
}

.route-leave-active {
	transition: opacity 0.3s linear;
}

/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.fade-enter-active {
	transition: opacity 0.8s linear, transform 0.3s $immg-posIn;
}

.fade-leave-active {
	transition: opacity 0.3s linear, transform 0.3s $immg-zoomOut;
}

.fade-enter-from {
	transform: scale(0);
}
.fade-leave-to {
	opacity: 0;
	transform: scale(1);
}
</style>
