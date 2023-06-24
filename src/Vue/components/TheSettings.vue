<script setup>
import { app } from '@/App';
import Icon from '@/assets/svgs/Settings.svg';
import { ref } from 'vue';

const isOpen = ref(false);

const toggle = () => {
	isOpen.value = !isOpen.value;

	if (isOpen.value) app.sound.play('modal');
};
</script>

<template>
	<div class="settings">
		<div class="TheSettings" @click="() => toggle()">
			<Icon />
		</div>
		<div class="Popup-bg" :class="{ active: isOpen }" @click="() => toggle()"></div>
		<div class="Popup-container" :class="{ active: isOpen }">
			<h2>Crédits</h2>
			<h3>Design</h3>
			<p>Simon Gaspar</p>
			<p>Pierre - Andreas Durant</p>
			<h3>Dévelopement</h3>
			<p>Titouan Pellerin</p>
			<p>Maëlle Rabouan</p>
			<p>Antoine Oddoz</p>
			<div>
				<img src="/assets/images/logo-gobelins.png" alt="" srcset="" />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use '@styles/tools' as *;
.TheSettings {
	position: absolute;
	left: 13px;
	top: 83px;
	background-color: $bg-beige-ui;
	border-radius: 9999px;
	border: 2px solid rgba(0, 0, 0, 0.15);
	padding: 11px 11px 8px 11px;
	pointer-events: all;
}

.settings {
	position: absolute;
	width: 100%;
	height: 100%;

	.Popup-bg {
		position: absolute;
		width: 100%;
		height: 100%;
		opacity: 0;
		z-index: 1;
		pointer-events: none;
		backdrop-filter: blur(7px);
		-webkit-backdrop-filter: blur(7px);
		transition: opacity 0.2s ease-in-out;

		&.active {
			pointer-events: all;
			opacity: 1;
		}
	}

	.Popup-container {
		font-family: 'ApfelGrotezk-Fett';
		position: absolute;
		background-color: $bg-beige-ui;
		border-radius: 15px;
		z-index: 1;
		opacity: 0;
		width: 70%;
		padding: 24px 20px 14px 20px;
		left: calc(50% - 70% / 2);
		top: 100%;
		transform: scale(0.5);
		pointer-events: none;
		transition: all 0.6s $immg-posOut;

		@include tablet {
			width: 300px;
			left: calc(50% - 300px / 2);
		}

		div {
			display: flex;
			justify-content: center;
			margin-top: 15px;
		}

		img {
			width: 100px;
		}

		h2 {
			margin-bottom: 10px;
			text-transform: uppercase;
		}

		h3 {
			margin-bottom: 10px;
			margin-top: 20px;
			text-align: center;
		}

		p {
			margin-bottom: 5px;
			text-align: center;
			font-family: 'ApfelGrotezk-Regular';
		}

		&.active {
			transform: scale(1);
			top: 30%;
			pointer-events: all;
			opacity: 1;
		}
	}
}
</style>
