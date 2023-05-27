<script setup>
import { useGameStore } from '@stores/game';

const domGameStore = useGameStore();
</script>

<template>
	<div>
		<img src="/assets/images/Medals.png" alt="" srcset="" />
		<span>en jeu :</span>
		{{ domGameStore.medals.length }}
	</div>
</template>

<style lang="scss" scoped>
@use '@styles/tools' as *;

div {
	display: flex;
	width: max-content;
	align-items: center;
	padding: 8px 15px;
	border-radius: 72px;
	background-color: $light-camel;

	font-family: 'Paris 24 Semibold';
	font-size: 28px;
	line-height: 24px;
	color: $silver-gray;
	span {
		width: max-content;
		font-size: 14px;
		margin: 0 7px;
	}
}
</style>
