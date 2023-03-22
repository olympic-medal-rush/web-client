import { state } from '@/State.js';
import { app } from '@webglApp/App.js';
import { WebGLRenderer, sRGBEncoding } from 'three';
import { DEBUG } from '@utils/config.js';

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
