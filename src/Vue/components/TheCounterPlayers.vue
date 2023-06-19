<script setup>
import Icon from '@/assets/svgs/PlayersIcon.svg?component';
import BoostData from '@jsons/boost_data.json';
import { useTeamsStore } from '@stores/teams';
import { gsap } from 'gsap';
import { onMounted, ref, watch } from 'vue';

const teamsStore = useTeamsStore();

const path = ref(null);
const lengthSvg = ref(0);
const nextStep = ref(2);

onMounted(() => {
	lengthSvg.value = path.value.getTotalLength();
	path.value.style.strokeDashoffset = lengthSvg.value;
	path.value.style.strokeDasharray = lengthSvg.value;

	annimProgressBooster();
});

watch(teamsStore, () => annimProgressBooster());

const annimProgressBooster = () => {
	const nbPlayer = teamsStore.currentTeamCount;

	BoostData.reverse();
	BoostData.forEach((boost) => {
		if (nbPlayer <= boost.step) {
			nextStep.value = boost.id;
		}
	});
	BoostData.reverse();

	const percentage = (100 * nbPlayer) / BoostData[nextStep.value].step;
	const convert = (lengthSvg.value * percentage) / 100;
	const valStrokeDashoffset = lengthSvg.value - convert;

	gsap.to(path.value.style, { strokeDashoffset: valStrokeDashoffset, duration: 3 });
};
</script>

<template>
	<div class="counterPlayer">
		<Icon />
		<span>{{ teamsStore.currentTeamCount }} joueurs </span>
		<div class="nextPowerUp">
			<svg width="48" height="47" viewBox="0 0 48 47" fill="none">
				<path
					d="M48 23.5C48 36.4787 37.2548 47 24 47C10.7452 47 0 36.4787 0 23.5C0 10.5213 10.7452 0 24 0C37.2548 0 48 10.5213 48 23.5ZM4.52645 23.5C4.52645 34.0309 13.2451 42.5678 24 42.5678C34.7549 42.5678 43.4735 34.0309 43.4735 23.5C43.4735 12.9691 34.7549 4.43215 24 4.43215C13.2451 4.43215 4.52645 12.9691 4.52645 23.5Z"
					fill="#E6E6C4"
				/>
			</svg>
			<svg width="47" height="47" viewBox="0 0 47 47" fill="none">
				<circle ref="path" cx="23.5" cy="23.5" r="21.5" stroke="#BBA63A" stroke-width="4" />
			</svg>
			<p>{{ BoostData[nextStep].step }}</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use '@styles/tools' as *;

.counterPlayer {
	position: relative;
	display: flex;
	height: 47px;
	align-items: center;
	padding: 8px 45px 8px 15px;
	border-radius: 72px;
	border: 2px solid rgba(0, 0, 0, 0.15);
	background-color: $bg-beige-ui;

	font-family: 'ApfelGrotezk-fett';
	font-size: 18px;
	line-height: 27px;
	color: $text-olive-ui;

	pointer-events: all;
	span {
		width: max-content;
		margin: 0 7px;
	}

	.nextPowerUp {
		position: absolute;
		top: -2px;
		right: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 47px;
		width: 47px;

		svg {
			position: absolute;
			top: 0.5px;
			right: 0;
		}

		p {
			color: $dark-gold;
			margin: auto;
		}
	}
}
</style>
