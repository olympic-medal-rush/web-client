import { GlobalApp } from '@/main';
import { app } from '@webglApp/App';
import { globalUniforms } from '@webglApp/utils/globalUniforms';
import { state } from '../../State';
import { MainCamera } from './MainCamera';
import { MainScene } from './MainScene';
import Player from './Objects/Player';
import { PostProcessing } from './PostProcessing';
import { Renderer } from './Renderer';

class WebglController {
	constructor() {
		/** @type Map<string, Player> */
		this.players = new Map();

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
		this.scene.addPlayer(iso);
	}

	onVoteResults({ iso, team }) {
		app.webgl.camera.playerFocus.positionOnGrid = team.position;
	}

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
