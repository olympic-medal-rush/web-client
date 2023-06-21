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
					<TeamScore v-for="team in teamsStore.scoreboard" :key="team.iso" :team="teamsStore.getTeam(team.iso)" />
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
	margin-top: calc(45px + 2 * 20px);
	padding-top: calc(50 * var(--vh));
	overflow-y: auto;
	border-radius: 10px 10px 0 0;

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
		min-height: 100%;
		width: 100%;
		background-color: $bg-beige-ui;
		display: flex;
		flex-direction: column;
		gap: 24px;
		border-radius: 10px 10px 0 0;

		.current-team {
			p {
				padding-bottom: 24px;
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
