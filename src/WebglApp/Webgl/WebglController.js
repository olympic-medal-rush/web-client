import { globalUniforms } from '@/webglApp/utils/globalUniforms.js';
import { state } from '../../State.js';
import { app } from '../App.js';
import { MainCamera } from './MainCamera.js';
import { MainScene } from './MainScene.js';
import { PostProcessing } from './PostProcessing.js';
import { Renderer } from './Renderer.js';

class WebglController {
	constructor() {
		state.register(this);

		this.renderer = new Renderer();
		this.postProcessing = new PostProcessing(this.renderer.capabilities.isWebGL2);
		this.scene = new MainScene();
		this.camera = new MainCamera();
	}

	onAttach() {
		app.$wrapper.prepend(this.renderer.domElement);
	}

	onResize() {}

	onRouteChange(_name) {}

	onTick({ et }) {
		globalUniforms.uTime.value = et;
	}

	onRender() {
		this.renderer.clear();

		this.renderer.setRenderTarget(this.postProcessing.renderTarget);
		this.renderer.clear();
		this.renderer.render(this.scene, this.camera);
		this.renderer.setRenderTarget(null);

		this.renderer.render(this.postProcessing.quad, this.postProcessing.camera);
	}
}

export { WebglController };
