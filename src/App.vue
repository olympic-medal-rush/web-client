<script setup>
import WebglContainer from '@components/WebglContainer.vue';
import { app } from '@webglApp/App';
import { onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

onMounted(async () => {
	await app.load();
});
</script>

<template>
	<div class="container">
		<header>
			<div class="wrapper">
				<nav>
					<RouterLink to="/">Home</RouterLink>
					<RouterLink to="/game">Game</RouterLink>
				</nav>
			</div>
		</header>
		<main>
			<KeepAlive>
				<WebglContainer />
			</KeepAlive>
			<RouterView />
		</main>
		<footer></footer>
	</div>
</template>

<style lang="scss"></style>
