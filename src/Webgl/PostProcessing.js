import { app } from '@/App';
import { state } from '@/State';
import { BufferGeometry, DepthTexture, Float32BufferAttribute, Mesh, OrthographicCamera, Vector2, WebGLRenderTarget } from 'three';
import { globalUniforms } from '@utils/globalUniforms';
import { PostProcessingMaterial } from './Materials/PostProcessing/material';
import { EmissivePass } from './Passes/EmissivePass';

class PostProcessing {
	#material;
	constructor(_isWebGL2 = true) {
		state.register(this);

		this.renderTarget = this.#createRenderTarget(true);
		this.emissivePass = new EmissivePass({ dpr: app.tools.viewport.isMobileAtLaunch ? 0.7 : 1 });

		this.#material = new PostProcessingMaterial({
			uniforms: {
				...globalUniforms,

				// Textures
				tDiffuse: { value: this.renderTarget.texture },
				tDepth: { value: this.renderTarget.depthTexture },
				tEmissive: { value: this.emissivePass.texture },

				// Viewport
				uResolution: { value: new Vector2() },
				uRatio: { value: app.tools.viewport.ratio },

				// Render passes
				uEmissiveIntensity: { value: 0.5 },
			},
		});

		const geo = new BufferGeometry()
			.setAttribute('position', new Float32BufferAttribute([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3))
			.setAttribute('uv', new Float32BufferAttribute([0, 2, 0, 0, 2, 0], 2));

		this.quad = new Mesh(geo, this.#material);
		this.emissiveQuad = new Mesh(geo, this.emissivePass.material);
		this.camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1);
	}

	#createRenderTarget(withDepth = false) {
		const renderTarget = new WebGLRenderTarget(app.tools.viewport.width * app.tools.viewport.dpr, app.tools.viewport.height * app.tools.viewport.dpr, {
			samples: 2,
		});
		if (withDepth) {
			const depthTexture = new DepthTexture(app.tools.viewport.width * app.tools.viewport.dpr, app.tools.viewport.height * app.tools.viewport.dpr);
			renderTarget.depthTexture = depthTexture;
		}
		return renderTarget;
	}

	onAttach() {
		app.debug?.mapping.add(this, 'PostProcessing');
	}

	onResize({ width, height, dpr, ratio }) {
		this.#material.uniforms.uResolution.value.set(width * dpr, height * dpr);
		this.#material.uniforms.uRatio.value = ratio;

		this.renderTarget.setSize(width * dpr, height * dpr);
	}

	#renderEmissive(scene, camera) {
		app.webgl.emissiveOnly = true;
		app.webgl.renderer.renderRenderTarget(scene, camera, this.emissivePass.renderTargets[0]);
		app.webgl.emissiveOnly = false;

		// Vertical emissive
		this.emissivePass.uniforms.tEmissive.value = this.emissivePass.renderTargets[0].texture;
		this.emissivePass.uniforms.uHorizontal.value = 0;
		app.webgl.renderer.renderRenderTarget(this.emissiveQuad, this.camera, this.emissivePass.renderTargets[1]);

		// Horizontal emissive
		this.emissivePass.uniforms.tEmissive.value = this.emissivePass.renderTargets[1].texture;
		this.emissivePass.uniforms.uHorizontal.value = 1;
		app.webgl.renderer.renderRenderTarget(this.emissiveQuad, this.camera, this.emissivePass.renderTargets[2]);
	}

	#finalRender() {
		app.webgl.renderer.setRenderTarget(null);
		app.webgl.renderer.clear();
		app.webgl.renderer.render(this.quad, this.camera);
	}

	render(scene, camera) {
		this.#renderEmissive(scene, camera);
		this.#finalRender();
	}

	get uniforms() {
		return this.#material.uniforms;
	}
}

export { PostProcessing };
