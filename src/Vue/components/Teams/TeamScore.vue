<script setup>
import { app } from '@/App';
import GreyArrow from '@/assets/svgs/GreyArrow.svg';
import PlayersIcon from '@/assets/svgs/PlayersIcon.svg';
import ScoreboardPositionEqual from '@/assets/svgs/ScoreboardPositionEqual.svg';
import MedalsImg from '@components/Assets/MedalsImg.vue';
import RoundFlag from '@components/Assets/RoundFlag.vue';

defineProps({
	team: {
		type: Object,
		required: true,
	},
});
</script>

<template>
	<RouterLink :to="`/game/scoreboard/${team.iso}`" class="team-score" @click="app.sound.play('click')">
		<div class="position">
			<p>{{ team.position }}</p>
			<ScoreboardPositionEqual class="svg-indicator" />
		</div>
		<div class="rectangle">
			<RoundFlag class="round-flag" size="16px" :iso="team.iso" :has-name="true" />
			<div class="player-count">
				<PlayersIcon class="player-icon" />
				{{ team.playerCount }} joueur{{ team.playerCount > 1 ? 's' : '' }}
			</div>
			<p class="medal-count">{{ team.medalsCount }}</p>
			<MedalsImg class="medals-img" />
			<GreyArrow class="arrow" />
		</div>
	</RouterLink>
</template>

<style lang="scss" scoped>
@use '@styles/tools' as *;

.team-score {
	display: flex;
	gap: 16px;
	align-items: center;

	.position {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		// gap: 6px;

		p {
			font-weight: 700;
			font-size: 34px;
		}
	}

	.rectangle {
		width: 100%;
		padding: 20px 16px;
		display: flex;
		position: relative;
		border: 2px solid #32320740;
		border-radius: 8px;
		align-items: center;

		.round-flag {
			background-color: $bg-beige-ui;
			padding: 0 10px;
			position: absolute;
			top: -13px;
			max-width: 50%;
		}

		.player-count {
			display: flex;
			color: #c6c6a6;
			font-size: 20px;
			align-items: center;
			gap: 8px;
		}

		.medal-count {
			font-size: 24px;
			margin-left: auto;
			margin-right: 5px;
		}

		.medals-img {
			margin-right: 10px;
		}
	}
}
</style>

<style lang="scss">
@use '@styles/tools' as *;

.position {
	.svg-indicator {
		width: 10px;
	}
}

.rectangle {
	.round-flag {
		font-weight: 700;
		font-size: 24px;
	}

	.player-icon {
		path {
			fill: #c6c6a6;
		}
	}

	.arrow {
		transform: rotate(-90deg);
		path {
			stroke: #c6c6a6;
		}
	}
}
</style>
