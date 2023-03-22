<script async setup>
import { useGameStore } from '@stores/game.js';
import { app } from '@webglApp/App.js';
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const domGameStore = useGameStore();

onMounted(() => app.load());
</script>

<template>
	<div class="game">
		<h1>Game view</h1>
		<p>Nombre de joueurs : {{ domGameStore.playersCounter }}</p>
		<p>{{ t('head.title') }}</p>
	</div>
</template>

<style lang="scss" scoped></style>
