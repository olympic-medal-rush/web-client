<script setup>
import { app } from '@/App';
import RoundFlag from '@components/Assets/RoundFlag.vue';
import { useTeamsStore } from '@stores/teams';
import emblaCarouselVue from 'embla-carousel-vue';
import countries from 'i18n-iso-countries';
import { watchEffect } from 'vue';
import TheLogo from './../components/TheLogo.vue';

const isos = Object.keys(countries.getAlpha3Codes());

const teamsStore = useTeamsStore();
const [slideshow, slideshowApi] = emblaCarouselVue({ skipSnaps: true, align: 'center' });

watchEffect(() => {
	if (slideshowApi.value) slideshowApi.value.on('scroll', onSlideshowScroll);
});

const onSlideshowScroll = () => {
	app.webgl.loginScene.onSlideshowScroll(slideshowApi.value.scrollProgress(), isos.length);
};

// const selectedCountry = ref('BZH');
// let allBtn;

app.webgl.renderLogin = true;

// onMounted(() => {
// 	allBtn = document.querySelectorAll('.Pays-item');
// 	state.on(EVENTS.JOIN_READY, onJoinReady);
// });

// onUnmounted(() => {
// 	state.off(EVENTS.JOIN_READY, onJoinReady);
// });

// const selectCountry = (id) => {
// 	selectedCountry.value = id;
// 	state.emit(EVENTS.SELECT_TEAM_UPDATE, id);
// 	allBtn.forEach((btn) => {
// 		if (btn.id === id) {
// 			btn.classList.add('select');
// 		} else {
// 			btn.classList.remove('select');
// 		}
// 	});
// };

// const login = () => {
// 	teamsStore.setCurrent(selectedCountry.value);
// 	store.set(STORE_KEYS.USER_ISO, selectedCountry.value);
// 	app.server.userJoin({ iso: selectedCountry.value });
// };

// const onJoinReady = () => {
// 	app.webgl.renderLogin = false;
// 	app.webgl.loginScene.dispose();
// 	router.replace('/game');
// };
</script>

<template>
	<div class="Login-container">
		<TheLogo />
		<div ref="slideshow" class="slideshow embla">
			<div class="slideshow-wrapper embl__container">
				<RoundFlag v-for="iso in isos" :key="iso" class="slide embla__slide" :iso="iso" :has-name="true" />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use '@styles/tools' as *;
.Login-container {
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	.slideshow {
		overflow: hidden;
		pointer-events: all;
		width: 100%;

		.slideshow-wrapper {
			display: flex;
			width: 100%;

			.slide {
				flex: 0 0 33%;
				overflow: hidden;
			}
		}
	}
}

// .Pays-container {
// 	display: flex;
// 	flex-wrap: wrap;
// 	justify-content: center;
// 	align-items: center;
// 	gap: 12px;
// 	width: 100vw;
// 	margin-top: auto;

// 	.Pays-item {
// 		display: flex;
// 		flex-direction: column;
// 		justify-content: center;
// 		align-items: center;

// 		width: 60px;
// 		height: 60px;
// 		margin: 20px;

// 		font-family: 'Paris 24';
// 		cursor: pointer;
// 		pointer-events: all;

// 		&.select {
// 			background-color: #f2f2e9a3;
// 			border-radius: 12px;
// 			border: solid $gold-ui;
// 		}

// 		img {
// 			width: 30px;
// 			transform: translate(0, -3px);
// 		}

// 		span {
// 			font-size: 35px;
// 		}

// 		p {
// 			transform: translate(0, -10px);
// 		}
// 	}
// }
</style>

<style lang="scss">
div.confirm-btn {
	position: static;
	margin-bottom: 50px;
}
</style>
