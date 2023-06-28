<script setup>
import { app } from '@/App';
import { state } from '@/State';
import { store } from '@/Store';
import { useCountry } from '@Vue/composables/useCountry';
import RoundFlag from '@components/Assets/RoundFlag.vue';
import { useTeamsStore } from '@stores/teams';
import emblaCarouselVue from 'embla-carousel-vue';
import { gsap } from 'gsap';
import { onMounted, onUnmounted, ref, watchEffect } from 'vue';
import { onBeforeRouteLeave, useRouter } from 'vue-router';
import { EVENTS, STORE_KEYS } from '@utils/constants';
import ButtonOrLink from './../components/Inputs/ButtonOrLink.vue';

const router = useRouter();

const allNames = ['BZH', 'ESP', 'FRA', 'PRT', 'DZA'].map((iso) => ({ iso: iso, name: useCountry(iso) }));

allNames.sort((a, b) => {
	if (a.name < b.name) {
		return -1;
	}
	if (a.name > b.name) {
		return 1;
	}
	return 0;
});

app.webgl.loginScene.setPaysArray(allNames, allNames.length);

const teamsStore = useTeamsStore();
const [slideshow, slideshowApi] = emblaCarouselVue({ skipSnaps: true, align: 'center' });
let currentIndex = 0;

watchEffect(() => {
	if (slideshowApi.value) {
		slideshowApi.value.on('scroll', onSlideshowScroll);
	}
});

const onSlideshowScroll = () => {
	const calculatedIndex = Math.ceil(slideshowApi.value.scrollProgress() * allNames.length);
	if (currentIndex !== calculatedIndex) app.sound.play('tick');
	currentIndex = calculatedIndex;

	selectedCountry.value = allNames[slideshowApi.value.selectedScrollSnap()].iso;
	app.webgl.loginScene.onSlideshowScroll(slideshowApi.value.scrollProgress(), slideshowApi.value.selectedScrollSnap());
};

const selectedCountry = ref(allNames[0].iso);

onMounted(() => {
	state.on(EVENTS.JOIN_READY, onJoinReady);
	app.webgl.renderLogin = true;

	const tl = gsap.timeline();
	tl.to(app.webgl.postProcessing.uniforms.uFadeProgress, { value: 0, duration: 0.5 }, 0);
});

onUnmounted(() => {
	state.off(EVENTS.JOIN_READY, onJoinReady);
});

const login = () => {
	teamsStore.setCurrent(selectedCountry.value);
	store.set(STORE_KEYS.USER_ISO, selectedCountry.value);
	app.server.userJoin({ iso: selectedCountry.value });
};

const onJoinReady = () => {
	router.replace('/game');
};

onBeforeRouteLeave(() => {
	const tl = gsap.timeline({
		onComplete: () => {
			app.webgl.renderLogin = false;
			app.webgl.loginScene.dispose();
		},
	});
	tl.to(slideshow.value, { opacity: 0, duration: 0.1 }, 0);
	tl.to(app.webgl.postProcessing.uniforms.uFadeProgress, { value: 1, duration: 0.5 }, 0);
});
</script>

<template>
	<div class="Login-container">
		<div ref="slideshow" class="slideshow embla">
			<div class="slideshow-wrapper embla__container">
				<div v-for="pays in allNames" :key="pays.iso" class="slide embla__slide" :class="{ selected: selectedCountry === pays.iso }">
					<RoundFlag :iso="pays.iso" :has-name="true" />
					<p>
						{{ !teamsStore.getTeam(pays.iso) ? '0' : teamsStore.getTeam(pays.iso).playerCount }} joueur{{
							teamsStore.getTeam(pays.iso) && teamsStore.getTeam(pays.iso).playerCount > 1 ? 's' : ''
						}}
					</p>
				</div>
			</div>
		</div>
		<ButtonOrLink class="confirm-btn" @click="login()">Confirmer le pays</ButtonOrLink>
	</div>
</template>

<style lang="scss">
@use '@styles/tools' as *;
.Login-container {
	height: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	flex-direction: column;

	.slideshow {
		overflow: hidden;
		pointer-events: all;
		width: 100%;
		height: 400px;
		display: flex;
		align-items: end;
		margin: 40px 0;

		.slideshow-wrapper {
			display: flex;
			width: 100%;
			margin-bottom: 40px;

			.slide {
				flex: 0 0 33%;
				overflow: hidden;
				transform: translateY(0) scale(0.9);
				transition: transform 0.4s $immg-zoomOut, font-size 0.4s $immg-zoomOut;
				display: flex;
				flex-direction: column;
				align-items: center;

				span {
					font-size: 17px;
					font-family: 'ApfelGrotezk-Fett';
					opacity: 0.5;
				}

				p {
					font-family: 'ApfelGrotezk-Regular';
					color: gray;
					margin-top: 5px;
				}

				&.selected {
					transform: translateY(20px) scale(1);

					span {
						opacity: 1;
						font-size: 20px;
					}
				}
			}
		}
	}
}
</style>

<style lang="scss">
.Login-container {
	.confirm-btn {
		position: static;
		margin-bottom: 50px;
	}

	.FlagImg {
		justify-content: center;
	}
}
</style>
