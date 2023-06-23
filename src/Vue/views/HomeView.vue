<script setup>
<<<<<<< HEAD
import { app } from '@/App';
import router from '@Vue/router';
=======
import ButtonOrLink from '@components/Inputs/ButtonOrLink.vue';
>>>>>>> develop
import TheLogo from './../components/TheLogo.vue';
</script>

<template>
	<div class="home">
		<TheLogo />
<<<<<<< HEAD
=======

		<ButtonOrLink class="cta" to="/login"> Jouer </ButtonOrLink>
>>>>>>> develop
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
