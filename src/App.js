import { createCoreModules } from '@/Core/index';
import { state } from '@/State';
import { GameController } from '@Game/GameController';
import ServerController from '@Server/ServerController';
import { SoundController } from '@Sound/SoundController';
import AppVue from '@Vue/App.vue';
import router from '@Vue/router';
import messages from '@intlify/unplugin-vue-i18n/messages';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import { DEBUG } from '@utils/config';
import { EVENTS } from '@utils/constants';
import { createDebugModules } from './Debug';
import { createToolsModules } from './Tools';
import { WebglController } from './Webgl/WebglController';

class App {
	/** @type App */
	static instance;

	/**
	 *
	 * @param {HTMLElement} $webglApp
	 * @param {HTMLElement} $canvasWrapper
	 */
	async init($webglApp, $canvasWrapper) {
		this.$app = $webglApp;
		this.$wrapper = $canvasWrapper;

		this.vueApp = this.#createVueApp();

		this.server = new ServerController();
		this.game = new GameController();
		this.sound = new SoundController();

		this.core = createCoreModules();
		this.tools = createToolsModules();
		this.webgl = new WebglController();

		if (DEBUG) this.debug = await createDebugModules();
		this.debug?.mapping.init();

		this.vueApp.mount('#vue-app');

		await this.load();

		// const canvas = document.createElement('canvas');
		// canvas.width = canvas.height = 100;
		// canvas.style.position = 'absolute';
		// canvas.style.top = '0';
		// canvas.style.left = '0';
		// canvas.style.zIndex = '1000';
		// canvas.style.width = canvas.style.height = '1000px';

		// const data = [];
		// const ctx = canvas.getContext('2d');
		// const jsonData = JSON.parse(JSON.stringify(terrainData.data));

		// for (let x = 0; x < jsonData[0].length; x++) {
		// 	for (let y = 0; y < jsonData[0].length; y++) {
		// 		console.log(jsonData[x][y]);
		// 		switch (jsonData[x][y]) {
		// 			case 0:
		// 				data.push(0, 0, 0, 255);
		// 				break;
		// 			case 1:
		// 				data.push(255, 255, 255, 255);
		// 				break;
		// 			case 2:
		// 				data.push(255, 0, 0, 255);
		// 				break;
		// 			case 3:
		// 				data.push(0, 0, 255, 255);
		// 				break;
		// 			case 4:
		// 				data.push(255, 255, 0, 255);
		// 				break;
		// 			case 5:
		// 				data.push(0, 255, 255, 255);
		// 				break;
		// 			case 6:
		// 				data.push(150, 55, 255, 255);
		// 				break;
		// 			default:
		// 				data.push(0, 0, 0, 255);
		// 		}
		// 	}
		// }

		// const buffer = new Uint8ClampedArray(data);
		// const imageData = new ImageData(buffer, jsonData[0].length, jsonData[0].length);
		// ctx.putImageData(imageData, 0, 0);

		// console.log(jsonData);
		// app.$app.parentElement.appendChild(canvas);
	}

	#createVueApp() {
		const i18n = createI18n({
			legacy: false,
			globalInjection: true,
			locale: 'en',
			fallbackLocale: 'en',
			availableLocales: ['en', 'fr', 'es'],
			messages,
		});

		const vueApp = createApp(AppVue);
		vueApp.use(createPinia());
		vueApp.use(router);
		vueApp.use(i18n);

		return vueApp;
	}

	async beforeLoad() {}

	async load() {
		await this.beforeLoad();
		await this.core.assetsManager.load();
		state.emit(EVENTS.APP_LOADED);

		state.emit(EVENTS.RESIZE, this.tools.viewport.infos);
		state.emit(EVENTS.ATTACH);
	}

	static getInstance() {
		if (!App.instance) App.instance = new App();
		return App.instance;
	}
}
const app = App.getInstance();
export { app };
