<script setup>
import Icon from '@/assets/svgs/PlayersIcon.svg?component';
import { useGameStore } from '@stores/game';

const domGameStore = useGameStore();
</script>

<template>
	<div class="counterPlayer">
		<Icon />
		<span>{{ domGameStore.playersCounter }} joueurs </span>
		<div class="nextPowerUp" :data-percentage="(100 * domGameStore.playersCounter) / 150">
			<svg width="48" height="47" viewBox="0 0 48 47" fill="none">
				<path
					d="M48 23.5C48 36.4787 37.2548 47 24 47C10.7452 47 0 36.4787 0 23.5C0 10.5213 10.7452 0 24 0C37.2548 0 48 10.5213 48 23.5ZM4.52645 23.5C4.52645 34.0309 13.2451 42.5678 24 42.5678C34.7549 42.5678 43.4735 34.0309 43.4735 23.5C43.4735 12.9691 34.7549 4.43215 24 4.43215C13.2451 4.43215 4.52645 12.9691 4.52645 23.5Z"
					fill="#E6E6C4"
				/>
			</svg>
			<svg width="48" height="47" viewBox="0 0 48 47" fill="none">
				<path
					d="M48 23.5C48 36.4787 37.2548 47 24 47C10.7452 47 0 36.4787 0 23.5C0 10.5213 10.7452 0 24 0C37.2548 0 48 10.5213 48 23.5ZM4.52645 23.5C4.52645 34.0309 13.2451 42.5678 24 42.5678C34.7549 42.5678 43.4735 34.0309 43.4735 23.5C43.4735 12.9691 34.7549 4.43215 24 4.43215C13.2451 4.43215 4.52645 12.9691 4.52645 23.5Z"
					fill="#BBA63A"
				/>
			</svg>
			<p>150</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use '@styles/tools' as *;

.counterPlayer {
	position: relative;
	display: flex;
	width: max-content;
	align-items: center;
	padding: 8px 45px 8px 15px;
	border-radius: 72px;
	background-color: $bg-beige-ui;

	font-family: 'ApfelGrotezk-fett';
	font-size: 18px;
	line-height: 27px;
	color: $text-olive-ui;

	pointer-events: all;
	span {
		width: max-content;
		margin: 0 7px;
	}

	.nextPowerUp {
		position: absolute;
		top: 0;
		right: 0;
		display: flex;
		justify-content: center;
		align-items: center;

		svg {
			position: absolute;
			top: 0.5px;
			right: 0;
		}

		p {
			color: $dark-gold;
			height: 47px;
			width: 47px;
			text-align: center;
			vertical-align: middle;
		}
	}
}
</style>
