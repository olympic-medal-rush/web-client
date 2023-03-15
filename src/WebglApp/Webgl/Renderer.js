import { WebGLRenderer, sRGBEncoding } from 'three';
import { DEBUG } from '@utils/config.js';
import { app } from '../App.js';
import { state } from '../State.js';

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
