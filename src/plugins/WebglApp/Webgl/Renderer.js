import { app } from '@plugins/WebglApp/App';
import { state } from '@plugins/WebglApp/State';
import { DEBUG } from '@plugins/WebglApp/utils/config.js';
import { WebGLRenderer, sRGBEncoding } from 'three';

class Renderer extends WebGLRenderer {
	constructor() {
		super({ antialias: false, powerPreference: 'high-performance' });
		state.register(this);

		this.outputEncoding = sRGBEncoding;
		this.autoClear = false;
		this.debug.checkShaderErrors = DEBUG;
	}

	onAttach() {
		app.debug?.mapping.add(this, 'Stats');
	}

	onResize({ width, height, dpr }) {
		this.setSize(width, height);
		this.setPixelRatio(dpr);
	}
}

export { Renderer };
