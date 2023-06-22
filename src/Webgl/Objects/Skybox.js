import { BackSide, IcosahedronGeometry, Mesh } from 'three';
import { SkyboxMaterial } from '@Webgl/Materials/Skybox/material';

class Skybox extends Mesh {
	constructor(size, scaleFactor) {
		super();

		this.position.x = size * 0.5;
		this.position.z = size * 0.5;

		this.geometry = this.#createGeometry();
		this.material = this.#createMaterial();

		this.scale.setScalar(scaleFactor * size * 0.5);
	}

	#createGeometry() {
		const geometry = new IcosahedronGeometry(1, 3);
		return geometry;
	}

	#createMaterial() {
		const material = new SkyboxMaterial({
			uniforms: {},
			side: BackSide,
		});

		return material;
	}
}

export { Skybox };
