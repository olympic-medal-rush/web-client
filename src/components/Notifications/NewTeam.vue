<script setup>
import { state } from '@/State';
import { ref } from 'vue';
import { EVENTS } from '@utils/constants';

const newTeam = ref();
const nameNewTeam = ref('ALL');

state.on(EVENTS.CREATE_TEAM, (e) => {
	nameNewTeam.value = e.iso;
	newTeam.value.classList.add('active');
	setTimeout(() => {
		newTeam.value.classList.remove('active');
	}, 3000);
});
</script>

<template>
	<div ref="newTeam" class="NewTeam">
		<div class="NewTeam_Container">
			<p class="NewTeam_Container_Text">Nouvelle équipe {{ nameNewTeam }} !</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use '@styles/tools' as *;
.NewTeam {
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
