import { GameController } from '@game/GameController';
import messages from '@intlify/unplugin-vue-i18n/messages';
import ServerController from '@server/ServerController';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import './assets/styles/main.scss';
import router from './router/index';

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
};

export { GlobalApp };
