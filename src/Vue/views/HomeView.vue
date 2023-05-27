<script setup>
import { app } from '@/App';
import router from '@Vue/router';
import VButton from './../components/Inputs/VButton.vue';
import TheLogo from './../components/TheLogo.vue';

const goChosePays = () => {
	app.webgl.renderLogin = true;
	router.push('/login');
};
</script>

<template>
	<div class="home">
		<TheLogo />

		<VButton @click="goChosePays">Rejoindre un pays</VButton>
	</div>
</template>

<style lang="scss" scoped></style>
