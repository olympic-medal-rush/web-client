<script setup>
import { state } from '@/State';
import { ref } from 'vue';
import { EVENTS } from '@utils/constants';

const newMedal = ref();

state.on(EVENTS.SPAWN_MEDALS, () => {
	newMedal.value.classList.add('active');
	setTimeout(() => {
		newMedal.value.classList.remove('active');
	}, 3000);
});
</script>

<template>
	<div ref="newMedal" class="NewMedal">
		<div class="NewMedal_Container">
			<img src="/assets/images/Medals.png" alt="" srcset="" />
			<p class="NewMedal_Container_Text">Nouvelles Médailles APPARUES !</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use '@styles/tools' as *;
.NewMedal {
	position: absolute;
	width: 100%;
	height: 70px;
	font-family: 'Paris 24';
	top: -70px;
	left: 0px;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: 0.3s;

	&.active {
		transition: 0.3s;
		top: 0px;
	}

	&_Container {
		height: auto;
		padding: 10px 20px;
		border-radius: 25px;
		background-color: #e5e5d8;
		display: flex;
		flex-direction: row;
		align-items: center;
		overflow: hidden;

		&_Text {
			margin-left: 15px;
			font-weight: bold;
		}
	}
}
</style>
