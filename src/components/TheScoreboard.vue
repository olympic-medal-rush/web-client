<script setup>
import { useGameStore } from '@stores/game';

const domGameStore = useGameStore();

const flag = {
	FRA: '🇫🇷',
	ESP: '🇪🇸',
	DEU: '🇩🇪',
	ITA: '🇮🇹',
	USA: '🇺🇸',
};

const getFlag = (iso) => {
	if (iso === 'BZH') return `<img v-if="domGameStore.playerCountry === 'BZH'" style="width: 27px; margin: 0 2px 0 0;" src="../../public/assets/images/BZH.png" alt="" />`;
	return flag[iso];
};
</script>

<template>
	<div class="Scoreboard">
		<div class="MainButton">
			<img src="../../public/assets/images/Gold.png" alt="" srcset="" />
		</div>
		<div class="Podium">
			<div v-for="(team, i) in domGameStore.scoreboard" :key="team.name" class="Podium-item" :class="{ none: i > 2 }">
				<span :class="{ gold: i == 0, silver: i == 1, bronze: i == 2, none: i > 2 }">{{ i + 1 }}</span>
				<div class="flag" v-html="getFlag(team.name)"></div>
			</div>
		</div>
		<!-- <ul>
      <li v-for="team in domGameStore.scoreboard" :key="team.name">{{ team.name }} => {{ team.score }}</li>
    </ul> -->
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
			.flag {
				font-size: 31px;
			}

			&.none {
				display: none;
			}
		}
	}
}
</style>
