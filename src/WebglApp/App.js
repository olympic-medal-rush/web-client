import { createCoreModules } from './Core/index.js';
import { createDebugModules } from './Debug/index.js';
import { state } from './State.js';
import { createToolsModules } from './Tools/index.js';
import { WebglController } from './Webgl/WebglController.js';
import { DEBUG } from './utils/config.js';
import { EVENTS } from './utils/constants.js';

class App {
	/** @type App */
	static instance;

	async init() {
		this.$app = document.getElementById('webgl-app');
		this.$wrapper = document.getElementById('canvas-wrapper');

		this.core = createCoreModules();
		this.tools = createToolsModules();
		this.webgl = new WebglController();
		if (DEBUG) this.debug = await createDebugModules();

		this.beforeLoad();
		await this.load();
	}

	beforeLoad() {}

	async load() {
		await this.core.assetsManager.load();
		this.debug?.mapping.init();
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
