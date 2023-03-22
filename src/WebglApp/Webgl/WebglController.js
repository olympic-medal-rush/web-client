import { app } from '@webglApp/App';
import { globalUniforms } from '@webglApp/utils/globalUniforms';
import { state } from '../../State';
import { MainCamera } from './MainCamera';
import { MainScene } from './MainScene';
import Medal from './Objects/Medal';
import Player from './Objects/Player';
import { PostProcessing } from './PostProcessing';
import { Renderer } from './Renderer';

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
		teams.forEach((team) => this.onCreateTeam(team));
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

	onCreateTeam(team) {
		this.#createTeam(team);
	}

	onSpawnMedals(medals) {
		medals.forEach(this.#createMedal);
	}

	#createTeam = (team) => {
		const player = new Player(app.core.assetsManager.get('player').clone(), team.iso);
		app.webgl.players.set(team.iso, player);
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
