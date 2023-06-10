import { app } from '@/App';
import { state } from '@/State';
import { LinearSRGBColorSpace, WebGLRenderer } from 'three';
import { DEBUG } from '@utils/config';

class Renderer extends WebGLRenderer {
	constructor() {
		super({ antialias: false, powerPreference: 'high-performance' });
		state.register(this);

		this.outputColorSpace = LinearSRGBColorSpace;
		this.autoClear = false;
		this.debug.checkShaderErrors = DEBUG;
	}

	/**
	 *
	 * @param {import('three').Object3D} scene
	 * @param {import('three').Camera} camera
	 * @param {import('three').WebGLRenderTarget} renderTarget
	 */
	renderRenderTarget(scene, camera, renderTarget) {
		this.setRenderTarget(renderTarget);
		this.clear();
		this.render(scene, camera);
		this.setRenderTarget(null);
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
