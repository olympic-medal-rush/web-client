import { app } from '@webglApp/App';
import { globalUniforms } from '@webglApp/utils/globalUniforms';
import { Group } from 'three';
import { clone as skeletonClone } from 'three/examples/jsm/utils/SkeletonUtils';
import { state } from '../../State';
import { MainCamera } from './MainCamera';
import { MainScene } from './MainScene';
import { Medal } from './Objects/Medal';
import { Player } from './Objects/Player';
import { PostProcessing } from './PostProcessing';
import { Renderer } from './Renderer';

class WebglController {
	#dynamicGroup = new Group();
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

		this.scene.add(this.#dynamicGroup);
	}

	onAttach() {
		app.$wrapper.prepend(this.renderer.domElement);

		this.onRender();
		this.#renderStaticShadows();

		app.debug?.mapping.add(this, 'Game', 1);
	}

	/**
	 *
	 * @param {import('@/types/env').StateReadyPayload} params
	 */
	onStateReady({ teams, medals }) {
		console.log(teams);
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
		const baseModel = app.core.assetsManager.get('player');
		const mesh = skeletonClone(baseModel);
		mesh.animations = baseModel.animations;
		const player = new Player(mesh, team);
		app.webgl.players.set(team, player);
		this.#dynamicGroup.add(player);
	};

	#createMedal = (medal) => {
		const newMedal = new Medal(app.core.assetsManager.get('medals'), medal);
		app.webgl.medals.set(medal.id, newMedal);
		this.#dynamicGroup.add(newMedal);
	};

	onTick({ et }) {
		globalUniforms.uTime.value = et;
	}

	onRender() {
		this.renderer.clear();

		this.#renderDynamicShadows();
		this.#renderDiffuse();
		this.#renderEmissive();
		this.#renderPostProcessing();
	}

	#renderDiffuse() {
		this.#renderRenderTarget(this.scene, this.camera, this.postProcessing.renderTarget);
	}

	#renderDynamicShadows() {
		this.#renderRenderTarget(this.#dynamicGroup, this.scene.shadowCamera, this.scene.dynamicShadowRenderTarget);
	}

	#renderStaticShadows() {
		this.#renderRenderTarget(this.scene.terrain, this.scene.shadowCamera, this.scene.staticShadowRenderTarget);
	}

	#renderEmissive() {
		this.#emissiveOnly = true;
		this.#renderRenderTarget(this.scene, this.camera, this.postProcessing.emissivePass.renderTargets[0]);
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
		globalUniforms.uEmissiveOnly.value = value;
		this.scene.background = this.scene.userData.backgrounds[+value];
		this.scene?.terrain?.traverse(
			/** @param {import('three').Mesh} child*/ (child) => {
				if (child.isMesh) child.material = child.userData.materials[+value];
			},
		);
	}

	get #emissiveOnly() {
		return globalUniforms.uEmissiveOnly.value;
	}
}

export { WebglController };
