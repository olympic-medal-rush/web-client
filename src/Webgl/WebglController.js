import { app } from '@/App';
import { state } from '@/State';
import { globalUniforms } from '@utils/globalUniforms';
import { PostProcessing } from './PostProcessing';
import { Renderer } from './Renderer';
import { LoginCamera } from './Scenes/Login/LoginCamera';
import { LoginScene } from './Scenes/Login/LoginScene';
import { MainCamera } from './Scenes/Main/MainCamera';
import { MainScene } from './Scenes/Main/MainScene';

class WebglController {
	constructor() {
		state.register(this);

		/** @type {Map<import('@/Game/Team').Team, import('@Webgl/Objects/Player').Player>} */
		this.players = new Map();
		/** @type {Map<string,  import('@Webgl/Objects/Medal').Medal>} */
		this.medals = new Map();

		this.renderer = new Renderer();
		this.postProcessing = new PostProcessing(this.renderer.capabilities.isWebGL2);

		this.scene = new MainScene();
		this.camera = new MainCamera();

		this.loginScene = new LoginScene();
		this.loginCamera = new LoginCamera();

		this.renderLogin = false;
	}

	onAttach() {
		app.$wrapper.prepend(this.renderer.domElement);

		this.onRender();

		app.debug?.mapping.add(this, 'Game', 1);
	}

	// GAME EVENTS HANDLERS

	/**
	 *
	 * @param {import('@/types/env').StateReadyPayload} params
	 */
	onStateReady({ teams, medals }) {
		teams.forEach((team) => this.onCreateTeam(team));
		// [...medals.values()].forEach(this.scene.createMedal);
		this.scene.initMedals([...medals.values()]);
	}

	/**
	 *
	 * @param {import('@/Game/Team').Team} currentTeam
	 */
	onJoinReady(currentTeam) {
		const currentPlayer = this.players.get(currentTeam);
		this.camera.playerPosition = currentPlayer.position;
		this.camera.focusPlayer = true;
		currentPlayer.addRaycaster();
	}

	onCreateTeam(team) {
		this.scene.createTeam(team);
	}

	onVoteResults(team) {
		this.players.get(team).move();
	}

	onSpawnMedals(medals) {
		medals.forEach(this.scene.addMedal);
	}

	onCollectMedal(medal) {
		this.scene.removeMedal(medal);
	}

	// UPDATE AND RENDER

	onTick({ et }) {
		globalUniforms.uTime.value = et;
	}

	onRender() {
		this.renderer.clear();

		if (this.renderLogin) {
			this.loginScene.render();
		} else {
			this.scene.render();
			this.postProcessing.render(this.scene, this.camera);
		}
	}

	set emissiveOnly(value) {
		globalUniforms.uEmissiveOnly.value = value;
		this.scene.background = this.scene.userData.backgrounds[+value];
		this.scene?.terrain?.traverse(
			/** @param {import('three').Mesh} child*/ (child) => {
				if (child.isMesh) child.material = child.userData.materials[+value];
			},
		);
	}

	get emissiveOnly() {
		return globalUniforms.uEmissiveOnly.value;
	}
}

export { WebglController };
