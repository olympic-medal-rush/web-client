<template>
	<div ref="compassEl" :class="typeStr" :style="{ transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` }" class="compass-wrapper">
		<div ref="circleEl" class="compass-circle">
			<MedalImg :type="type" />
		</div>
		<div class="pin-wrapper" :style="{ transform: `rotate(${transform.angle}rad)` }">
			<svg class="compass-pin" width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M12.1274 2.47383C13.2698 0.477535 16.1413 0.456463 17.3129 2.43578L28.8082 21.8567C30.2104 24.2256 27.9485 27.0743 25.3234 26.2457L15.3922 23.1106C14.7745 22.9156 14.1103 22.9257 13.4989 23.1395L4.58492 26.2563C1.96423 27.1727 -0.387986 24.344 0.990939 21.9344L12.1274 2.47383Z"
					fill="#F2C300"
				/>
			</svg>
		</div>
		<div class="distance">{{ distance }} m</div>
	</div>
</template>

<script setup>
import { app } from '@/App';
import { state } from '@/State';
import { useTeamsStore } from '@stores/teams';
import { Vector2 } from 'three';
import { clamp } from 'three/src/math/MathUtils';
import { onMounted, onUnmounted, ref } from 'vue';
import { EVENTS } from '@utils/constants';
import MedalImg from './Assets/MedalImg.vue';

// Needed in script tag
const teamsStore = useTeamsStore();
const viewportMargin = 12;
const distanceMargin = 20;
const size = new Vector2();

const compassEl = ref();
const circleEl = ref();

// Used in template tag
const transform = ref({ x: 0, y: 0, angle: 0 });
const type = ref(0);
const distance = ref('0');
const typeStr = ref('');

onMounted(() => {
	state.on(EVENTS.TICK, calculateScreenPosition);
	state.on(EVENTS.RESIZE, onResize);
	onResize();
});

onUnmounted(() => {
	state.off(EVENTS.TICK, calculateScreenPosition);
	state.off(EVENTS.RESIZE, onResize);
});

const onResize = () => {
	const bbox = circleEl.value.getBoundingClientRect();
	size.x = bbox.width;
	size.y = bbox.height;
};

const calculateScreenPosition = () => {
	const closestMedal = getClosestMedal();
	compassEl.value.classList.remove('visible');
	if (!closestMedal) return;

	const { screenPosition, position } = closestMedal;
	type.value = closestMedal.type;
	typeStr.value = closestMedal.typeStr;
	distance.value = position.distanceTo(app.game.currentTeam.position).toFixed(0);

	const xPixels = screenPosition.x * app.tools.viewport.width - size.x * 0.5;
	const yPixels = (1 - screenPosition.y) * app.tools.viewport.height - size.y * 0.5;

	const xMax = app.tools.viewport.width - viewportMargin - size.x;
	const yMax = app.tools.viewport.height - viewportMargin - size.y - distanceMargin;

	transform.value.x = clamp(xPixels, viewportMargin, xMax);
	transform.value.y = clamp(yPixels, viewportMargin, yMax);

	const isClamped = transform.value.x !== xPixels || transform.value.y !== yPixels;
	compassEl.value.classList.toggle('visible', isClamped);

	transform.value.angle = Math.PI + app.webgl.camera.getAngleTo(closestMedal.scenePosition.x, closestMedal.scenePosition.z);
};

const getClosestMedal = () => {
	const currentPlayer = app.game.teams.get(teamsStore.currentIso);
	return [...app.game.medals.values()]?.sort((a, b) => a.position.distanceTo(currentPlayer.position) - b.position.distanceTo(currentPlayer.position))[0];
	// .filter((medal) => !medal.isInScreen)[0];
};
</script>

<style lang="scss">
@use '@/assets/styles/tools' as *;

$width: 50px;
$height: 50px;

$border-gold: #d0be65;
$bg-gold: #edda79;
$color-gold: #ae9617;

$border-silver: #cac9c0;
$bg-silver: #e3e3e3;
$color-silver: #ababab;

$border-bronze: #cc9962;
$bg-bronze: #edaa79;
$color-bronze: #ae6917;

.compass-wrapper {
	// z-index: 1;
	position: absolute;
	top: 0;
	left: 0;
	width: $width;
	height: $height;
	opacity: 0;
	transition: opacity 0.15s linear;
	border-radius: 50%;

	.compass-circle {
		position: absolute;
		border-radius: 50%;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 5px;
	}

	.pin-wrapper {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	.compass-pin {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		transform: translate3d(-20px, 0, 0) rotate(-90deg) scale(0.7);
	}

	.distance {
		position: absolute;
		bottom: -30px;
		left: 50%;
		transform: translate3d(-50%, 0, 0);
		padding: 5px 8px;
		font-size: 12px;
		border-radius: 20px;
		color: $white;
		width: max-content;
	}

	&.visible {
		opacity: 1;
	}

	&.bronze {
		background-color: rgba($bg-bronze, 0.5);
		.compass-circle {
			border: $bg-bronze 5px solid;
		}

		.pin-wrapper path {
			fill: $bg-bronze;
		}

		.distance {
			background-color: $bg-bronze;
			border: 2px solid $border-bronze;
			color: $color-bronze;
		}
	}

	&.silver {
		background-color: rgba($bg-silver, 0.5);
		.compass-circle {
			border: $bg-silver 5px solid;
		}

		.pin-wrapper path {
			fill: $bg-silver;
		}

		.distance {
			background-color: $bg-silver;
			border: 2px solid $border-silver;
			color: $color-silver;
		}
	}

	&.gold {
		background-color: rgba($bg-gold, 0.5);
		.compass-circle {
			border: $bg-gold 5px solid;
		}

		.pin-wrapper path {
			fill: $bg-gold;
		}

		.distance {
			background-color: $bg-gold;
			border: 2px solid $border-gold;
			color: $color-gold;
		}
	}
}
</style>
