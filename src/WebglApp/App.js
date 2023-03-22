import { state } from '../State.js';
import { DEBUG } from '../utils/config.js';
import { EVENTS } from '../utils/constants.js';
import { createCoreModules } from './Core/index.js';
import { createDebugModules } from './Debug/index.js';
import { createToolsModules } from './Tools/index.js';
import { WebglController } from './Webgl/WebglController.js';

class App {
	/** @type App */
	static instance;

	/**
	 *
	 * @param {HTMLDivElement} $webglApp
	 * @param {HTMLDivElement} $canvasWrapper
	 */
	init($webglApp, $canvasWrapper) {
		this.$app = $webglApp;
		this.$wrapper = $canvasWrapper;

		this.core = createCoreModules();
		this.tools = createToolsModules();
		this.webgl = new WebglController();
	}

	async beforeLoad() {
		if (DEBUG) this.debug = await createDebugModules();
		this.debug?.mapping.init();
	}

	async load() {
		await this.beforeLoad();
		await this.core.assetsManager.load();
		state.emit(EVENTS.APP_LOADED);

		state.emit(EVENTS.ATTACH);
		state.emit(EVENTS.RESIZE, this.tools.viewport.infos);
	}

	static getInstance() {
		if (!App.instance) App.instance = new App();
		return App.instance;
	}
}
const app = App.getInstance();
export { app };
