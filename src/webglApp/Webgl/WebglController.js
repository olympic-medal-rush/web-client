import { app } from '@webglApp/App';
import { globalUniforms } from '@webglApp/utils/globalUniforms';
import { Group } from 'three';
import { state } from '../../State';
import { MainCamera } from './MainCamera';
import { MainScene } from './MainScene';
import { Medal } from './Objects/Medal';
import { Player } from './Objects/Player';
import { PostProcessing } from './PostProcessing';
import { Renderer } from './Renderer';

class WebglController {
	#emissiveGroup = new Group();
	constructor() {
		state.register(this);

		/** @type Map<import('@game/Team').Team, Player> */
		this.players = new Map();
		/** @type Map<string, Medal> */
		this.medals = new Map();

		this.renderer = new Renderer();
		this.postProcessing = new PostProcessing(this.renderer.capabilities.isWebGL2);
		this.scene = new MainScene();
		this.camera = new MainCamera();

		this.scene.add(this.#emissiveGroup);
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
		this.camera.playerPosition = this.players.get(currentTeam).position;
	}

	onCreateTeam(team) {
		this.#createTeam(team);
	}

	onVoteResults(team) {
		this.players.get(team).move();
	}

	onSpawnMedals(medals) {
		medals.forEach(this.#createMedal);
	}

	onCollectMedal(medalId) {
		this.medals.get(medalId).removeFromParent();
	}

	#createTeam = (team) => {
		const player = new Player(app.core.assetsManager.get('player').clone(), team);
		app.webgl.players.set(team, player);
		this.#emissiveGroup.add(player);
	};

	#createMedal = (medal) => {
		const newMedal = new Medal(app.core.assetsManager.get('medal').clone(), medal);
		app.webgl.medals.set(medal.id, newMedal);
		this.#emissiveGroup.add(newMedal);
	};

	onTick({ et }) {
		globalUniforms.uTime.value = et;
	}

	onRender() {
		this.renderer.clear();

		this.#renderDiffuse();
		this.#renderEmissive();
		this.#renderPostProcessing();
	}

	#renderDiffuse() {
		this.#renderRenderTarget(this.scene, this.camera, this.postProcessing.renderTarget);
	}

	#renderEmissive() {
		this.#emissiveOnly = true;
		this.#renderRenderTarget(this.#emissiveGroup, this.camera, this.postProcessing.emissivePass.renderTargets[0]);
		this.#emissiveOnly = false;

		// Vertical emissive
		this.postProcessing.emissivePass.uniforms.tEmissive.value = this.postProcessing.emissivePass.renderTargets[0].texture;
		this.postProcessing.emissivePass.uniforms.uHorizontal.value = 0;
		this.#renderRenderTarget(this.postProcessing.emissiveQuad, this.postProcessing.camera, this.postProcessing.emissivePass.renderTargets[1]);

		// Horizontal emissive
		this.postProcessing.emissivePass.uniforms.tEmissive.value = this.postProcessing.emissivePass.renderTargets[1].texture;
		this.postProcessing.emissivePass.uniforms.uHorizontal.value = 1;
		this.#renderRenderTarget(this.postProcessing.emissiveQuad, this.postProcessing.camera, this.postProcessing.emissivePass.renderTargets[2]);
	}

	#renderPostProcessing() {
		this.renderer.setRenderTarget(null);
		this.renderer.clear();
		this.renderer.render(this.postProcessing.quad, this.postProcessing.camera);
	}

	#renderRenderTarget(scene, camera, renderTarget) {
		this.renderer.setRenderTarget(renderTarget);
		this.renderer.clear();
		this.renderer.render(scene, camera);
		this.renderer.setRenderTarget(null);
	}

	set #emissiveOnly(value) {
		globalUniforms.uEmissiveOnly.value = value ? 1 : 0;
		this.players.forEach((player) => (player.emissiveOnly = value));
	}

	get #emissiveOnly() {
		return globalUniforms.uEmissiveOnly.value > 0.5;
	}
}

export { WebglController };
