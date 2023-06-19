<script setup>
import Icon from '@/assets/svgs/Settings.svg';
import { useGameStore } from '@stores/game';

const domGameStore = useGameStore();
</script>

<template>
	<div class="TheSettings">
		<Icon />
	</div>
</template>

<style lang="scss" scoped>
@use '@styles/tools' as *;
.TheSettings {
	position: absolute;
	left: 13px;
	top: 83px;
	background-color: $bg-beige-ui;
	border-radius: 9999px;
	border: 2px solid rgba(0, 0, 0, 0.15);
	padding: 11px 11px 8px 11px;
	pointer-events: all;
}
</style>
