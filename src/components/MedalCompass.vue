<template>
	<div ref="compassEl" :style="{ transform: `translate3d(${transform.x}px, ${transform.y}px, 0)` }" class="compass-wrapper">
		<div ref="circleEl" class="compass-circle">
			<!-- <MedalImg :type="medal.type" /> -->
		</div>
		<div class="pin-wrapper" :style="{ transform: `rotate(${transform.angle}rad)` }">
			<svg class="compass-pin" width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M12.1274 2.47383C13.2698 0.477535 16.1413 0.456463 17.3129 2.43578L28.8082 21.8567C30.2104 24.2256 27.9485 27.0743 25.3234 26.2457L15.3922 23.1106C14.7745 22.9156 14.1103 22.9257 13.4989 23.1395L4.58492 26.2563C1.96423 27.1727 -0.387986 24.344 0.990939 21.9344L12.1274 2.47383Z"
					fill="#F2C300"
				/>
			</svg>
		</div>
	</div>
</template>

<script setup>
import { state } from '@/State';
import { app } from '@webglApp/App';
import { Medal } from '@webglApp/Webgl/Objects/Medal';
import { Vector2 } from 'three';
import { clamp } from 'three/src/math/MathUtils';
import { onMounted, onUnmounted, ref } from 'vue';
import { EVENTS } from '@utils/constants';

// Needed in script tag
const viewportMargin = 10;
const size = new Vector2();

const compassEl = ref();
const circleEl = ref();

// Used in template tag
const transform = ref({ x: 0, y: 0, angle: 0 });

const props = defineProps({
	medal: {
		required: true,
		type: Medal,
	},
});

onMounted(() => {
	state.on(EVENTS.TICK, calculateScreenPosition);
	state.on(EVENTS.RESIZE, onResize);
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
	const { screenPosition: position } = props.medal;

	const xPixels = position.x * app.tools.viewport.width;
	const yPixels = (1 - position.y) * app.tools.viewport.height;

	const xMax = app.tools.viewport.width - viewportMargin - size.x;
	const yMax = app.tools.viewport.height - viewportMargin - size.y;

	transform.value.x = clamp(xPixels, viewportMargin, xMax);
	transform.value.y = clamp(yPixels, viewportMargin, yMax);

	const isClamped = transform.value.x !== xPixels || transform.value.y !== yPixels;
	compassEl.value.classList.toggle('visible', isClamped);

	transform.value.angle = app.webgl.camera.getAngleTo(position.x, position.y);
};
</script>

<style lang="scss">
@use '@/assets/styles/tools' as *;

$width: 30px;
$height: 30px;

.compass-wrapper {
	display: none;
	position: absolute;
	top: 0;
	left: 0;
	width: $width;
	height: $height;
	opacity: 0;
	transition: opacity 0.15s linear;

	.compass-circle {
		position: absolute;
		border-radius: 50%;
		border: $yellow 5px solid;
		width: 100%;
		height: 100%;
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
		width: 10px;
		transform: translate3d(-7px, 0, 0) rotate(-90deg);
	}

	&.visible {
		opacity: 1;
	}
}
</style>
