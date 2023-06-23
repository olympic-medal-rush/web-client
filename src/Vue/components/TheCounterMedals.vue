<script setup>
import { useMedalsInGameStore } from '@stores/medalsInGame';
import MedalsImg from './Assets/MedalsImg.vue';

const medalsInGameStore = useMedalsInGameStore();
</script>

<template>
	<div class="Medals">
		<div class="medals-img-wrapper">
			<MedalsImg class="medals-img" margin="-12px" />
			<span>{{ medalsInGameStore.count }}</span>
		</div>
		<p>en jeu</p>
	</div>
</template>

<style lang="scss" scoped>
@use '@styles/tools' as *;

.Medals {
	display: inline-flex;
	height: 47px;
	align-items: center;
	justify-content: space-between;
	padding: 8px 15px;
	border-radius: 72px;
	border: 2px solid rgba(0, 0, 0, 0.15);
	background-color: $bg-beige-ui;
	pointer-events: all;

	font-family: 'ApfelGrotezk-fett';
	font-size: 16px;
	color: $text-olive-ui;
	gap: 15px;

	.medals-img-wrapper {
		position: relative;

		span {
			position: absolute;
			top: -5px;
			right: -15px;
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

	p {
		flex-shrink: 0;
	}
}
</style>
