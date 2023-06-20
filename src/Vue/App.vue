<script setup>
import { state } from '@/State';
import TheLoader from '@components/TheLoader.vue';
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import { EVENTS } from '@utils/constants';

const loaded = ref(false);

state.on(EVENTS.APP_LOADED, () => (loaded.value = true));
</script>

<template>
	<div class="container">
		<main>
			<TheLoader v-if="!loaded"></TheLoader>
			<!-- <video src="/assets/videos/confetti_v2.webm" muted playsinline autoplay loop type="video/webm"></video> -->
			<RouterView v-if="loaded" />
		</main>
		<footer></footer>
	</div>
</template>

<style scoped lang="scss">
.container,
main {
	height: 100%;
}
</style>
