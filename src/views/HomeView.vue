<script setup>
import router from '@/router';
import { app } from '@webglApp/App';
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
