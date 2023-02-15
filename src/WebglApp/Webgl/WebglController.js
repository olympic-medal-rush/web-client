import gsap from 'gsap';
import { Color } from 'three';
import { globalUniforms } from '@utils/globalUniforms.js';
import { app } from '../App.js';
import { state } from '../State.js';
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

	onRouteChange(name) {
		const color = new Color();
		if (name === 'about') color.set(0xffaadd);
		else color.set(0xaaaaaa);

		gsap.to(this.scene.background, {
			r: color.r,
			g: color.g,
			b: color.b,
			duration: 1,
		});
	}

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
