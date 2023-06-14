import { app } from '@/App.js';
import { state } from '@/State.js';
import { AmbientLight, Color, DepthTexture, Group, OrthographicCamera, Scene, WebGLRenderTarget } from 'three';
import { InstancedFlags } from '@Webgl/Objects/InstancedFlags.js';
import { InstancedFlames } from '@Webgl/Objects/InstancedFlames.js';
import { InstancedMedals } from '@Webgl/Objects/InstancedMedals.js';
import { InstancedTeams } from '@Webgl/Objects/InstancedTeams.js';
import Reactmoji from '@Webgl/Objects/Reactmoji.js';
import { TERRAIN } from '@utils/config.js';
import { computeEnvmap } from '@utils/misc.js';
import { Terrain } from '../../Objects/Terrain.js';

class MainScene extends Scene {
	dynamicGroup = new Group();
	constructor() {
		super();
		state.register(this);

		this.add(this.dynamicGroup);
		this.add(new AmbientLight(0xffffff, 1));

		const halfTerrain = TERRAIN.size * 0.5 + 5;
		this.shadowCamera = new OrthographicCamera(-halfTerrain, halfTerrain, halfTerrain, -halfTerrain, 1, 100);
		this.shadowCamera.position.set(-5, 40, 5);
		this.shadowCamera.lookAt(halfTerrain, 0, halfTerrain);

		const rtSize = 4096;

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
		this.teams = new InstancedTeams({ teams, model: app.core.assetsManager.get('player') });
		this.flags = new InstancedFlags({ teams });
		this.flames = new InstancedFlames({ teams });
		this.dynamicGroup.add(this.teams, this.flames, this.flags);

		const reactmoji = new Reactmoji();
		reactmoji.position.y += 5;
		this.add(reactmoji);
		this.dynamicGroup.add(this.teams);
	}

	addMedals(medals) {
		this.medals.addInstances(medals);
	}

	collectMedal(medal, team) {
		this.teams.collectMedal(team);
		this.medals.removeInstance(medal);
	}

	addTeam(team) {
		this.teams.addInstance(team);
	}

	moveTeam(team) {
		this.teams.moveInstance(team);
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

	render() {
		this.#renderDynamicShadows();
		this.#renderDiffuse();
	}
}

export { MainScene };
