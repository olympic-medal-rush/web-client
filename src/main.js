import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';
import { app as webglApp } from './WebglApp/App';
import './assets/styles/main.scss';
import router from './router';

webglApp.init();

const vueApp = createApp(App);
vueApp.use(createPinia());
vueApp.use(router);
vueApp.mount('#vue-app');
