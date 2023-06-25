<script async setup>
import { app } from '@/App';
import RoundFlag from '@components/Assets/RoundFlag.vue';
import MedalDotCircle from '@components/Medals/MedalDotCircle.vue';
import BlurryPage from '@components/Utils/BlurryPage.vue';
import { useMedalsStore } from '@stores/medals';
import { useTeamsStore } from '@stores/teams';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { MEDAL_TYPES } from '@utils/constants';

const route = useRoute();
// @ts-ignore
const iso = route.params.iso?.toUpperCase();

const medalsStore = useMedalsStore();
const teamsStore = useTeamsStore();

const medals = await medalsStore.getMedals(iso);

const showGold = ref(true);
const showSilver = ref(true);
const showBronze = ref(true);

const onMedalFilterClick = (type) => {
	app.sound.play('click');
	switch (type) {
		case MEDAL_TYPES.bronze:
			showBronze.value = !showBronze.value;
			break;
		case MEDAL_TYPES.silver:
			showSilver.value = !showSilver.value;
			break;
		case MEDAL_TYPES.gold:
			showGold.value = !showGold.value;
			break;
	}
};
</script>

<template>
	<BlurryPage>
		<template #title>
			<RoundFlag class="title" :iso="iso" :has-name="true" />
		</template>
		<div class="team-scores">
			<div class="team-scores-wrapper">
				<div class="top-infos">
					<img src="/assets/images/white-player.png" alt="" srcset="" />
					<div>
						<p class="position">
							{{ teamsStore.getTeam(teamsStore.currentIso).position }} <span> {{ teamsStore.getTeam(teamsStore.currentIso).position === 1 ? 'er' : 'eme' }}</span>
						</p>
						<p class="medal-count">{{ teamsStore.getMedalsCount(iso) }} médaille{{ teamsStore.getMedalsCount(iso) > 1 ? 's' : '' }}</p>
					</div>
				</div>
				<div class="results">
					<div class="stats"></div>
					<div class="collection">
						<div class="collection-header">
							<div class="top">
								<h4>Collection</h4>
								<p>{{ teamsStore.getMedalsCount(iso) }} médaille{{ teamsStore.getMedalsCount(iso) > 1 ? 's' : '' }}</p>
							</div>
							<div class="medal-types">
								<button :class="showGold && 'active'" @click="onMedalFilterClick(MEDAL_TYPES.gold)">{{ teamsStore.getTeam(iso).medals[MEDAL_TYPES.gold] }} Or</button>
								<button :class="showSilver && 'active'" @click="onMedalFilterClick(MEDAL_TYPES.silver)">
									{{ teamsStore.getTeam(iso).medals[MEDAL_TYPES.silver] }} Argent
								</button>
								<button :class="showBronze && 'active'" @click="onMedalFilterClick(MEDAL_TYPES.bronze)">
									{{ teamsStore.getTeam(iso).medals[MEDAL_TYPES.bronze] }} Bronze
								</button>
							</div>
						</div>
						<hr />
						<div class="medals-list">
							<template v-for="medal in medals">
								<RouterLink
									v-if="
										(medal.type === MEDAL_TYPES.bronze && showBronze) ||
										(medal.type === MEDAL_TYPES.gold && showGold) ||
										(medal.type === MEDAL_TYPES.silver && showSilver)
									"
									:key="medal.id"
									:to="`/game/medals/${iso}/${medal.id}`"
									class="medal-circle"
									@click="app.sound.play('click')"
								>
									<MedalDotCircle :has-circle="false" :type="medal.type" :nationality="medal.nationality" />
								</RouterLink>
							</template>
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
			flex-direction: row;
			justify-content: center;
			align-items: center;
			height: calc(40 * var(--vh));
			position: fixed;
			top: 0;
			width: 100%;
			z-index: -1;

			img {
				width: 50%;
				transform: translate(-10px, 60px);

				@media (min-width: '400px') {
					width: 215px;
				}
			}

			div {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
			}

			.position {
				font-size: 46px;
				font-weight: 700;

				span {
					font-size: 30px;
					display: inline-block;
					transform: translateX(-7px);
				}
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
						justify-content: space-around;

						button {
							position: relative;
							opacity: 0.5;
							font-weight: 700;
							transition: opacity 0.3s linear;

							&::after {
								content: '';
								position: absolute;
								width: 5px;
								height: 5px;
								background-color: $dark-gray;
								border-radius: 50%;
								bottom: 0;
								left: 50%;
								transform: translate3d(-50%, 0, 0) scale(0);
								bottom: -8px;

								transition: transform 0.5s $immg-expoOut, text-shadow 0.5s linear;
							}

							&.active {
								opacity: 1;

								&::after {
									transform: translate3d(-50%, 0, 0) scale(1);
								}
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
						@media (min-width: '400px') {
							flex: 0 0 70px;
						}
					}
				}
			}
		}
	}
}
</style>
