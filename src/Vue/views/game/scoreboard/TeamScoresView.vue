<script async setup>
import RoundFlag from '@components/Assets/RoundFlag.vue';
import MedalDotCircle from '@components/Medals/MedalDotCircle.vue';
import BlurryPage from '@components/Utils/BlurryPage.vue';
import { useMedalsStore } from '@stores/medals';
import { useTeamsStore } from '@stores/teams';
import { useRoute } from 'vue-router';
import { MEDAL_TYPES } from '@utils/constants';

const route = useRoute();
const iso = route.params.iso;

const medalsStore = useMedalsStore();
const teamsStore = useTeamsStore();

const medals = await medalsStore.getMedals(iso);
</script>

<template>
	<BlurryPage>
		<template #title>
			<RoundFlag class="title" :iso="iso" :has-name="true" />
		</template>
		<div class="team-scores">
			<div class="team-scores-wrapper">
				<div class="top-infos">
					<p class="position">1er</p>
					<p class="medal-count">36 médailles</p>
				</div>
				<div class="results">
					<div class="stats"></div>
					<div class="collection">
						<div class="collection-header">
							<div class="top">
								<h4>Collection</h4>
								<p>{{ teamsStore.getMedalsCount(iso) }} médailles</p>
							</div>
							<div class="medal-types">
								<button>{{ teamsStore.getTeam(iso).medals[MEDAL_TYPES.gold] }} Or</button>
								<button>{{ teamsStore.getTeam(iso).medals[MEDAL_TYPES.silver] }} Argent</button>
								<button>{{ teamsStore.getTeam(iso).medals[MEDAL_TYPES.bronze] }} Bronze</button>
							</div>
						</div>
						<hr />
						<div class="medals-list">
							<RouterLink v-for="medal in medals" :key="medal.id" :to="`/game/medals/${iso}/${medal.id}`" class="medal-circle">
								<MedalDotCircle :has-circle="false" :type="medal.type" :nationality="medal.nationality" />
							</RouterLink>
						</div>
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
	max-width: 60%;
}

$margin-top: calc(45px + 2 * 20px);

.team-scores {
	width: 100%;
	height: 100%;
	margin-top: $margin-top;
	overflow-y: auto;
	border-radius: 10px 10px 0 0;

	.team-scores-wrapper {
		height: 100%;
		border-radius: 10px 10px 0 0;

		.top-infos {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			height: calc(40 * var(--vh));
			position: fixed;
			top: 0;
			width: 100%;
			z-index: -1;

			.position {
				font-size: 46px;
				font-weight: 700;
			}

			.medal-count {
				font-size: 18px;
			}
		}

		.results {
			margin-top: calc(28 * var(--vh));
			min-height: 100%;
			width: 100%;
			background-color: $bg-beige-ui;
			display: flex;
			flex-direction: column;
			padding: 18px 16px;

			.stats {
			}

			.collection {
				border: 2px solid #ececd2;
				border-radius: 18px;
				padding: 18px;
				display: flex;
				flex-direction: column;
				gap: 14px;

				&-header {
					font-size: 22px;

					.top {
						display: flex;
						justify-content: space-between;
						margin-bottom: 24px;

						p {
							color: $dark-gray;
							opacity: 0.5;
							font-size: 14px;
						}
					}

					.medal-types {
						display: flex;
						gap: 18px;
						margin-bottom: 10px;

						button {
							position: relative;
							font-weight: 700;

							&::after {
								content: '';
								position: absolute;
								width: 5px;
								height: 5px;
								background-color: $dark-gray;
								border-radius: 50%;
								bottom: 0;
								left: 50%;
								transform: translate3d(-50%, 0, 0);
								bottom: -8px;
							}
						}
					}
				}

				hr {
					border: 1px solid rgba(204, 204, 179, 0.2);
				}

				.medals-list {
					display: flex;
					flex-wrap: wrap;

					.medal-circle {
						flex: 0 0 25%;
						height: auto;
					}
				}
			}
		}
	}
}
</style>
