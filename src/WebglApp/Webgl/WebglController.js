import { GlobalApp } from '@/main';
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

	onCreateTeam(iso) {
		const player = new Player(app.core.assetsManager.get('player').clone(), iso);
		app.webgl.players.set(iso, player);
		this.scene.add(player);
	}

	onSpawnMedals(medals) {
		medals.forEach((medal) => {
			const newMedal = new Medal(app.core.assetsManager.get('medal').clone(), medal);
			app.webgl.medals.set(medal.id, newMedal);
			this.scene.add(newMedal);
		});
	}

	onVoteResults({ iso, team }) {}

	onResize() {}

	onRouteChange(_name) {}

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
