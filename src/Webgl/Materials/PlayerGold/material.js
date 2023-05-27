import { RawShaderMaterial } from 'three';
import fs from './fragment.fs?hotShader';
import vs from './vertex.vs?hotShader';

class PlayerGoldMaterial extends RawShaderMaterial {
	/**
	 *
	 * @param {import("three").ShaderMaterialParameters} options
	 */
	constructor(options = {}) {
		super(options);
		fs.use(this);
		vs.use(this);
	}
}

export { PlayerGoldMaterial };
