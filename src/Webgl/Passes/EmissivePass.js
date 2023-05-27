import { app } from '@/App';
import { state } from '@/State';
import { Vector2, WebGLRenderTarget } from 'three';
import { EmissiveMaterial } from '../Materials/Emissive/material';

class EmissivePass {
	constructor({ dpr = 1 }) {
		state.register(this);

		this.dpr = dpr;

		this.renderTargets = [this.#createRenderTarget(), this.#createRenderTarget(), this.#createRenderTarget()];
		this.material = new EmissiveMaterial({
			uniforms: {
				tEmissive: { value: this.renderTargets[0].texture },

				uHorizontal: { value: 0 },

				// Viewport
				uResolution: { value: new Vector2() },
			},
		});
	}

	#createRenderTarget() {
		const renderTarget = new WebGLRenderTarget(app.tools.viewport.width * this.dpr, app.tools.viewport.height * this.dpr, {
			samples: 0,
		});

		return renderTarget;
	}

	onResize({ width, height }) {
		this.uniforms.uResolution.value.set(width * this.dpr, height * this.dpr);

		this.renderTargets.forEach((rt) => rt.setSize(width * this.dpr, height * this.dpr));
	}

	get texture() {
		return this.renderTargets[2].texture;
	}

	get uniforms() {
		return this.material.uniforms;
	}
}

export { EmissivePass };
