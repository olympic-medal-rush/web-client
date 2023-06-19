<script setup>
import Arrow from '@/assets/svgs/GreyArrow.svg';
import router from '@Vue/router';
import { useGameStore } from '@stores/game';
import { ref } from 'vue';
import RoundFlag from './Assets/RoundFlag.vue';

const domGameStore = useGameStore();

const scoreboard = ref();

const togglePodium = () => {
	scoreboard.value.classList.toggle('active');
};

const toScoreboardVue = () => {
	router.push('/game/scoreboard');
};
</script>

<template>
	<div ref="scoreboard" class="Scoreboard">
		<div class="MyTeam">
			<RoundFlag :iso="domGameStore.playerCountry" />
			<span class="MyTeam-ranking">{{ domGameStore.scoreboard.indexOf(domGameStore.scoreboard.find((team) => team.name === domGameStore.playerCountry)) + 1 }}</span>
		</div>
		<div class="Podium" @click="toScoreboardVue">
			<span class="separator"></span>
			<div v-for="(team, i) in domGameStore.scoreboard" :key="team.name" class="Podium-item" :class="{ none: i > 2 }">
				<span v-if="team.score" :class="{ gold: i == 0, silver: i == 1, bronze: i == 2, none: i > 2 }">{{ i + 1 }}</span>
				<RoundFlag :iso="team.name" />
			</div>
		</div>
		<Arrow class="Arrow" @click="togglePodium" />
	</div>
</template>

<style lang="scss" scoped>
@use '@styles/tools' as *;
.Scoreboard {
	position: absolute;
	right: 13px;
	top: 83px;
	background-color: $bg-beige-ui;
	padding: 12px 11px;
	border-radius: 9999px;
	border: 2px solid rgba(0, 0, 0, 0.15);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	pointer-events: all;
	overflow: hidden;
	height: 73px;
	transition: height 0.3s;
	// z-index: 3;

	.MyTeam {
		position: relative;

		.MyTeam-ranking {
			position: absolute;
			bottom: -2px;
			left: -2px;
			color: $white;
			font-family: 'ApfelGrotezk-Regular';
			background-color: $black;
			font-size: 12px;
			line-height: 15px;
			width: 15px;
			height: 15px;
			text-align: center;
			border-radius: 9999px;
		}
	}

	.Podium {
		opacity: 0;
		position: absolute;
		display: flex;
		flex-direction: column;
		align-items: center;
		pointer-events: none;
		transition: opacity 0s;

		.separator {
			display: inline-block;
			width: 16px;
			height: 2px;
			background-color: rgba(0, 0, 0, 0.2);
			border-radius: 9999px;
			margin: 11px 0 11px 0;
		}
		.Podium-item {
			position: relative;
			margin-bottom: 9px;

			span {
				position: absolute;
				bottom: -2px;
				left: -2px;
				color: $black;
				font-family: 'ApfelGrotezk-Regular';
				font-size: 12px;
				line-height: 15px;
				width: 15px;
				height: 15px;
				text-align: center;
				border-radius: 9999px;

				&.gold {
					background-color: $gold-ui;
					color: white;
				}

				&.silver {
					background-color: $silver-ui;
					color: white;
				}

				&.bronze {
					background-color: $bronze-ui;
					color: white;
				}
			}

			&.none {
				display: none;
			}
		}
	}

	.Arrow {
		margin-top: 12px;
		transition: transform 0.7s;
	}

	&.active {
		height: 189px;
		.Podium {
			opacity: 1;
			position: relative;
			pointer-events: all;
			transition: opacity 1s;
		}

		.Arrow {
			margin-top: 5px;
			transform: rotateX(180deg);
		}
	}
}
</style>
