<template>
	<div class="loader">{{ percentage }}%</div>
</template>

<script setup>
import { state } from '@/State';
import { computed, ref } from 'vue';
import { EVENTS } from '@utils/constants';

const progress = ref(0);
const percentage = computed(() => Math.round(progress.value * 100));

state.on(EVENTS.LOADER_PROGRESS, (value) => (progress.value = value));
</script>

<style lang="scss">
@use '@/assets/styles/tools' as *;

.loader {
	position: fixed;
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: 700;
	font-size: 28px;
	line-height: 24px;
	color: $silver-gray;
}

.mobile-only {
	.loader {
		position: static;
	}
}
</style>
