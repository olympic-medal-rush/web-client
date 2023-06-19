<script setup>
import MedalImg from '@components/Assets/MedalImg.vue';
import BackButton from '@components/Inputs/BackButton.vue';
import MedalCard from '@components/Medals/MedalCard.vue';
import mockData from '@jsons/medals_data.json';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
	<div class="medals-container">
		<BackButton class="back-btn" />
		<h2 class="title">Collection</h2>

		<div class="card-toggle">
			<button class="selected">Paris 24</button>
			<button>Medal Rush 24</button>
		</div>
		<div class="cards-slideshow">
			<MedalCard v-for="medal in mockData" :key="medal.id" :medal="medal" />
		</div>
		<div class="bottom-nav-container">
			<div class="bottom-nav-wrapper">
				<button v-for="(medal, i) in mockData" :key="medal.id" :class="i === 0 && 'current'">
					<svg viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect
							x="2"
							y="2"
							width="70"
							height="70"
							rx="35"
							fill="url(#paint0_radial_1054_2957)"
							fill-opacity="0.15"
							stroke="#BBA63A"
							stroke-width="3"
							stroke-linecap="round"
							stroke-dasharray="9 9"
							class="circle"
						/>
						<defs>
							<radialGradient id="paint0_radial_1054_2957" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(37 37) rotate(90) scale(35)">
								<stop offset="0.640625" stop-color="#F5E8A8" stop-opacity="0" />
								<stop offset="1" stop-color="#F5E8A8" />
							</radialGradient>
						</defs>
					</svg>

					<MedalImg :type="medal.type" />
				</button>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use '@styles/tools/fonts' as *;
@use '@styles/tools/colors' as *;

.medals-container {
	position: absolute;
	overflow: hidden;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 28px 32px 18px 32px;
	backdrop-filter: blur(20px);
	-webkit-backdrop-filter: blur(20px);
	background: linear-gradient(180deg, rgba(0, 0, 0, 0) 52.08%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(189.89deg, rgba(90, 74, 13, 0.5) 33.09%, rgba(219, 174, 14, 0.5) 93.06%);

	.back-btn {
		position: absolute;
		top: 20px;
		left: 20px;
	}

	.title {
		@include apfel-grotezk();
		font-weight: 700;
		font-size: 24px;
		text-align: center;
		color: $dark-gray;
	}

	.card-toggle {
		margin-top: 55px;
		display: flex;
		gap: 15px;

		button {
			font-weight: 400;
			font-size: 15px;
			@include apfel-grotezk();
			color: $dark-gray;
			position: relative;

			&.selected {
				font-weight: 700;

				&::after {
					content: '';
					position: absolute;
					width: 40%;
					height: 3px;
					border-radius: 2px;
					background-color: $dark-gray;
					bottom: -5px;
					left: 50%;
					transform: translate3d(-50%, 0, 0);
				}
			}
		}
	}

	.bottom-nav-container {
		margin-top: auto;
		pointer-events: all;
		align-self: flex-start;
		width: 100%;
		overflow-x: scroll;
		overflow-y: hidden;

		.bottom-nav-wrapper {
			display: flex;
			gap: 18px;

			button {
				width: 70px;
				height: 70px;
				position: relative;
				padding: 8px;

				svg {
					position: absolute;
					width: 100%;
					height: 100%;
					top: 0;
					left: 0;
					border-radius: 50%;
				}

				flex-shrink: 0;

				position: relative;
			}
		}
	}
}
</style>
