<script setup>
import { app } from '@/App';
import { state } from '@/State';
import { store } from '@/Store';
import router from '@Vue/router';
import { useTeamsStore } from '@stores/teams';
import { EVENTS, STORE_KEYS } from '@utils/constants';
import { onMounted, onUnmounted, ref } from 'vue';
import ButtonOrLink from './../components/Inputs/ButtonOrLink.vue';
import TheLogo from './../components/TheLogo.vue';

const teamsStore = useTeamsStore();

const selectedCountry = ref('BZH');
let allBtn;

app.webgl.renderLogin = true;

onMounted(() => {
	allBtn = document.querySelectorAll('.Pays-item');
	state.on(EVENTS.JOIN_READY, onJoinReady);
});

onUnmounted(() => {
	state.off(EVENTS.JOIN_READY, onJoinReady);
});

const selectCountry = (id) => {
	selectedCountry.value = id;
	state.emit(EVENTS.SELECT_TEAM_UPDATE, id);
	allBtn.forEach((btn) => {
		if (btn.id === id) {
			btn.classList.add('select');
		} else {
			btn.classList.remove('select');
		}
	});
};

const login = () => {
	teamsStore.setCurrent(selectedCountry.value);
	store.set(STORE_KEYS.USER_ISO, selectedCountry.value);
	app.server.userJoin({ iso: selectedCountry.value });
};

const onJoinReady = () => {
	app.webgl.renderLogin = false;
	app.webgl.loginScene.dispose();
	router.replace('/game');
};
</script>

<template>
	<div class="Login-container">
		<TheLogo />
		<div class="Pays-container">
			<div id="BZH" class="Pays-item select" @click="selectCountry('BZH')">
				<span><img src="/assets/images/flags/BZH.png" alt="" /></span>
				<p>BZH</p>
			</div>
			<div id="GRC" class="Pays-item" @click="selectCountry('GRC')">
				<span>🇬🇷</span>
				<p>GRC</p>
			</div>
			<div id="AFG" class="Pays-item" @click="selectCountry('AFG')">
				<span>🇦🇫</span>
				<p>AFG</p>
			</div>
			<!-- <div id="DEU" class="Pays-item" @click="selectCountry('DEU')">
				<span>🇩🇪</span>
				<p>DEU</p>
			</div>
			<div id="ITA" class="Pays-item" @click="selectCountry('ITA')">
				<span>🇮🇹</span>
				<p>ITA</p>
			</div>
			<div id="USA" class="Pays-item" @click="selectCountry('USA')">
				<span>🇺🇸</span>
				<p>USA</p>
			</div> -->
		</div>
		<ButtonOrLink class="confirm-btn" @click="login()">Confirmer le pays</ButtonOrLink>
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
}

.Pays-container {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	gap: 12px;
	width: 100vw;
	margin-top: auto;

	.Pays-item {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		width: 60px;
		height: 60px;
		margin: 20px;

		font-family: 'Paris 24';
		cursor: pointer;
		pointer-events: all;

		&.select {
			background-color: #f2f2e9a3;
			border-radius: 12px;
			border: solid $gold-ui;
		}

		img {
			width: 30px;
			transform: translate(0, -3px);
		}

		span {
			font-size: 35px;
		}

		p {
			transform: translate(0, -10px);
		}
	}
}
</style>

<style lang="scss">
.confirm-btn {
	position: static;
	margin-bottom: 50px;
}
</style>
