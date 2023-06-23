<script async setup>
import { useCountry } from '@Vue/composables/useCountry';
import MedalCard from '@components/Medals/MedalCard.vue';
import MedalDotCircle from '@components/Medals/MedalDotCircle.vue';
import BlurryPage from '@components/Utils/BlurryPage.vue';
import { useMedalsStore } from '@stores/medals';
import emblaCarouselVue from 'embla-carousel-vue';
import { onMounted, ref, watchEffect } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const iso = route.params.iso;
const medalsStore = useMedalsStore();
// @ts-ignore
const medals = await medalsStore.getMedals(iso);

const [cardSlideshow, cardSlideshowApi] = emblaCarouselVue();
const [medalSlideshow, medalSlideshowApi] = emblaCarouselVue({ dragFree: true, align: 'start', containScroll: 'trimSnaps' });

watchEffect(() => {
	if (cardSlideshowApi.value) cardSlideshowApi.value.on('select', onCardSlideshowSelect);
});

const medalsCards = ref([]);
const currentIndex = ref(0);
const cardFront = ref(true);

onMounted(() => {
	const medalCardIndex = medalsCards.value.findIndex((medalCard) => medalCard.id === route.params.id);
	currentIndex.value = medalCardIndex >= 0 ? medalCardIndex : 0;

	cardSlideshowApi.value.scrollTo(currentIndex.value);
	medalSlideshowApi.value.scrollTo(currentIndex.value);
});

const onMedalSlideshowPointerDown = (medalId) => {
	cardSlideshowApi.value.scrollTo(medalId);
	medalSlideshowApi.value.scrollTo(medalId);
};

const onCardSlideshowSelect = () => {
	currentIndex.value = cardSlideshowApi.value.selectedScrollSnap();
	medalSlideshowApi.value.scrollTo(currentIndex.value);
	router.replace({ name: 'medals', params: { iso: route.params.iso, id: medalsCards.value[currentIndex.value].id } });
};

const toggleCards = () => {
	cardFront.value = !cardFront.value;
};
</script>

<template>
	<BlurryPage>
		<template #title>
			<h2 class="title">{{ `Collection ${useCountry(route.params.iso)}` }}</h2>
		</template>
		<div class="medals-container">
			<div class="card-toggle">
				<button :class="cardFront && 'selected'" @click="toggleCards">Paris 24</button>
				<button :class="!cardFront && 'selected'" @click="toggleCards">Medal Rush 24</button>
			</div>
			<div ref="cardSlideshow" class="cards-slideshow embla">
				<div class="cards-slideshow-wrapper embla__container">
					<MedalCard
						v-for="(medal, i) in medals"
						:key="medal.id"
						ref="medalsCards"
						:medal="medal"
						:class="`${i === currentIndex && 'active'}  ${!cardFront && 'show-back'}`"
						class="medal-card embla__slide"
					/>
				</div>
			</div>
			<div ref="medalSlideshow" class="bottom-nav-container embla">
				<div class="bottom-nav-wrapper embla__container">
					<button v-for="(medal, i) in medals" :key="medal.id" class="embla__slide" @click="onMedalSlideshowPointerDown(i)">
						<MedalDotCircle :has-circle="i === currentIndex" :type="medal.type" />
					</button>
				</div>
			</div>
		</div>
	</BlurryPage>
</template>

<style lang="scss" scoped>
@use '@styles/tools' as *;

.medals-container {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0px 16px 18px 32px;

	@include tablet {
		width: 370px;
	}

	.back-btn {
		position: absolute;
		top: 20px;
		left: 20px;
	}

	.card-toggle {
		margin-top: 35px;
		display: flex;
		gap: 15px;

		button {
			font-weight: 400;
			font-size: 15px;
			@include apfel-grotezk();
			color: $dark-gray;
			position: relative;

			&::after {
				content: '';
				position: absolute;
				width: 40%;
				height: 3px;
				border-radius: 2px;
				background-color: $dark-gray;
				bottom: -5px;
				left: 50%;
				transform: translate3d(-50%, 0, 0) scaleX(0);
				transition: transform 0.5s $immg-expoOut;
			}

			&.selected {
				font-weight: 700;

				&::after {
					transform: translate3d(-50%, 0, 0) scaleX(1);
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
			gap: 12px;

			.medal-card {
				flex-shrink: 0;
				flex: 0 0 100%;
				transform: scale(0.95);
				opacity: 0.5;
				transition: transform 0.7s $immg-expoOut, opacity 0.3s linear;
				&.active {
					opacity: 1;
					transform: scale(1);
				}
			}
		}
	}

	.bottom-nav-container {
		margin-top: auto;
		pointer-events: all;
		align-self: flex-start;
		width: 100%;

		@include tablet {
			width: calc(100vw - 2 * 50px);
			transform: translateX(calc(-50% + 370px / 2 - 20px));
		}

		.bottom-nav-wrapper {
			display: flex;
			flex-wrap: nowrap;
			gap: 18px;

			button {
			}
		}
	}
}
</style>
