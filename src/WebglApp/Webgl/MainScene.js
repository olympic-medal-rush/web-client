import { GlobalApp } from '@/main';
import { app } from '@webglApp/App';
import { AmbientLight, Color, Scene } from 'three';
import { state } from '../../State';
import Map from './Objects/Map';
import Player from './Objects/Player';

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
