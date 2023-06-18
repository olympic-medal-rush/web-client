import { app } from '@/App';
import { state } from '@/State';
import { Color, Scene } from 'three';
import { Player } from '@Webgl/Objects/Player';
import { EVENTS } from '@utils/constants';

class LoginScene extends Scene {
	#player;
	constructor() {
		super();

		this.background = new Color(0xfbf9ec);
		this.userData.backgrounds = [this.background, new Color(0x000000)];

		state.on(EVENTS.ATTACH, this.#onAppLoaded);
		state.on(EVENTS.SELECT_TEAM_UPDATE, this.#onSelectTeamUpdate);
	}

	#onAppLoaded = () => {
		this.#player = new Player(app.core.assetsManager.get('player'), 'BZH');
		this.#player.position.y = -1;
		this.#player.rotation.y = Math.PI * 0.1;

		this.add(this.#player);
	};

	#onSelectTeamUpdate = (iso) => {
		this.#player.updateISO(iso);
	};

	render() {
		app.webgl.renderer.renderRenderTarget(this, app.webgl.loginCamera, app.webgl.postProcessing.renderTarget);
	}

	dispose() {
		this.#player.dispose();
	}
}

export { LoginScene };
