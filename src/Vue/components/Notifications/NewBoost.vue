<script setup>
import { state } from '@/State';
import { EVENTS } from '@utils/constants';
import { ref } from 'vue';

const isActive = ref(false);
const currentBoost = ref('vote_rate');

state.on(EVENTS.NOTIF_BUFF, (e) => {
	currentBoost.value = e;
	isActive.value = true;
	setTimeout(() => {
		isActive.value = false;
	}, 3000);
});
</script>

<template>
	<div class="NewBoost" :class="{ active: isActive }">
		<h2>Boost débloqué !</h2>
		<p v-if="currentBoost === 'vote_rate'"><img :src="'/assets/svgs/chrono.svg'" /> Temps de vote est réduit !</p>
		<p v-if="currentBoost === 'pathfinding'"><img :src="'/assets/svgs/path.svg'" /> Chemin vers la médaille</p>
	</div>
</template>

<style lang="scss" scoped>
@use '@styles/tools' as *;
.NewBoost {
	position: absolute;
	top: -300px;
	background-color: $bg-beige-ui;
	padding: 14px 14px 24px 14px;
	border-radius: 10px;
	transition: top 0.3s;
	color: $text-olive-ui;
	width: 93.5%;
	pointer-events: all;
	scale: 0.3;
	opacity: 0;
	height: 83px;
	left: calc(50% - 93.5% / 2);
	transition: top 0.3s $in-out-quad, scale 0.3s $in-out-quad, opacity 0.3s linear, height 0.2s $in-out-quad;

	@include tablet {
		width: 364px;
		left: calc(50% - 364px / 2);
	}

	h2 {
		font-family: 'ApfelGrotezk-Fett';
		font-size: 24px;
		color: $text-olive-ui;
	}

	p {
		display: flex;
		align-items: center;
		margin: 5px 0;

		img {
			margin: 0 7px 0 0;
		}
	}

	&.active {
		opacity: 1;
		scale: 1;
		top: 20px;
	}
}
</style>

<style lang="scss">
.NewTeam {
	&.active {
		p {
			div {
				margin: 0 3px 0 0;
				display: inline-flex;
				max-width: 50%;
			}
		}
	}
}
</style>
