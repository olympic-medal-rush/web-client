<template>
	<div class="loader">{{ percentage }}%</div>
</template>

<script setup>
import { state } from '@/State';
import { ref } from 'vue';
import { computed } from 'vue';
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
	font-family: 'Paris 24 Semibold';
	font-size: 28px;
	line-height: 24px;
	color: $silver-gray;
}
</style>
