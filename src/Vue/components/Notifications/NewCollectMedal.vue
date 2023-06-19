<script setup>
import { state } from '@/State';
import MedalImg from '@components/Assets/MedalImg.vue';
import { useGameStore } from '@stores/game';
import { ref } from 'vue';
import { EVENTS } from '@utils/constants';

const domGameStore = useGameStore();

const myCountry = ref();
const otherCountry = ref();

const collectTeam = ref('autre');
const collectType = ref('gold');

let timeout;

state.on(EVENTS.COLLECT_MEDAL, (medal, team) => {
	if (timeout) clearTimeout(timeout);

	collectTeam.value = team.iso;
	if (team.iso === domGameStore.playerCountry) {
		myCountry.value.classList.add('active');
		myCountry.value.addEventListener('click', () => {
			myCountry.value.classList.remove('active');
		});
		timeout = setTimeout(() => {
			myCountry.value.classList.remove('active');
		}, 2000);
	} else {
		otherCountry.value.classList.add('active');
		timeout = setTimeout(() => {
			otherCountry.value.classList.remove('active');
		}, 3000);
	}
	collectType.value = medal.typeStr;
});
</script>

<template>
	<div class="NewCollectMedal">
		<div ref="otherCountry" class="NewCollectMedal_OtherCountry">
			<MedalImg :medal="collectType" />
			<p class="NewCollectMedal_OtherCountry_Text">
				Medaille collectée par l'equipe <b> {{ collectTeam }} </b>
			</p>
		</div>
		<div ref="myCountry" class="NewCollectMedal_MyCountry">
			<h2>Médaille Obtenue !</h2>
			<p>
				Félicitations équipe <b>{{ collectTeam }}</b>
			</p>
			<MedalImg :medal="collectType" />
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
		background-color: #e5e5d8;
		transition: 0.3s;

		p {
			margin-top: 10px;
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
	}
}
</style>
