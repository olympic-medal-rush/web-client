import { app } from '@webglApp/App.js';
import { globalUniforms } from '@webglApp/utils/globalUniforms.js';
import { state } from '../../State.js';
import { MainCamera } from './MainCamera.js';
import { MainScene } from './MainScene.js';
import Medal from './Objects/Medal.js';
import Player from './Objects/Player.js';
import { PostProcessing } from './PostProcessing.js';
import { Renderer } from './Renderer.js';

class WebglController {
	constructor() {
		/** @type Map<string, Player> */
		this.players = new Map();
		/** @type Map<string, Medal> */
		this.medals = new Map();

		state.register(this);

		this.renderer = new Renderer();
		this.postProcessing = new PostProcessing(this.renderer.capabilities.isWebGL2);
		this.scene = new MainScene();
		this.camera = new MainCamera();
	}

	onAttach() {
		app.$wrapper.prepend(this.renderer.domElement);

		app.debug?.mapping.add(this, 'Game', 1);
	}

	/**
	 *
	 * @param {import('@/types/env').StateReadyPayload} params
	 */
	onStateReady({ teams, medals }) {
		teams.forEach((team, iso) => this.onCreateTeam(iso));
		[...medals.values()].forEach(this.#createMedal);

		// TODO: set camera focus of first team ?
		// this.camera.playerFocus = ;
	}

	/**
	 *
	 * @param {import('@game/Team').Team} currentTeam
	 */
	onJoinReady(currentTeam) {
		this.camera.playerFocus = this.players.get(currentTeam.iso);
	}

	onCreateTeam(iso) {
		this.#createTeam(iso);
	}

	onSpawnMedals(medals) {
		medals.forEach(this.#createMedal);
	}

	#createTeam = (iso) => {
		const player = new Player(app.core.assetsManager.get('player').clone(), iso);
		app.webgl.players.set(iso, player);
		this.scene.add(player);
	};

	#createMedal = (medal) => {
		const newMedal = new Medal(app.core.assetsManager.get('medal').clone(), medal);
		app.webgl.medals.set(medal.id, newMedal);
		this.scene.add(newMedal);
	};

	onTick({ et }) {
		globalUniforms.uTime.value = et;
	}

	onRender() {
		this.renderer.clear();

		this.renderer.setRenderTarget(this.postProcessing.renderTarget);
		this.renderer.clear();
		this.renderer.render(this.scene, this.camera);
		this.renderer.setRenderTarget(null);

		this.renderer.render(this.postProcessing.quad, this.postProcessing.camera);
	}
}

export { WebglController };
