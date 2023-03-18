import messages from '@intlify/unplugin-vue-i18n/messages';
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
