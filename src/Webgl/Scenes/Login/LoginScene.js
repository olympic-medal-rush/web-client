import { app } from '@/App';
import { state } from '@/State';
import { Color, LinearSRGBColorSpace, Scene } from 'three';
import { Player } from '@Webgl/Objects/Player';
import { EVENTS } from '@utils/constants';

class LoginScene extends Scene {
	#players = [];
	#xOffset = 1.3;
	constructor() {
		super();

		this.background = new Color().setHex(0xfbf9ec, LinearSRGBColorSpace);
		this.userData.backgrounds = [this.background, new Color(0x000000)];

		state.on(EVENTS.ATTACH, this.#onAppLoaded);
		state.on(EVENTS.SELECT_TEAM_UPDATE, this.#onSelectTeamUpdate);
	}

	#onAppLoaded = () => {
		this.#players.push(new Player(app.core.assetsManager.get('player'), 'BZH'));
		this.#players.push(new Player(app.core.assetsManager.get('player'), 'BZH'));
		this.#players.push(new Player(app.core.assetsManager.get('player'), 'BZH'));

		this.#players[0].position.y = -1;
		this.#players[0].rotation.y = -Math.PI * 0.1;
		this.#players[0].position.x = -this.#xOffset;
		this.#players[0].scale.setScalar(0.7);

		this.#players[1].position.y = -1;
		this.#players[1].rotation.y = Math.PI * 0.1;
		this.#players[1].position.x = 0;
		this.#players[1].scale.setScalar(1);

		this.#players[2].position.y = -1;
		this.#players[2].rotation.y = Math.PI * 0.1;
		this.#players[2].position.x = this.#xOffset;
		this.#players[2].scale.setScalar(0.7);

		this.add(...this.#players);
	};

	onSlideshowScroll(progress, length) {}

	#onSelectTeamUpdate = (iso) => {
		// this.#players[0].updateISO(iso);
	};

	render() {
		app.webgl.renderer.renderRenderTarget(this, app.webgl.loginCamera, app.webgl.postProcessing.renderTarget);
	}

	dispose() {
		this.#players[0].dispose();
	}
}

export { LoginScene };
