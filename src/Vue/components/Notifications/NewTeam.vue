<script setup>
import { app } from '@/App';
import { state } from '@/State';
import RoundFlag from '@components/Assets/RoundFlag.vue';
import SvgRect from '@components/Utils/SvgRect.vue';
import { useTeamsStore } from '@stores/teams';
import { EVENTS } from '@utils/constants';
import { ref } from 'vue';

const newTeam = ref();
const nameNewTeam = ref();
const teamsStore = useTeamsStore();

state.on(EVENTS.CREATE_TEAM, (e) => {
	nameNewTeam.value = e.iso;
	newTeam.value.classList.add('active');
	app.sound.play('notif');
	setTimeout(() => {
		newTeam.value.classList.remove('active');
	}, 3000);
});
</script>

<template>
	<div ref="newTeam" class="NewTeam">
		<SvgRect class="svg-rect" color="black" width="100%" height="100%" border-radius="10px" />
		<h2>Nouvelle équipe en jeu !</h2>
		<p v-if="nameNewTeam">
			<RoundFlag :iso="nameNewTeam" has-name size="16px" /> -
			<b> {{ teamsStore.getTeam(nameNewTeam).position }}{{ teamsStore.getTeam(nameNewTeam).position === 1 ? 'er' : 'eme' }} </b> équipe en jeu
		</p>
	</div>
</template>

<style lang="scss" scoped>
@use '@styles/tools' as *;
.NewTeam {
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

	.svg-rect {
		position: absolute;
		top: 0;
		left: 0;
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

		b {
			margin: 0 3px;
			font-family: 'ApfelGrotezk-Fett';
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
