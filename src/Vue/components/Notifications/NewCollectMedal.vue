<script setup>
import { state } from '@/State';
import MedalImg from '@components/Assets/MedalImg.vue';
import ButtonOrLink from '@components/Inputs/ButtonOrLink.vue';
import { useMedalsStore } from '@stores/medals';
import { useTeamsStore } from '@stores/teams';
import { EVENTS } from '@utils/constants';
import { ref } from 'vue';

const teamsStore = useTeamsStore();
const medalsStore = useMedalsStore();

console.log(medalsStore);

const myCountry = ref();
const otherCountry = ref();
const video = ref();

const collectTeam = ref('autre');
const collectType = ref(0);

let timeout;

const idMedal = ref(0);

state.on(EVENTS.COLLECT_MEDAL, (medal, team) => {
	idMedal.value = medal.id;

	console.log(medal);
	if (timeout) clearTimeout(timeout);

	collectTeam.value = team.iso;
	if (team.iso === teamsStore.currentIso) {
		video.value.classList.add('active');
		video.value.play();
		timeout = setTimeout(() => {
			video.value.pause();
		}, 2000);
		setTimeout(() => {
			myCountry.value.classList.add('active');
		}, 300);
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
		<video ref="video" muted playsinline @click="() => removeMyTeamCollect()">
			<source src="/assets/videos/confetti.webm" />
			<source src="/assets/videos/confetti.mov" />
		</video>
		<div ref="otherCountry" class="NewCollectMedal_OtherCountry">
			<MedalImg :type="collectType" />
			<p class="NewCollectMedal_OtherCountry_Text">
				Medaille collectée par l'equipe <b> {{ collectTeam }} </b>
			</p>
		</div>
		<div ref="myCountry" class="NewCollectMedal_MyCountry" @click="() => removeMyTeamCollect()">
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
			<div class="big-medal">
				<img v-if="collectType === 0" src="/assets/svgs/text-bronze.svg" alt="" srcset="" />
				<img v-if="collectType === 1" src="/assets/svgs/text-argent.svg" alt="" srcset="" />
				<img v-if="collectType === 2" src="/assets/svgs/text-or.svg" alt="" srcset="" />
				<MedalImg :type="collectType" />
			</div>
			<ButtonOrLink class="cta" :to="'/game/medals/' + teamsStore.currentIso + '/' + idMedal"> Afficher le détail </ButtonOrLink>
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
		top: 30%;
		opacity: 0;
		scale: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 20px 35px;
		border-radius: 30px;
		background-color: $bg-beige-ui;
		transition: scale 0.3s $in-out-quad, opacity 0.5s linear;
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

		.big-medal {
			position: relative;
			padding: 10px;

			img {
				position: absolute;
				top: 12px;
				left: -8px;
				animation: 15s linear 0s infinite rotate;
			}
			.MedalImg {
				margin-top: 20px;
				width: 100px;
			}
		}

		&.active {
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
