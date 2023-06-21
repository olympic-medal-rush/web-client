<script setup>
import { state } from '@/State';
import MedalPodImg from '@components/Assets/MedalsPodImg.vue';
import { EVENTS } from '@utils/constants';
import { ref } from 'vue';

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
			<p class="NewMedal_Container_Text">Nouvelles médailles apparues !</p>
			<div class="NewMedal_Container_Img">
				<MedalPodImg />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use '@styles/tools' as *;
.NewMedal {
	position: absolute;
	width: 100%;
	top: -200px;
	left: 0px;
	scale: 0.3;
	opacity: 0;
	display: flex;
	justify-content: center;
	transition: 0.3s;

	&.active {
		opacity: 1;
		scale: 1;
		transition: top 0.3s $in-out-quad, scale 0.3s $in-out-quad, opacity 0.3s linear;
		top: 20px;
	}

	&_Container {
		height: auto;
		padding: 23px 25px;
		border-radius: 15px;
		background-color: $bg-beige-ui;
		color: $text-olive-ui;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 92%;
		position: relative;
		padding: 23px 25px 53px 25px;

		&_Text {
			font-family: 'ApfelGrotezk-Fett';
			font-size: 32px;
		}

		&_Img {
			position: absolute;
			bottom: -24px;
		}
	}
}
</style>
