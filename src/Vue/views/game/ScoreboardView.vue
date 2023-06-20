<script setup>
import TeamScore from '@components/Teams/TeamScore.vue';
import BlurryPage from '@components/Utils/BlurryPage.vue';
import { useTeamsStore } from '@stores/teams';

const teamsStore = useTeamsStore();
</script>

<template>
	<BlurryPage back-to="/game">
		<template #title>
			<h2 class="title">Classement</h2>
		</template>
		<div class="scoreboard-container">
			<div class="podium">Podium</div>
			<div class="results">
				<div class="current-team">
					<p>Classement de mon équipe</p>
					<TeamScore :team="teamsStore.currentTeam" />
				</div>
				<hr />
				<div class="other-teams">
					<template v-for="team in teamsStore.scoreboard">
						<TeamScore v-if="team.iso !== teamsStore.currentIso" :key="team.iso" :team="teamsStore.getTeam(team.iso)" />
					</template>
				</div>
			</div>
		</div>
	</BlurryPage>
</template>

<style lang="scss" scoped>
@use '@styles/tools' as *;

.title {
	position: absolute;
}

.scoreboard-container {
	width: 100%;
	height: 100%;
	padding-top: calc(50 * var(--vh));
	overflow-y: auto;

	.podium {
		height: calc(50 * var(--vh));
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		top: 0;
		z-index: -1;
	}

	.results {
		padding: 20px;
		border-radius: 10px 10px 0 0;
		min-height: 100%;
		width: 100%;
		background-color: $bg-beige-ui;
		display: flex;
		flex-direction: column;
		gap: 24px;

		.current-team {
			p {
				padding-bottom: 36px;
			}
		}

		hr {
			border: 1px solid rgba(204, 204, 179, 0.2);
		}

		.other-teams {
			display: flex;
			flex-direction: column;
			gap: 24px;
		}
	}
}
</style>
