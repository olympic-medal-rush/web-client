<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
	<div class="container">
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
