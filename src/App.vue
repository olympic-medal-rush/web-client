<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
	<div id="app">
		<header>
			<div class="wrapper">
				<nav>
					<RouterLink to="/">Home</RouterLink>
					<RouterLink to="/about">About</RouterLink>
				</nav>
			</div>
		</header>
		<main>
			<RouterView />
		</main>
		<footer></footer>
	</div>
</template>

<style lang="scss"></style>
