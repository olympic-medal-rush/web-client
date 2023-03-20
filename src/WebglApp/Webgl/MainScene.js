import { app } from '@webglApp/App';
import { computeEnvmap } from '@webglApp/utils/misc';
import { AmbientLight, Color, IcosahedronGeometry, Mesh, MeshStandardMaterial, Scene } from 'three';
import { state } from '../../State';
import Map from './Objects/Map';
import Player from './Objects/Player';

class MainScene extends Scene {
	constructor() {
		super();
		state.register(this);

		// manifest.envMaps.envmap.callback = this.envMapLoaded;
		this.background = new Color(0xaaaaaa);
		this.add(new AmbientLight(0xffffff, 0.5));
	}

	onAttach() {
		this.map = new Map(app.core.assetsManager.get('map'));
		this.player = new Player(app.core.assetsManager.get('player'), true);
		this.add(this.map, this.player);

		this.environment = computeEnvmap(app.webgl.renderer, app.core.assetsManager.get('envmap'), false);

		app.debug?.mapping.add(this, 'Scene');
	}
}

export { MainScene };
