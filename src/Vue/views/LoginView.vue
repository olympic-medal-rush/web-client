<script setup>
import { app } from '@/App';
import { store } from '@/Store';
import { useCountry } from '@Vue/composables/useCountry';
import RoundFlag from '@components/Assets/RoundFlag.vue';
import { useTeamsStore } from '@stores/teams';
import { STORE_KEYS } from '@utils/constants';
import emblaCarouselVue from 'embla-carousel-vue';
import countries from 'i18n-iso-countries';
import { ref, watchEffect } from 'vue';
import ButtonOrLink from './../components/Inputs/ButtonOrLink.vue';
import TheLogo from './../components/TheLogo.vue';

const isos = Object.keys(countries.getAlpha3Codes());
isos.push('BZH');

const allname = [];
isos.forEach((iso) => {
	allname.push({ iso: iso, name: useCountry(iso) });
});
// order an array of objects with name
allname.sort((a, b) => {
	if (a.name < b.name) {
		return -1;
	}
	if (a.name > b.name) {
		return 1;
	}
	return 0;
});

app.webgl.loginScene.setPaysArray(allname, allname.length);

const teamsStore = useTeamsStore();
const [slideshow, slideshowApi] = emblaCarouselVue({ skipSnaps: true, align: 'center' });

watchEffect(() => {
	if (slideshowApi.value) slideshowApi.value.on('scroll', onSlideshowScroll);
});

const onSlideshowScroll = () => {
	selectedCountry.value = allname[slideshowApi.value.selectedScrollSnap()].iso;
	app.webgl.loginScene.onSlideshowScroll(slideshowApi.value.scrollProgress(), slideshowApi.value.selectedScrollSnap());
};

const selectedCountry = ref('BZH');
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

const login = () => {
	teamsStore.setCurrent(selectedCountry.value);
	store.set(STORE_KEYS.USER_ISO, selectedCountry.value);
	app.server.userJoin({ iso: selectedCountry.value });
};

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
				<RoundFlag v-for="pays in allname" :key="pays.iso" class="slide embla__slide" :iso="pays.iso" :has-name="true" />
			</div>
		</div>
		<ButtonOrLink class="confirm-btn" @click="login()">Confirmer le pays</ButtonOrLink>
	</div>
</template>

<style lang="scss" scoped>
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
