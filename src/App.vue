<script setup>
import TheLoader from '@components/TheLoader.vue';
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import { EVENTS } from '@utils/constants';
import { state } from './State';

const loaded = ref(false);

state.on(EVENTS.APP_LOADED, () => (loaded.value = true));
</script>

<template>
	<div class="container">
		<!-- <header>
			<div class="wrapper">
				<nav>
					<RouterLink to="/">Home</RouterLink>
					<RouterLink to="/game">Game</RouterLink>
				</nav>
			</div>
		</header> -->
		<main>
			<TheLoader v-if="!loaded"></TheLoader>
			<RouterView v-if="loaded" />
		</main>
		<footer></footer>
	</div>
</template>

<style lang="scss"></style>
