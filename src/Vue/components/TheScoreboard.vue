<script setup>
import { useGameStore } from '@stores/game';

const domGameStore = useGameStore();
</script>

<template>
	<div class="Scoreboard">
		<div class="MainButton">
			<img src="/assets/images/Gold.png" alt="" srcset="" />
		</div>
		<div class="Podium">
			<div v-for="(team, i) in domGameStore.scoreboard" :key="team.name" class="Podium-item" :class="{ none: i > 2 }">
				<span v-if="team.score" :class="{ gold: i == 0, silver: i == 1, bronze: i == 2, none: i > 2 }">{{ i + 1 }}</span>
				<img :src="`/assets/images/flags/${team.name}.png`" alt="" />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use '@styles/tools' as *;
.Scoreboard {
	position: absolute;
	right: 0;
	top: 95px;

	.MainButton {
		position: relative;
		width: max-content;
		padding: 14px 8px 14px 20px;
		background-color: $light-camel;
		border-radius: 50px 0 0 50px;
		z-index: 1;
		filter: drop-shadow(1px 4px 8px rgba(0, 0, 0, 0.25));
		img {
			width: 45px;
		}
	}

	.Podium {
		position: relative;
		background-color: $light-camel;
		margin-left: 16px;
		z-index: 0;
		transform: translate(0px, -10px);
		padding: 20px 10px 10px 10px;
		border-radius: 0 0 0 9px;
		.Podium-item {
			position: relative;
			text-align: end;

			span {
				position: absolute;
				top: 0;
				left: 0;
				color: $black;
				font-family: 'Paris 24 Semibold';
				font-size: 15px;
				line-height: 15px;
				padding-top: 2px;
				width: 20px;
				height: 20px;
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

			img {
				width: 27px;
				height: 18px;
				margin: 9px 2px 5px 0;
			}

			&.none {
				display: none;
			}
		}
	}
}
</style>
