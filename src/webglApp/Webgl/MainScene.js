import { app } from '@webglApp/App';
import { computeEnvmap } from '@webglApp/utils/misc';
import { AmbientLight, Color, Scene } from 'three';
import { state } from '../../State';
import { Terrain } from './Objects/Terrain.js';

class MainScene extends Scene {
	constructor() {
		super();
		state.register(this);

		this.add(new AmbientLight(0xffffff, 1));
	}

	onAppLoaded() {
		const envMap = computeEnvmap(app.webgl.renderer, app.core.assetsManager.get('skybox'), false);
		this.background = envMap;
		this.userData.backgrounds = [this.background, new Color(0x000000)];

		this.terrain = new Terrain(app.core.assetsManager.get('terrain'));
		this.add(this.terrain);

		this.environment = computeEnvmap(app.webgl.renderer, app.core.assetsManager.get('envmap'));
	}
}

export { MainScene };
