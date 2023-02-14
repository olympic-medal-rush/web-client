import { app as webglApp } from './WebglApp/App';
import { state } from './WebglApp/State';
import { store } from './WebglApp/Store';

export default {
	install: (app) => {
		app.provide('webgl', webglApp);
		app.provide('state', state);
		app.provide('store', store);

		webglApp.init();
	},
};
