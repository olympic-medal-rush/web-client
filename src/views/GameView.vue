<script async setup>
import { state } from '@/State';
import CompassButton from '@components/CompassButton.vue';
import VoteArrows from '@components/Inputs/VoteArrows.vue';
import ThePlayerCountry from '@components/ThePlayerTeam.vue';
import { useGameStore } from '@stores/game';
import { app } from '@webglApp/App';
import { onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { EVENTS } from '@utils/constants';

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
    <ThePlayerCountry />
		<p>Nombre de joueurs : {{ domGameStore.playersCounter }}</p>
		<div>
			<h3>Scoreboard</h3>
			<ul>
				<li v-for="team in domGameStore.scoreboard" :key="team.name">{{ team.name }} => {{ team.score }}</li>
			</ul>
		</div>
		<VoteArrows />
		<CompassButton v-for="medal in domGameStore.medals" :id="medal.id" :key="medal.id" :position="app.webgl.medals.get(medal.id).screenPosition"></CompassButton>
	</div>
</template>

<style lang="scss" scoped></style>
