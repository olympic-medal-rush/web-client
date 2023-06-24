import { app } from '@/App';
import { state } from '@/State';
import { Color, LinearSRGBColorSpace, Scene } from 'three';
import { Player } from '@Webgl/Objects/Player';
import { EVENTS } from '@utils/constants';

class LoginScene extends Scene {
	#players = [];
	constructor() {
		super();

		this.xOffset = 1.004;

		this.background = new Color().setHex(0xfbf9ec, LinearSRGBColorSpace);
		this.userData.backgrounds = [this.background, new Color(0x000000)];

		state.on(EVENTS.ATTACH, this.#onAppLoaded);

		this.idPlayerCenter = 0;
		this.idPlayerLeft = null;
		this.idPlayerRight = 1;

		this.selectedIndex = 0;

		this.playerToId = [0, 1, 2, 3, 4];
	}

	#onAppLoaded = () => {
		this.#players.push(new Player(app.core.assetsManager.get('player'), 'BZH'));
		this.#players.push(new Player(app.core.assetsManager.get('player'), 'BZH'));
		this.#players.push(new Player(app.core.assetsManager.get('player'), 'BZH'));
		this.#players.push(new Player(app.core.assetsManager.get('player'), 'BZH'));
		this.#players.push(new Player(app.core.assetsManager.get('player'), 'BZH'));

		this.#players[0].position.y = -1;
		// this.#players[0].rotation.y = -Math.PI * 0.1;
		// this.#players[0].rotation.y = Math.PI * 0.1;
		this.#players[0].position.x = 0;
		this.#players[0].scale.setScalar(0.7);

		this.#players[1].position.y = -1;
		// this.#players[1].rotation.y = Math.PI * 0.1;
		this.#players[1].position.x = this.xOffset;
		// this.#players[1].scale.setScalar(1);
		this.#players[1].scale.setScalar(0.7);

		this.#players[2].position.y = -1;
		// this.#players[2].rotation.y = Math.PI * 0.1;
		this.#players[2].position.x = this.xOffset * 2;
		this.#players[2].scale.setScalar(0.7);

		this.#players[3].position.y = -1;
		// this.#players[3].rotation.y = Math.PI * 0.1;
		this.#players[3].position.x = this.xOffset * 3;
		this.#players[3].scale.setScalar(0.7);

		this.#players[4].position.y = -1;
		// this.#players[4].rotation.y = Math.PI * 0.1;
		this.#players[4].position.x = this.xOffset * 4;
		this.#players[4].scale.setScalar(0.7);

		this.add(...this.#players);
	};

	setPaysArray(array, lenght) {
		this.pays = array;
		this.lenght = lenght;

		// this.xOffset = app.webgl.loginCamera.getVisibleWidthAtZDepth(0) / 3;

		this.updatePosPlayers(0);
		this.#players.forEach((player, i) => {
			this.updatePlayerMaterial(i, this.pays[i].iso);
		});
	}

	onSlideshowScroll(progress, index) {
		this.updatePosPlayers(progress * this.lenght);
		this.updateIdPlayers(index);
	}

	updateIdPlayers(index) {
		if (this.selectedIndex !== index) {
			this.selectedIndex = index;
			this.#players[this.playerToId.findIndex((element) => element === index)]?.playAnnim();
		}

		this.idPlayerCenter = index % 4;
		this.idPlayerLeft = (index - 1) % 4 >= 0 ? (index - 1) % 4 : 4 + ((index - 1) % 4);
		this.idPlayerRight = (index + 1) % 4;
		// console.log('Player Left : ' + this.idPlayerLeft);
		// console.log('Player Center : ' + this.idPlayerCenter);
		// console.log('Player Right : ' + this.idPlayerRight);
	}

	updatePosPlayers(progress) {
		this.progress = progress;

		this.#players[0].position.x = this.getPosPlayer(0);
		this.#players[1].position.x = this.getPosPlayer(1);
		this.#players[2].position.x = this.getPosPlayer(2);
		this.#players[3].position.x = this.getPosPlayer(3);
		this.#players[4].position.x = this.getPosPlayer(4);
	}

	getPosPlayer(id) {
		const basePos = this.xOffset * id;
		const posTranslate = basePos - this.progress;
		let resultPos = posTranslate;

		const limitRight = 2;
		const calcLimitRight = -this.xOffset * limitRight - this.playerToId[id] * this.xOffset + id;
		if (posTranslate < calcLimitRight) {
			this.playerToId[id] = this.playerToId[id] + this.#players.length;
			this.updatePlayerMaterial(id, this.pays[this.playerToId[id]].iso);
		}
		resultPos = posTranslate + this.xOffset * this.#players.length * Math.floor(this.playerToId[id] / this.#players.length);

		if (resultPos >= 2) {
			if (this.playerToId[id] - this.#players.length >= 0) this.playerToId[id] = this.playerToId[id] - this.#players.length;
			this.updatePlayerMaterial(id, this.pays[this.playerToId[id]].iso);
			resultPos = posTranslate + this.xOffset * this.#players.length * Math.floor(this.playerToId[id] / this.#players.length);
		}
		return resultPos;
	}

	updatePlayerMaterial(idPlayer, iso) {
		if (this.#players[idPlayer].name !== iso) {
			this.#players[idPlayer].updateISO(iso);
		}
	}

	render() {
		app.webgl.renderer.renderRenderTarget(this, app.webgl.loginCamera, app.webgl.postProcessing.renderTarget);
	}

	dispose() {
		this.#players[0].dispose();
	}
}

export { LoginScene };
