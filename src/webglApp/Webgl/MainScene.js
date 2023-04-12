import { app } from '@webglApp/App';
import { AmbientLight, Color, Scene } from 'three';
import { state } from '../../State';
import { Terrain } from './Objects/Terrain.js';

class MainScene extends Scene {
	constructor() {
		super();
		state.register(this);

		this.background = new Color(0xaaaaaa);
		this.add(new AmbientLight(0xffffff, 0.5));
	}

	onAttach() {
		this.terrain = new Terrain(app.core.assetsManager.get('terrain'));

		this.add(this.terrain);
	}
}

export { MainScene };
