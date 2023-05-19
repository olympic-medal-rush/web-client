import { app } from '@webglApp/App';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import './assets/styles/main.scss';

gsap.registerPlugin(CustomEase);

// CustomEase.create('playerJump', 'M0,0,C0.36,0,0.532,-0.022,0.562,0.152,0.593,0.332,0.576,1,1,1');
CustomEase.create('playerJump', 'M0,0 C0.426,0 0.43,-0.014 0.488,0.072 0.633,0.291 0.544,0.803 0.756,0.908 0.886,0.972 0.982,1 1,1');

app.init(document.getElementById('webgl-app'), document.getElementById('canvas-wrapper'));
// await app.load();

// const i18n = createI18n({
// 	legacy: false,
// 	globalInjection: true,
// 	locale: 'en',
// 	fallbackLocale: 'en',
// 	availableLocales: ['en', 'fr', 'es'],
// 	messages,
// });

// const vueApp = createApp(App);
// vueApp.use(createPinia());
// vueApp.use(router);
// vueApp.use(i18n);
// vueApp.mount('#vue-app');

// const GlobalApp = {
// 	vueApp: vueApp,
// 	server: new ServerController(),
// 	game: new GameController(),
// 	sound: new SoundController(),
// };

// export { GlobalApp };
