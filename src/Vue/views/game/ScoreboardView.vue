<script setup>
import RoundFlag from '@components/Assets/RoundFlag.vue';
import TeamScore from '@components/Teams/TeamScore.vue';
import BlurryPage from '@components/Utils/BlurryPage.vue';
import { useTeamsStore } from '@stores/teams';

const teamsStore = useTeamsStore();
</script>

<template>
	<BlurryPage>
		<template #title>
			<h2 class="title">Classement</h2>
		</template>
		<div class="scoreboard-container">
			<div class="scoreboard-wrapper">
				<div class="podium">
					<div v-if="teamsStore.scoreboard[1]" class="podium-position silver">
						<RoundFlag class="round-flag" :iso="teamsStore.scoreboard[1]?.iso" :has-name="true" />
						<img src="/assets/images/scoreboard/podium_silver.png" />
					</div>
					<div v-if="teamsStore.scoreboard[0]" class="podium-position gold">
						<RoundFlag class="round-flag" :iso="teamsStore.scoreboard[0]?.iso" :has-name="true" />
						<img src="/assets/images/scoreboard/podium_gold.png" />
					</div>
					<div v-if="teamsStore.scoreboard[2]" class="podium-position bronze">
						<RoundFlag class="round-flag" :iso="teamsStore.scoreboard[2]?.iso" :has-name="true" />
						<img src="/assets/images/scoreboard/podium_bronze.png" />
					</div>
				</div>
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
	overflow-y: auto;
	border-radius: 10px 10px 0 0;

	.scoreboard-wrapper {
		height: auto;
		border-radius: 10px 10px 0 0;
	}

	.podium {
		height: calc(40 * var(--vh));
		display: flex;
		align-items: flex-end;
		justify-content: center;
		position: fixed;
		top: 0;
		z-index: -1;
		width: 100%;

		&-position {
			flex: 0 0 33%;
			display: flex;
			// justify-content: center;
			align-items: center;
			flex-direction: column;

			.round-flag {
				color: $white;
			}

			img {
				width: 100%;
				padding-top: 20px;
			}
		}
	}

	.results {
		margin-top: calc(28 * var(--vh));
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
