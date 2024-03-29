<script setup>
import { app } from '@/App';
import { state } from '@/State';
import Arrow from '@/assets/svgs/GreyArrow.svg';
import { useTeamsStore } from '@stores/teams';
import { ref } from 'vue';
import { EVENTS } from '@utils/constants';
import RoundFlag from './Assets/RoundFlag.vue';

const teamsStore = useTeamsStore();

const podium = ref();

const scoreboard = ref();
const isPodiumActive = ref(false);

state.on(EVENTS.CREATE_TEAM, () => closePodium());
state.on(EVENTS.SCOREBOARD_UPDATE, () => closePodium());

const closePodium = () => {
	scoreboard.value.style.height = 75 + 'px';
	isPodiumActive.value = false;
	scoreboard.value.classList.remove('active');
};

const togglePodium = () => {
	if (!isPodiumActive.value) {
		scoreboard.value.style.height = 65 + podium.value.clientHeight + 'px';
	} else {
		scoreboard.value.style.height = 75 + 'px';
	}
	isPodiumActive.value = !isPodiumActive.value;
	app.sound.play('click');
	scoreboard.value.classList.toggle('active');
};
</script>

<template>
	<div ref="scoreboard" class="Scoreboard">
		<router-link :to="'/game/scoreboard/' + teamsStore.currentIso" class="MyTeam">
			<div class="MyTeam-wrapper">
				<RoundFlag :iso="teamsStore.currentIso" />
				<span class="MyTeam-ranking">{{ teamsStore.getTeam(teamsStore.currentIso).position }}</span>
			</div>
		</router-link>
		<div ref="podium" class="Podium">
			<RouterLink to="/game/scoreboard" @click="app.sound.play('click')">
				<span class="separator"></span>
				<div v-for="(team, i) in teamsStore.scoreboard" :key="team.iso" class="Podium-item" :class="{ none: i > 2 }">
					<div class="Podium-item-wrapper">
						<span v-if="team.score" :class="{ gold: i == 0, silver: i == 1, bronze: i == 2, none: i > 2 }">{{ i + 1 }}</span>
						<RoundFlag :iso="team.iso" />
					</div>
				</div>
			</RouterLink>
		</div>
		<button class="Arrow" @click="togglePodium">
			<Arrow />
		</button>
	</div>
</template>

<style lang="scss" scoped>
@use '@styles/tools' as *;
.Scoreboard {
	position: absolute;
	right: 13px;
	top: 83px;
	background-color: $bg-beige-ui;
	// padding: 12px 11px;
	border-radius: 9999px;
	border: 2px solid rgba(0, 0, 0, 0.15);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	pointer-events: all;
	overflow: hidden;
	height: 75px;
	width: 47px;
	transition: height 0.3s;

	.MyTeam {
		padding: 12px 12px 6px 12px;

		&-wrapper {
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
	}

	.Podium {
		padding: 12px 0;
		opacity: 0;
		position: absolute;
		top: 36px;

		pointer-events: none;
		transition: opacity 0s;

		a {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.separator {
			display: inline-block;
			width: 16px;
			height: 2px;
			background-color: rgba(0, 0, 0, 0.2);
			border-radius: 9999px;
			// margin: 11px 0 11px 0;
		}

		.Podium-item-wrapper {
			position: relative;
			padding-top: 6px;
		}
		.Podium-item {
			padding: 6px 12px;
			// margin-bottom: 9px;

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
		// margin-top: 12px;
		bottom: 0;
		position: absolute;
		transition: transform 0.7s;
		padding: 12px;
	}

	&.active {
		.Podium {
			opacity: 1;
			pointer-events: all;
			transition: opacity 1s;
		}

		.Arrow {
			// margin-top: 5px;
			transform: rotateX(180deg);
		}
	}
}
</style>
