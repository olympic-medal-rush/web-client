import { app } from '@/App.js';
import { state } from '@/State.js';
import { CanvasTexture, Color, DepthTexture, Group, LinearFilter, LinearSRGBColorSpace, OrthographicCamera, Scene, WebGLRenderTarget } from 'three';
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

		const halfTerrain = TERRAIN.size * 0.5;
		const cameraBounds = halfTerrain + 12;
		this.shadowCamera = new OrthographicCamera(-cameraBounds, cameraBounds, cameraBounds, -cameraBounds, 1, 100);
		this.shadowCamera.position.set(-3, 40, 5);
		this.shadowCamera.lookAt(cameraBounds, 0, cameraBounds);

		const dynamicRtSize = app.tools.viewport.isMobileAtLaunch ? 2048 : 4096;
		const staticRtSize = 4096;

		// Dynamic Shadows
		this.dynamicShadowRenderTarget = this.#createShadowRenderTarget(dynamicRtSize);
		this.dynamicShadowUniforms = {
			tDynamicShadows: { value: this.dynamicShadowRenderTarget.depthTexture },
		};

		// Static Shadows
		this.staticShadowRenderTarget = this.#createShadowRenderTarget(staticRtSize);
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
		const renderTarget = new WebGLRenderTarget(size, size, { magFilter: LinearFilter, minFilter: LinearFilter });
		renderTarget.depthTexture = new DepthTexture(size, size);

		return renderTarget;
	};

	onAppLoaded() {
		// const envMap = computeEnvmap(app.webgl.renderer, app.core.assetsManager.get('skybox'), false);
		// this.background = envMap;
		this.background = new Color().setHex(0xfbf9ec, LinearSRGBColorSpace);

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
		this.add(this.teamsWrapper.instancedFlags, this.teamsWrapper.instancedReactMoji);
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

	cleanUp() {
		this.medals.dispose();
		this.teamsWrapper.dispose();
	}

	#renderDiffuse() {
		app.webgl.renderer.renderRenderTarget(this, app.webgl.camera, app.webgl.postProcessing.renderTarget);
	}

	#renderDynamicShadows() {
		app.webgl.renderer.renderRenderTarget(this.dynamicGroup, this.shadowCamera, this.dynamicShadowRenderTarget);
	}

	#renderStaticShadows() {
		this.terrain.skybox.visible = false;
		app.webgl.renderer.renderRenderTarget(this.terrain, this.shadowCamera, this.staticShadowRenderTarget);
		this.terrain.skybox.visible = true;
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

	set emissiveOnly(value) {
		this.terrain.skybox.visible = !value;
		this.terrain.grid.visible = !value;
		this.terrain.flagObject.visible = !value;
	}

	get emissiveOnly() {
		return !this.terrain.skybox.visible;
	}
}

export { MainScene };
