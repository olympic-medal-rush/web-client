<script setup>
defineProps({
	width: { type: String, required: true },
	height: { type: String, required: true },
	borderRadius: { type: String, required: true },
	color: { type: String, required: true },
});
</script>

<template>
	<svg :width="width" :height="height">
		<rect :width="width" :height="height" :rx="borderRadius" :ry="borderRadius" class="svg-border"></rect>
	</svg>
</template>

<style lang="scss" scoped>
.svg-border {
	fill: transparent;
	stroke: v-bind(color);
	stroke-width: 4;
	animation: animate-stroke 2s infinite;
}

@keyframes animate-stroke {
	0% {
		stroke-dasharray: 0, 200;
		stroke-dashoffset: 0;
	}
	50% {
		stroke-dasharray: 100, 200;
		stroke-dashoffset: -50;
	}
	100% {
		stroke-dasharray: 100, 200;
		stroke-dashoffset: -200;
	}
}
</style>
