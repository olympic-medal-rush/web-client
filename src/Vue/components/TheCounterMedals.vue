<script setup>
import { useGameStore } from '@stores/game';

const domGameStore = useGameStore();
</script>

<template>
	<div>
		<img src="/assets/images/Medals.png" alt="" srcset="" />
		<span>{{ domGameStore.medals.length }}</span>
		en jeu
	</div>
</template>

<style lang="scss" scoped>
@use '@styles/tools' as *;

div {
	display: flex;
	width: max-content;
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

	img {
		margin: 0 3px 0 0;
	}

	span {
		position: absolute;
		bottom: 28px;
		left: 33px;
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
