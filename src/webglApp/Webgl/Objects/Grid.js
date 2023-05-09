import { app } from '@webglApp/App';
import { globalUniforms } from '@webglApp/utils/globalUniforms';
import { Mesh, PlaneGeometry, RepeatWrapping, Vector3 } from 'three';
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
		seamless2.wrapS = seamless2.wrapT = RepeatWrapping;
		seamless3.wrapS = seamless3.wrapT = RepeatWrapping;
		seamless4.wrapS = seamless4.wrapT = RepeatWrapping;

		const material = new GridMaterial({
			uniforms: {
				...app.webgl.scene.dynamicShadowUniforms,
				...app.webgl.scene.staticShadowUniforms,
				...app.webgl.scene.commonShadowUniforms,

				uZoom: globalUniforms.uZoom,

				uSize: { value: size },
				uFloorColor: { value: new Vector3(0.48, 0, 1) },
				uGridColor: { value: new Vector3(0, 0, 0) },

				tData: { value: groundData },
				tSeamless1: { value: seamless1 },
				tSeamless2: { value: seamless2 },
				tSeamless3: { value: seamless3 },
				tSeamless4: { value: seamless4 },
			},
			defines: {
				NEAR: `${app.webgl.scene.shadowCamera.near}.`,
				FAR: `${app.webgl.scene.shadowCamera.far}.`,
			},
		});

		return material;
	}
}

export { Grid };
