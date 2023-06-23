import { createCoreModules } from '@/Core/index';
import { state } from '@/State';
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
import { GameController } from './Game/GameController';
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

		await this.load();
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
		vueApp.mount('#vue-app');

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
