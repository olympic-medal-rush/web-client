<script setup>
import { app } from '@/App';
import ButtonOrLink from '@components/Inputs/ButtonOrLink.vue';
import TheLogo from './../components/TheLogo.vue';

const initFirstSound = () => {
	app.sound.initAudio();
};
</script>

<template>
	<div class="home">
		<TheLogo />

		<ButtonOrLink class="cta" to="/login" @click="() => initFirstSound()"> Jouer </ButtonOrLink>
	</div>
</template>

<style lang="scss">
.home {
	.cta {
		display: block;
		width: 123px;
		position: absolute;
		bottom: 57px;
		left: calc(50% - 123px / 2);

		.btn-inner {
			font-family: 'ApfelGrotezk-Fett';
			font-size: 24px;
		}
	}
}
</style>
