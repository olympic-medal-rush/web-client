import messages from '@intlify/unplugin-vue-i18n/messages';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import './assets/styles/main.scss';
import { GameController } from './game/GameController';
import router from './router/index';
import ServerController from './server/ServerController';
import { SoundController } from './sound/SoundController';

gsap.registerPlugin(CustomEase);

CustomEase.create('playerJump', 'M0,0 C0.36,0 0.532,-0.022 0.562,0.152 0.593,0.332 0.62,1.106 1,1');

const i18n = createI18n({
	legacy: false,
	globalInjection: true,
	locale: 'en',
	fallbackLocale: 'en',
	availableLocales: ['en', 'fr', 'es'],
	messages: messages,
});

const vueApp = createApp(App);
vueApp.use(createPinia());
vueApp.use(router);
vueApp.use(i18n);
vueApp.mount('#vue-app');

const GlobalApp = {
	vueApp,
	server: new ServerController({ host: import.meta.env.OLYMPIC_WSS }),
	game: new GameController(),
	sound: new SoundController(),
};

export { GlobalApp };
