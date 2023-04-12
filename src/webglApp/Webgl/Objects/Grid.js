import { app } from '@webglApp/App';
import { Mesh, PlaneGeometry, RepeatWrapping } from 'three';
import { GridMaterial } from '../Materials/Grid/material';

class Grid extends Mesh {
	/**
	 *
	 * @param {import('@/types/env').TerrainData} structure
	 */
	constructor(structure) {
		super();
		const size = structure.data[0].length;

		this.geometry = this.#createGeometry(size);
		this.material = this.#createMaterial(size);
	}

	#createGeometry(size) {
		const geometry = new PlaneGeometry(size, size, 1, 1);
		geometry.rotateX(-Math.PI * 0.5);
		geometry.translate(size * 0.5, 0, size * 0.5);

		return geometry;
	}

	#createMaterial(size) {
		const [groundData, seamless1, seamless2, seamless3, seamless4] = app.core.assetsManager.get('groundData', 'seamless1', 'seamless2', 'seamless3', 'seamless4');

		seamless1.wrapS = seamless1.wrapT = RepeatWrapping;

		const material = new GridMaterial({
			uniforms: {
				tData: { value: groundData },
				tSeamless1: { value: seamless1 },
				tSeamless2: { value: seamless2 },
				tSeamless3: { value: seamless3 },
				tSeamless4: { value: seamless4 },
			},
		});

		return material;
	}
}

export { Grid };
