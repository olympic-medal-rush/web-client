<script setup>
import { useGameStore } from '@stores/game';

const domGameStore = useGameStore();
</script>

<template>
	<div class="ThePlayerTeam">
		<img :src="'/assets/images/flags/' + domGameStore.playerCountry + '.png'" alt="" />
	</div>
</template>

<style lang="scss" scoped>
@use '@styles/tools' as *;
.ThePlayerTeam {
	position: absolute;
	top: 95px;
	padding: 16px;
	background-color: $light-camel;
	border-radius: 0 100px 100px 0;

	img {
		width: 28px;
		height: 18px;
	}
}
</style>
