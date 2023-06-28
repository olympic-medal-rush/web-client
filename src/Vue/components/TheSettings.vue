<script setup>
import { app } from '@/App';
import Close from '@/assets/svgs/Close.svg';
import Icon from '@/assets/svgs/Settings.svg';
import { ref } from 'vue';

const isOpen = ref(false);

const toggle = () => {
	isOpen.value = !isOpen.value;

	app.sound.play(`modal${isOpen.value ? 'Open' : 'Close'}`);
};
</script>

<template>
	<div class="settings">
		<div class="TheSettings" @click="toggle()">
			<Icon />
		</div>
		<div class="Popup-bg" :class="{ active: isOpen }" @click="toggle()"></div>
		<div class="Popup-container" :class="{ active: isOpen }">
			<button
				class="close-btn"
				@click="
					(e) => {
						toggle();
						app.sound.play('click');
					}
				"
			>
				<Close />
			</button>
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
		position: relative;
		background-color: $bg-beige-ui;
		border-radius: 15px;
		z-index: 1;
		width: 70%;
		padding: 24px;
		left: 50%;
		top: 50%;
		transform: translate3d(-50%, -50%, 0) scale(0.5) rotate(5deg);
		opacity: 0;
		pointer-events: none;
		transition: transform 0.3s $immg-zoomOut, opacity 0.3s linear;

		@include tablet {
			width: 300px;
		}

		.close-btn {
			position: absolute;
			right: 15px;
			top: 15px;
			background-color: #e1e1c3;
			border-radius: 9999px;
			width: 40px;
			height: 40px;
			padding: 7px;
			position: absolute;
			display: flex;
			justify-content: center;
			align-items: center;

			&:active {
				transform: scale(0.95);
			}
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
			pointer-events: all;
			opacity: 1;
			transform: translate3d(-50%, -50%, 0) scale(1) rotate(0);
		}
	}
}

.mobile-only {
	.settings {
		.Popup-container {
			width: 70%;
			left: 50%;
		}
	}
}
</style>
