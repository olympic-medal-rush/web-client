<script setup>
import { state } from '@/State';
import TheLoader from '@components/TheLoader.vue';
import { EVENTS } from '@utils/constants';
import { ref } from 'vue';
import { RouterView } from 'vue-router';

const loaded = ref(false);

state.on(EVENTS.APP_LOADED, () => (loaded.value = true));
</script>

<template>
	<div class="container">
		<main>
			<TheLoader v-if="!loaded"></TheLoader>
			<RouterView v-if="loaded" v-slot="{ Component }">
				<transition name="route" mode="out-in"> <component :is="Component"></component></transition>
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
	transition: opacity 0.3s $immg-zoomOut;
}

.route-leave-to {
	opacity: 0;
}

.route-leave-active {
	transition: opacity 0.3s $immg-zoomIn;
}
</style>
