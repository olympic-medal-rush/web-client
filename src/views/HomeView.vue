<script setup>
import router from '@/router';
import VButton from './../components/Inputs/VButton.vue';
import TheLogo from './../components/TheLogo.vue';

const goChosePays = () => {
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
