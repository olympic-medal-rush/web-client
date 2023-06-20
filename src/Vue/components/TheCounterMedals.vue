<script setup>
import { useMedalsInGameStore } from '@stores/medalsInGame';
import MedalsImg from './Assets/MedalsImg.vue';

const medalsInGameStore = useMedalsInGameStore();
</script>

<template>
	<div class="Medals">
		<MedalsImg class="medals-img" margin="-18px" />
		<span>{{ medalsInGameStore.count }}</span>
		en jeu
	</div>
</template>

<style lang="scss" scoped>
@use '@styles/tools' as *;

.Medals {
	display: flex;
	height: 47px;
	align-items: center;
	justify-content: center;
	padding: 8px 15px;
	border-radius: 72px;
	border: 2px solid rgba(0, 0, 0, 0.15);
	background-color: $bg-beige-ui;
	pointer-events: all;

	font-family: 'ApfelGrotezk-fett';
	font-size: 16px;
	color: $text-olive-ui;

	.medals-img {
		margin: 0 3px 0 0;
	}

	span {
		position: absolute;
		bottom: 28px;
		left: 30px;
		color: $white;
		font-family: 'ApfelGrotezk-Fett';
		background-color: $text-olive-ui;
		font-size: 14px;
		line-height: 15px;
		width: 15px;
		height: 15px;
		text-align: center;
		border-radius: 9999px;
	}
}
</style>
