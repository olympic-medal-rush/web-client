import { app } from '@webglApp/App';
import { computeEnvmap } from '@webglApp/utils/misc';
import { AmbientLight, Color, Scene } from 'three';
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

		this.add(this.map);

		this.environment = computeEnvmap(app.webgl.renderer, app.core.assetsManager.get('envmap'), false);

		app.debug?.mapping.add(this, 'Scene');
	}

	addPlayer(iso) {
		const player = new Player(app.core.assetsManager.get('player').clone());
		player.name = iso;
		app.webgl.players.set(iso, player);
		app.webgl.camera.playerFocus = player;
		this.add(player);
	}
}

export { MainScene };
