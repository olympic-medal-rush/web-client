<script async setup>
import { useGameStore } from '@stores/game';
import { onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { app } from '../webglApp/App';

const { t } = useI18n();
const domGameStore = useGameStore();

onMounted(() => app.load());
</script>

<template>
	<div class="game">
		<h1>Game view</h1>
		<p>{{ t('head.title') }}</p>
		<p>Nombre de joueurs : {{ domGameStore.playersCounter }}</p>
		<div>
			<h3>Scorebord</h3>
			<ul>
				<li v-for="team in domGameStore.scorebord" :key="team.name">{{ team.name }} => {{ team.score }}</li>
			</ul>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
