<script setup>
import { app } from '@/App';
import router from '@Vue/router';
import TheLogo from './../components/TheLogo.vue';

const goChosePays = () => {
	app.webgl.renderLogin = true;
	router.push('/login');
};
</script>

<template>
	<div class="home">
		<TheLogo />
	</div>
</template>

<style lang="scss" scoped></style>
