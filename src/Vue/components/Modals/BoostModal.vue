<script setup>
import BoostData from '@jsons/boost_data.json';
import { useGameStore } from '@stores/game';
import { onMounted, ref } from 'vue';

const domGameStore = useGameStore();
const steps = ref();
const progress = ref();
const progressBar = ref();

onMounted(() => {
	progress.value.style.height = steps.value.clientHeight + 'px';
	const stepBoost = domGameStore.playersCounter <= BoostData[0].step ? 1 : domGameStore.playersCounter <= BoostData[2].step ? 2 : 3;
	progressBar.value.style.height = (steps.value.clientHeight / 3) * stepBoost + 'px';
});
</script>

<template>
	<div class="Modal">
		<div class="Modal-header">
			<p class="Modal-header-title">Power-Up</p>
		</div>
		<div class="Modal-container">
			<div ref="progress" class="Boost-progress"><span ref="progressBar"></span></div>
			<div ref="steps" class="Boost-steps">
				<div v-for="boost in BoostData" :key="boost.id" :class="{ active: 156 >= boost.step }">
					<span></span>
					<div>
						<span>{{ boost.step }} joueurs</span>
						<p><img :src="'/assets/svgs/' + boost.icon + '.svg'" />{{ boost.description }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use '@styles/tools' as *;
.Modal {
	padding: 5px 15px 30px 15px;
	pointer-events: all;

	&-header-title {
		font-family: 'ApfelGrotezk-Fett';
		font-size: 35px;
		line-height: 50px;
	}

	&-container {
		margin-left: 15px;
		margin-right: 15px;
		display: flex;
		flex-direction: row;

		.Boost-progress {
			position: relative;
			display: block;
			height: 100px;
			width: 4px;
			margin-top: 10px;
			margin-right: 18px;
			background: linear-gradient(0deg, rgba(246, 246, 219, 1) 0%, rgba(224, 224, 201, 1) 5%, rgba(224, 224, 201, 1) 95%, rgba(246, 246, 219, 1) 100%);

			span {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				background: linear-gradient(0deg, rgba(246, 246, 219, 1) 0%, #b99d0d99 5%, #b99d0d99 95%, rgba(224, 224, 201, 1) 100%);
			}
		}

		.Boost-steps {
			> div {
				margin-top: 10px;
				position: relative;
				> span {
					position: absolute;
					top: 55%;
					left: -26px;
					display: block;
					border-radius: 9999px;
					width: 12px;
					height: 12px;

					background: $darken-bg-beige-ui;
				}

				> div {
					span {
						margin-left: 23px;
						font-family: 'ApfelGrotezk-fett';
					}
					p {
						margin: 3px 0 0 0;
						font-family: 'ApfelGrotezk-regular';
						padding: 10px 13px 12px 13px;
						background-color: $darken-bg-beige-ui;
						border-radius: 9999px;
						font-size: 16px;
						display: flex;
						flex-direction: row;
						align-items: center;

						img {
							margin-right: 8px;
						}
					}
				}
				&.active {
					> span {
						background: $dark-gold;
					}

					p {
						padding: 8px 11px 10px 11px;
						border: 2px solid #b99d0d99;
						background: linear-gradient(90deg, rgba(207, 191, 93, 0.6) 0%, rgba(185, 157, 13, 0.6) 100%);
					}
				}
			}
		}
	}
}
</style>
