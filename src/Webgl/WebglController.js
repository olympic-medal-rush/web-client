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
	#currentScene = null;
	#currentCamera = null;
	constructor() {
		state.register(this);

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
		this.scene.initTeams([...teams.values()]);
		this.scene.initMedals([...medals.values()]);
	}

	/**
	 *
	 * @param {import('@Game/Team').Team} currentTeam
	 */
	onJoinReady(currentTeam) {
		this.camera.playerPosition = this.scene.teamsWrapper.positions.get(currentTeam);
		this.camera.focusPlayer = true;

		this.scene.teamsWrapper.setCurrentTeam(currentTeam);
		// currentPlayer.addRaycaster();
	}

	onCreateTeam(team) {
		this.scene.addTeam(team);
	}

	onVoteResults(team) {
		this.scene.moveTeam(team);
	}

	onReactMoji(countryReactionPayload) {
		this.scene.addReaction(countryReactionPayload);
	}

	onSpawnMedals(medals) {
		this.scene.addMedals(medals);
	}

	onCollectMedal(medal, team) {
		this.scene.collectMedal(medal, team);
	}

	onCleanState() {
		this.scene.cleanUp();
	}

	// UPDATE AND RENDER

	onTick({ et }) {
		globalUniforms.uTime.value = et;
	}

	onRender() {
		this.renderer.clear();

		this.#currentScene.render();
		this.postProcessing.render(this.#currentScene, this.#currentCamera);
	}

	set emissiveOnly(value) {
		globalUniforms.uEmissiveOnly.value = value;
		this.#currentScene.emissiveOnly = value;
		this.#currentScene.background = this.#currentScene.userData.backgrounds[+value];
		this.#currentScene?.terrain?.traverse(
			/** @param {import('three').Mesh} child*/ (child) => {
				if (child.isMesh && child.userData.materials) child.material = child.userData.materials[+value];
			},
		);
	}

	get emissiveOnly() {
		return globalUniforms.uEmissiveOnly.value;
	}

	set renderLogin(value) {
		this.#currentScene = value ? this.loginScene : this.scene;
		this.#currentCamera = value ? this.loginCamera : this.camera;
	}

	get renderLogin() {
		return this.#currentScene === this.loginScene;
	}
}

export { WebglController };
