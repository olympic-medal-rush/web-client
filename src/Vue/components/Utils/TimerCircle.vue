<script setup>
defineProps({
	size: { type: String, required: true },
	percentage: { type: Number, required: true },
});
</script>

<template>
	<div>
		<svg viewBox="0 0 32 32">
			<circle r="16" cx="16" cy="16" :stroke-dasharray="percentage + ' 100'" />
		</svg>
	</div>
</template>

<style lang="scss" scoped>
@use '@styles/tools' as *;
svg {
	width: v-bind('size');
	height: v-bind('size');
	transform: rotate(-90deg);
	background: $text-olive-ui;
	border-radius: 50%;
}

circle {
	fill: $text-olive-ui;
	stroke: #d9d8b4;
	stroke-width: 32;
	// stroke-dasharray: 95 100;
}
</style>
