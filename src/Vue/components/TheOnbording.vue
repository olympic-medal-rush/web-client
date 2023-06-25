<script setup>
import { app } from '@/App';
import ButtonOrLink from '@components/Inputs/ButtonOrLink.vue';
import emblaCarouselVue from 'embla-carousel-vue';
import { onMounted, ref, watchEffect } from 'vue';

const [emblaNode, emblaApi] = emblaCarouselVue({ loop: false });
const isOpen = ref(false);
const stepSlider = ref(0);

onMounted(() => {
	setTimeout(() => {
		emblaApi.value.reInit();
		toggle();
		/// #if DEBUG
		if (app.debug?.urlParams.has('skipTuto')) toggle();
		/// #endif
	}, 1000);
});

const toggle = () => {
	isOpen.value = !isOpen.value;
	app.sound.play(`modal${isOpen.value ? 'Open' : 'Close'}`);
};

const onSlideshowSelect = () => {
	stepSlider.value = emblaApi.value.selectedScrollSnap();
};

const handleNext = () => {
	if (emblaApi.value.canScrollNext()) {
		emblaApi.value.scrollNext();
	} else {
		toggle();
	}
};

watchEffect(() => {
	if (emblaApi.value) emblaApi.value.on('select', onSlideshowSelect);
});
</script>

<template>
	<div class="TheOnbording" :class="{ active: isOpen }">
		<div class="TheOnbording-bg" @click="() => toggle()"></div>
		<div class="TheOnbording-popup">
			<div ref="emblaNode" class="embla">
				<div class="embla__container">
					<div class="embla__slide">
						<h2>Bienvenue !</h2>
						<p>Tu viens de prendre part aux Jeux Olympiques alternatifs !</p>
						<img src="/assets/gifs/mascot-jo.gif" alt="" srcset="" />
					</div>
					<div class="embla__slide">
						<h2>OLYMPIC</h2>
						<p>
							Devenez des champions !<br />
							Affronte les autres nations et devient celle la plus médaillée !
						</p>
						<img src="/assets/gifs/flags.gif" alt="" srcset="" />
					</div>
					<div class="embla__slide">
						<h2>MEDAL</h2>
						<p>Au cours des 2 semaines, en direct des médailles apparaissent à la fin de chaque épreuves.</p>
						<img src="/assets/gifs/medals.gif" alt="" srcset="" />
					</div>
					<div class="embla__slide">
						<h2>RUSH</h2>
						<p>Soyez les premiers à les récupérer !</p>
						<img src="/assets/gifs/rush.gif" alt="" srcset="" />
					</div>
					<div class="embla__slide">
						<h2>Vote / collaboration</h2>
						<p>bla bla</p>
						<img src="/assets/gifs/vote.gif" alt="" srcset="" />
					</div>
					<div class="embla__slide">
						<h2>zoom / dezoom</h2>
						<p>bla bla</p>
						<img src="/assets/gifs/zoom.gif" alt="" srcset="" />
					</div>
				</div>
				<div class="dots">
					<span class="dot" :class="{ active: stepSlider === 0 }"></span>
					<span class="dot" :class="{ active: stepSlider === 1 }"></span>
					<span class="dot" :class="{ active: stepSlider === 2 }"></span>
					<span class="dot" :class="{ active: stepSlider === 3 }"></span>
					<span class="dot" :class="{ active: stepSlider === 4 }"></span>
					<span class="dot" :class="{ active: stepSlider === 5 }"></span>
				</div>
				<ButtonOrLink class="cta" @click="() => handleNext()"> {{ stepSlider < 5 ? 'Suivant' : 'JOUER !' }} </ButtonOrLink>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use '@styles/tools' as *;
.TheOnbording {
	width: 100%;
	height: 100%;
	z-index: 1;
	position: absolute;
	pointer-events: none;

	&-bg {
		position: absolute;
		width: 100%;
		height: 100%;
		opacity: 0;
		backdrop-filter: blur(7px);
		-webkit-backdrop-filter: blur(7px);
		transition: opacity 0.5s ease-in-out;
	}

	&-popup {
		position: absolute;
		background-color: $bg-beige-ui;
		width: 93%;
		left: calc(50% - 93% / 2);
		top: calc(50% - 200px);
		border-radius: 15px;
		padding: 24px 0 15px 0;
		opacity: 0;
		transform: translateY(150%);
		transition: transform 0.7s $immg-posOut, opacity 0.5s linear;
		max-height: 400px;

		@include tablet {
			width: 400px;
			left: calc(50% - 400px / 2);
		}

		.cta {
			width: calc(100% - 2 * 20px);
			margin: 0 20px;
		}

		.dots {
			display: flex;
			flex-direction: row;
			justify-content: center;
			margin-bottom: 15px;

			span.dot {
				width: 9px;
				height: 9px;
				background-color: $darken-bg-beige-ui;
				border-radius: 9999px;
				transition: background-color 0.3s;
				margin: 0 2px;

				&.active {
					background-color: $gold-ui;
				}
			}
		}

		.embla {
			overflow: hidden;
		}
		.embla__container {
			display: flex;
			margin: 16px 0;
		}
		.embla__slide {
			padding: 0 20px 0 20px;
			flex: 0 0 100%;
			min-width: 0;
			text-align: center;

			h2 {
				font-family: 'ApfelGrotezk-Fett';
				font-size: 30px;
			}

			p {
				font-family: 'ApfelGrotezk-Regular';
				margin: 10px 0;
			}

			img {
				max-width: 100%;
				max-height: 130px;
				border-radius: 15px;
			}
		}
	}

	&.active {
		pointer-events: all;

		.TheOnbording-bg {
			opacity: 1;
		}

		.TheOnbording-popup {
			transform: translateY(0px);
			opacity: 1;
		}
	}
}
</style>
