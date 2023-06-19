<script setup>
import { computed } from 'vue';

const props = defineProps({
	type: { type: Number, required: true },
});

const typeStr = computed(() => (props.type === 0 ? 'bronze' : props.type === 1 ? 'silver' : 'gold'));
</script>

<template>
	<div class="MedalImg">
		<img :src="`/assets/images/medals/${typeStr}.png`" alt="" srcset="" />
	</div>
</template>

<style lang="scss" scoped>
div {
	width: 100%;
	height: 100%;
	img {
		width: 100%;
		height: 100%;
	}
}
</style>
