import { app } from '@webglApp/App.js';
import { AmbientLight, Color, Scene } from 'three';
import { state } from '../../State.js';
import Map from './Objects/Map.js';

class MainScene extends Scene {
	constructor() {
		super();
		state.register(this);

		this.background = new Color(0xaaaaaa);
		this.add(new AmbientLight(0xffffff, 0.5));
	}

	onAttach() {
		this.map = new Map(app.core.assetsManager.get('map'));

		this.add(this.map);
	}
}

export { MainScene };
