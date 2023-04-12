<template>
	<div id="webgl-app" ref="webglAppContainer">
		<div id="canvas-wrapper" ref="canvasWrapper"></div>
	</div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { app } from '../webglApp/App.js';

const webglAppContainer = ref();
const canvasWrapper = ref();

onMounted(() => app.init(webglAppContainer.value, canvasWrapper.value));
</script>
