import { app } from '@webglApp/App';
import { computeEnvmap } from '@webglApp/utils/misc';
import { AmbientLight, Color, NearestFilter, RGBAFormat, Scene, WebGLRenderTarget } from 'three';
import { DirectionalLight } from 'three';
import { OrthographicCamera } from 'three';
import { TERRAIN } from '@utils/config';
import { state } from '../../State';
import { Terrain } from './Objects/Terrain.js';

class MainScene extends Scene {
	constructor() {
		super();
		state.register(this);

		this.add(new AmbientLight(0xffffff, 1));

		this.sun = new DirectionalLight(0xffffff, 1);
		this.sun.position.set(-5, 40, 5);

		const halfTerrain = TERRAIN.size * 0.5;
		this.sun.shadow.camera = new OrthographicCamera(-halfTerrain, halfTerrain, halfTerrain, -halfTerrain, 1, 100);
		this.sun.shadow.camera.position.copy(this.sun.position);
		this.sun.shadow.camera.lookAt(halfTerrain, 0, halfTerrain);

		this.sun.shadow.mapSize.x = this.sun.shadow.mapSize.y = 4096;
		this.sun.shadow.map = new WebGLRenderTarget(this.sun.shadow.mapSize.x, this.sun.shadow.mapSize.y, { minFilter: NearestFilter, magFilter: NearestFilter, format: RGBAFormat });

		this.shadowUniforms = {
			tDepthMap: { value: this.sun.shadow.map.texture },
			uShadowProjectionMatrix: { value: this.sun.shadow.camera.projectionMatrix },
			uShadowMatrixInverse: { value: this.sun.shadow.camera.matrixWorldInverse },
			uLightPosition: { value: this.sun.position },
		};

		this.add(this.sun, this.sun.shadow.camera);
	}

	onAppLoaded() {
		const envMap = computeEnvmap(app.webgl.renderer, app.core.assetsManager.get('skybox'), false);
		this.background = envMap;
		this.userData.backgrounds = [this.background, new Color(0x000000)];

		this.terrain = new Terrain(app.core.assetsManager.get('terrain'));
		this.add(this.terrain);

		this.environment = computeEnvmap(app.webgl.renderer, app.core.assetsManager.get('envmap'));

		app.debug?.mapping.add(this, 'Scene');
	}
}

export { MainScene };
