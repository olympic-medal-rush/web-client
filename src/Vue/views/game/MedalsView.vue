<script setup>
import BackButton from '@components/Inputs/BackButton.vue';
import MedalCard from '@components/Medals/MedalCard.vue';
import MedalDotCircle from '@components/Medals/MedalDotCircle.vue';
import mockData from '@jsons/medals_data.json';
import emblaCarouselVue from 'embla-carousel-vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const [cardSlideshow, cardSlideshowApi] = emblaCarouselVue();
const medalsCards = ref([]);

const route = useRoute();
console.log('country', route.params.iso);
console.log('medalId', route.params.id);

onMounted(() => {
	const medalCardIndex = medalsCards.value.findIndex((medalCard) => medalCard.id === parseInt(route.params.id));
	if (medalCardIndex) cardSlideshowApi.value.scrollTo(medalCardIndex);
});
</script>

<template>
	<div class="medals-container">
		<BackButton class="back-btn" />
		<h2 class="title">Collection {{ route.params.iso }}</h2>

		<div class="card-toggle">
			<button class="selected">Paris 24</button>
			<button>Medal Rush 24</button>
		</div>
		<div ref="cardSlideshow" class="cards-slideshow embla">
			<div class="cards-slideshow-wrapper embla__container">
				<MedalCard v-for="medal in mockData" :key="medal.id" ref="medalsCards" :medal="medal" class="medal-card embla__slide" />
			</div>
		</div>
		<div class="bottom-nav-container">
			<div class="bottom-nav-wrapper">
				<button v-for="(medal, i) in mockData" :key="medal.id" :class="i === 0 && 'current'">
					<MedalDotCircle :type="medal.type" />
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
	background: linear-gradient(to bottom, rgba(219, 174, 14, 0.5), rgba(90, 74, 13, 0.5));

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

	.cards-slideshow {
		height: 100%;
		padding-top: 30px;
		padding-bottom: 15px;
		pointer-events: all;
		width: 100%;

		&-wrapper {
			height: 100%;
			width: 100%;
			display: flex;
			flex-wrap: nowrap;
			gap: 18px;

			.medal-card {
				flex-shrink: 0;
				flex: 0 0 100%;
			}
		}
	}

	.bottom-nav-container {
		margin-top: auto;
		pointer-events: all;
		align-self: flex-start;
		width: 100%;

		.bottom-nav-wrapper {
			display: flex;
			gap: 18px;

			button {
			}
		}
	}
}
</style>
