<script async setup>
import { state } from '@/State';
import VoteArrows from '@components/Inputs/VoteArrows.vue';
import { useGameStore } from '@stores/game';
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { EVENTS } from '@utils/constants';
import { app } from '../webglApp/App';

const { t } = useI18n();
const domGameStore = useGameStore();

const game = ref();

onMounted(() => {
	/// #if DEBUG
	state.on(EVENTS.KEY_DOWN, (key) => {
		if (key === 'H') game.value.classList.toggle('sixty-debug-hidden');
	});
	/// #endif
});
</script>

<template>
	<div ref="game" class="game">
		<h1>Game view</h1>
		<p>{{ t('head.title') }}</p>
		<p>Nombre de joueurs : {{ domGameStore.playersCounter }}</p>
		<div>
			<h3>Scoreboard</h3>
			<ul>
				<li v-for="team in domGameStore.scoreboard" :key="team.name">{{ team.name }} => {{ team.score }}</li>
			</ul>
		</div>
		<VoteArrows />
	</div>
</template>

<style lang="scss" scoped></style>
