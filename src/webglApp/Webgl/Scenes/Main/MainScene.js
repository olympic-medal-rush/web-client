import { app } from '@webglApp/App';
import { computeEnvmap } from '@webglApp/utils/misc';
import { AmbientLight, Color, DepthTexture, OrthographicCamera, Scene, WebGLRenderTarget } from 'three';
import { TERRAIN } from '@utils/config';
import { state } from '../../../../State';
import { InstancedMedals } from '../../Objects/InstancedMedals';
import { Terrain } from '../../Objects/Terrain.js';

class MainScene extends Scene {
	constructor() {
		super();
		state.register(this);

		this.add(new AmbientLight(0xffffff, 1));

		const halfTerrain = TERRAIN.size * 0.5 + 5;
		this.shadowCamera = new OrthographicCamera(-halfTerrain, halfTerrain, halfTerrain, -halfTerrain, 1, 100);
		this.shadowCamera.position.set(-5, 40, 5);
		this.shadowCamera.lookAt(halfTerrain, 0, halfTerrain);

		const rtSize = 4096;

		// Dynamic Shadows
		this.dynamicShadowRenderTarget = this.#createShadowRenderTarget(rtSize);
		this.dynamicShadowUniforms = {
			tDynamicShadows: { value: this.dynamicShadowRenderTarget.depthTexture },
		};

		// Static Shadows
		this.staticShadowRenderTarget = this.#createShadowRenderTarget(rtSize);
		this.staticShadowUniforms = {
			tStaticShadows: { value: this.staticShadowRenderTarget.depthTexture },
		};

		// Common to both shadow types
		this.commonShadowUniforms = {
			uLightPosition: { value: this.shadowCamera.position },
			uShadowProjectionMatrix: { value: this.shadowCamera.projectionMatrix },
			uShadowMatrixInverse: { value: this.shadowCamera.matrixWorldInverse },
		};
	}

	#createShadowRenderTarget = (size) => {
		const renderTarget = new WebGLRenderTarget(size, size);
		renderTarget.depthTexture = new DepthTexture(size, size);

		return renderTarget;
	};

	onAppLoaded() {
		const envMap = computeEnvmap(app.webgl.renderer, app.core.assetsManager.get('skybox'), false);
		this.background = envMap;
		this.userData.backgrounds = [this.background, new Color(0x000000)];

		this.terrain = new Terrain(app.core.assetsManager.get('terrain'));

		// this.instancedBronzeMedals = new InstancedMedals({ type: 'bronze', count: app.game.medals.bronzeSize });
		// this.instancedSilverMedals = new InstancedMedals({ type: 'silver', count: app.game.medals.silverSize });
		// this.instancedGoldMedals = new InstancedMedals({ type: 'gold', count: app.game.medals.goldSize });

		// this.add(this.terrain, this.instancedBronzeMedals, this.instancedSilverMedals, this.instancedGoldMedals);
		this.add(this.terrain);

		this.environment = computeEnvmap(app.webgl.renderer, app.core.assetsManager.get('envmap'));

		app.debug?.mapping.add(this, 'Scene');
	}
}

export { MainScene };
