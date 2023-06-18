import { app } from '@/App.js';
import { state } from '@/State.js';
import { AmbientLight, CanvasTexture, Color, DepthTexture, Group, OrthographicCamera, Scene, WebGLRenderTarget } from 'three';
import { InstancedMedals } from '@Webgl/Objects/InstancedMedals.js';
import { TeamsWrapper } from '@Webgl/Objects/Teams/TeamsWrapper.js';
import { TERRAIN } from '@utils/config.js';
import { computeEnvmap } from '@utils/misc.js';
import { Terrain } from '../../Objects/Terrain.js';

class MainScene extends Scene {
	dynamicGroup = new Group();

	#headTopVertexID = 0.217677;
	constructor() {
		super();
		state.register(this);

		this.add(this.dynamicGroup);
		this.add(new AmbientLight(0xffffff, 1));

		const halfTerrain = TERRAIN.size * 0.5 + 10;
		this.shadowCamera = new OrthographicCamera(-halfTerrain, halfTerrain, halfTerrain, -halfTerrain, 1, 100);
		this.shadowCamera.position.set(-5, 40, 5);
		this.shadowCamera.lookAt(halfTerrain, 0, halfTerrain);

		const rtSize = app.tools.viewport.isMobileAtLaunch ? 2048 : 4096;

		// Dynamic Shadows
		this.dynamicShadowRenderTarget = this.#createShadowRenderTarget(rtSize);
		this.dynamicShadowUniforms = {
			tDynamicShadows: { value: this.dynamicShadowRenderTarget.depthTexture },
		};

		// Static Shadows
		this.staticShadowRenderTarget = this.#createShadowRenderTarget(rtSize);
		this.staticShadowUniforms = {
			tStaticShadows: { value: this.staticShadowRenderTarget.depthTexture },
		};

		// Common to both shadow types
		this.commonShadowUniforms = {
			uLightPosition: { value: this.shadowCamera.position },
			uShadowProjectionMatrix: { value: this.shadowCamera.projectionMatrix },
			uShadowMatrixInverse: { value: this.shadowCamera.matrixWorldInverse },
		};
	}

	#createShadowRenderTarget = (size) => {
		const renderTarget = new WebGLRenderTarget(size, size);
		renderTarget.depthTexture = new DepthTexture(size, size);

		return renderTarget;
	};

	onAppLoaded() {
		const envMap = computeEnvmap(app.webgl.renderer, app.core.assetsManager.get('skybox'), false);
		this.background = envMap;
		this.userData.backgrounds = [this.background, new Color(0x000000)];

		this.environment = computeEnvmap(app.webgl.renderer, app.core.assetsManager.get('envmap'));

		this.terrain = new Terrain(app.core.assetsManager.get('terrain'));
		this.add(this.terrain);

		this.topHeadAnimationTexture = this.#createHeadTopVerticeAnimationTexture();

		app.debug?.mapping.add(this, 'Scene');
	}

	onAttach() {
		this.render();
		this.#renderStaticShadows();
	}

	initMedals(medals) {
		this.medals = new InstancedMedals({ medals, model: app.core.assetsManager.get('medal') });
		this.medals.position.y += 0.5;
		this.dynamicGroup.add(this.medals);
	}

	initTeams(teams) {
		this.teamsWrapper = new TeamsWrapper({ teams });
		this.dynamicGroup.add(this.teamsWrapper.instancedTeams, this.teamsWrapper.instancedFlames);
		this.add(this.teamsWrapper.instancedFlags, this.teamsWrapper.reactmoji);
	}

	addMedals(medals) {
		this.medals.addInstances(medals);
	}

	collectMedal(medal, team) {
		this.teamsWrapper.collectMedal(team);
		this.medals.removeInstance(medal);
	}

	addTeam(team) {
		this.teamsWrapper.addInstance(team);
	}

	moveTeam(team) {
		this.teamsWrapper.moveInstance(team);
	}

	#renderDiffuse() {
		app.webgl.renderer.renderRenderTarget(this, app.webgl.camera, app.webgl.postProcessing.renderTarget);
	}

	#renderDynamicShadows() {
		app.webgl.renderer.renderRenderTarget(this.dynamicGroup, this.shadowCamera, this.dynamicShadowRenderTarget);
	}

	#renderStaticShadows() {
		app.webgl.renderer.renderRenderTarget(this.terrain, this.shadowCamera, this.staticShadowRenderTarget);
	}

	#createHeadTopVerticeAnimationTexture() {
		const vertexAnimationTexture = app.core.assetsManager.get('playerPositionOffsets');
		const { height, width: originalWidth } = vertexAnimationTexture.source.data;
		const width = 1;

		const canvas = document.createElement('canvas');
		canvas.width = width;
		canvas.height = height;

		const ctx = canvas.getContext('2d');
		ctx.drawImage(vertexAnimationTexture.source.data, this.#headTopVertexID * originalWidth, 0, width, height, 0, 0, width, height);

		const texture = new CanvasTexture(canvas);
		texture.flipY = false;
		return texture;
	}

	render() {
		this.#renderDynamicShadows();
		this.#renderDiffuse();
	}
}

export { MainScene };
