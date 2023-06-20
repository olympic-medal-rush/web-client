<script setup>
import { state } from '@/State';
import MedalImg from '@components/Assets/MedalImg.vue';
import ButtonOrLink from '@components/Inputs/ButtonOrLink.vue';
import { useTeamsStore } from '@stores/teams';
import { EVENTS } from '@utils/constants';
import { ref } from 'vue';

const teamsStore = useTeamsStore();

const myCountry = ref();
const otherCountry = ref();
const video = ref();

const collectTeam = ref('autre');
const collectType = ref(0);

let timeout;

state.on(EVENTS.COLLECT_MEDAL, (medal, team) => {
	if (timeout) clearTimeout(timeout);

	collectTeam.value = team.iso;
	if (team.iso === teamsStore.currentIso) {
		myCountry.value.classList.add('active');
		video.value.classList.add('active');
		timeout = setTimeout(() => {
			// myCountry.value.classList.remove('active');
			// video.value.classList.remove('active');
		}, 2000);
	} else {
		otherCountry.value.classList.add('active');
		timeout = setTimeout(() => {
			otherCountry.value.classList.remove('active');
		}, 3000);
	}
	collectType.value = medal.type;
});

const removeMyTeamCollect = () => {
	myCountry.value.classList.remove('active');
	video.value.classList.remove('active');
};
</script>

<template>
	<div class="NewCollectMedal">
		<video ref="video" autoplay loop muted playsinline src="/assets/videos/confetti.webm" @click="() => removeMyTeamCollect()">
			<!-- <source src="/assets/videos/confetti.webm" type="video/webm" />
			<source src="/assets/videos/confetti.mov" type='video/mov; codecs="hvc1"' /> -->
		</video>
		<div ref="otherCountry" class="NewCollectMedal_OtherCountry">
			<MedalImg :type="collectType" />
			<p class="NewCollectMedal_OtherCountry_Text">
				Medaille collectée par l'equipe <b> {{ collectTeam }} </b>
			</p>
		</div>
		<div ref="myCountry" class="NewCollectMedal_MyCountry">
			<h2>Médaille Obtenue !</h2>
			<p>
				Félicitations vous avez obtenu une
				<span :class="{ bronze: collectType === 0, argent: collectType === 1, or: collectType === 2 }">
					Médaille {{ collectType === 0 ? 'de Bronze' : collectType === 1 ? "d'Argent" : "d'Or" }}
				</span>
				<MedalImg class="small-medal" :type="collectType" />
				<br />
				Votre équipe se hisse en
				<b
					>{{ teamsStore.scoreboard.indexOf(teamsStore.scoreboard.find((team) => team.iso === teamsStore.currentIso)) + 1
					}}{{ teamsStore.scoreboard.indexOf(teamsStore.scoreboard.find((team) => team.iso === teamsStore.currentIso)) + 1 === 1 ? 'er' : 'eme' }} position</b
				>
				!
			</p>
			<MedalImg :type="collectType" />
			<ButtonOrLink class="cta"> Afficher le détail </ButtonOrLink>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use '@styles/tools' as *;
.NewCollectMedal {
	width: 100%;
	height: 0px;
	font-family: 'Paris 24';
	top: 0px;
	left: 0px;
	display: flex;
	justify-content: center;
	align-items: center;

	video {
		position: absolute;
		top: 0;
		opacity: 0;
		transition: opacity 0.2s;

		&.active {
			opacity: 1;
			pointer-events: all;
		}
	}

	&_OtherCountry {
		position: absolute;
		top: -70px;
		background-color: #e5e5d8;
		padding: 10px 20px;
		border-radius: 25px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		transition: 0.3s;
		.MedalImg {
			width: 25px;
		}

		&.active {
			top: 12px;
			transition: 0.3s;
		}
	}

	&_MyCountry {
		pointer-events: all;
		cursor: pointer;
		position: absolute;
		top: 100%;
		opacity: 0;
		scale: 0.5;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 20px 35px;
		border-radius: 30px;
		background-color: $bg-beige-ui;
		transition: 0.3s;
		max-width: 92%;

		h2 {
			font-family: 'ApfelGrotezk-fett';
			font-size: 33px;
		}

		p {
			font-family: 'ApfelGrotezk-regular';
			font-size: 14px;
			margin-top: 10px;
			text-align: center;

			span {
				font-family: 'ApfelGrotezk-fett';
				&.or {
					color: $gold-ui;
				}

				&.argent {
					color: $silver-ui;
				}

				&.bronze {
					color: $bronze-ui;
				}
			}
		}
		.MedalImg {
			margin-top: 20px;
			width: 100px;
		}

		&.active {
			transition: 0.3s;
			top: 30%;
			scale: 1;
			opacity: 1;
		}

		.cta {
			width: 100%;
			margin-top: 20px;
		}

		.small-medal {
			width: 15px;
			margin-top: 0;
			margin-left: 3px;
			display: inline-block;
			transform: translateY(3px);
		}
	}
}
</style>
