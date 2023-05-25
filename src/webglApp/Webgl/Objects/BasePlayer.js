import { state } from '@/State';
import flagColors from '@jsons/flag_colors.json';
import { app } from '@webglApp/App';
import { globalUniforms } from '@webglApp/utils/globalUniforms';
import { computeEnvmap } from '@webglApp/utils/misc';
import gsap from 'gsap';
import { AnimationMixer, Color, Object3D, RepeatWrapping } from 'three';
import { Euler } from 'three';
import { Vector3 } from 'three';
import { Quaternion } from 'three';
import { MATERIALS } from '@utils/config';
import { PlayerBodyMaterial } from '../Materials/PlayerBody/material';
import { PlayerFaceMaterial } from '../Materials/PlayerFace/material';
import { PlayerGoldMaterial } from '../Materials/PlayerGold/material';
import Flame from './Flame';

class BasePlayer extends Object3D {
	#moveTl;
	#quat = new Quaternion();
	#quat2 = new Quaternion();
	#euler = new Euler();
	#vec3 = new Vector3();

	constructor(model, teamIso) {
		super();
		state.register(this);

		this.name = teamIso;
		this.model = model;

		const envMap = computeEnvmap(app.webgl.renderer, app.core.assetsManager.get('envmap'), false);
		const [aoMap, noise] = app.core.assetsManager.get('playerAo', 'noise');
		aoMap.flipY = false;
		aoMap.generateMipmaps = false;

		noise.wrapS = noise.wrapT = RepeatWrapping;

		// Set materials
		this.body = model.getObjectByName('body');
		const face = model.getObjectByName('face');
		const gold = model.getObjectByName('gold');
		this.raycastCube = model.getObjectByName('raycastCube');

		const { face: faceMatParams, body: bodyMatParams, gold: goldMatParams } = MATERIALS;

		face.material = new PlayerFaceMaterial({
			uniforms: {
				uEmissiveOnly: globalUniforms.uEmissiveOnly,
				uShadowOnly: globalUniforms.uShadowOnly,
				uLightPosition: app.webgl.scene.commonShadowUniforms.uLightPosition,

				uRoughness: { value: faceMatParams.roughness },
				uMetalness: { value: faceMatParams.metalness },
				uEnvMapIntensity: { value: faceMatParams.envMapIntensity },
				uColor: { value: new Color(flagColors[teamIso][0]) },
				tEnvMap: { value: envMap },
				tAoMap: { value: aoMap },
				uAoMapIntensity: { value: faceMatParams.aoMapIntensity },
			},
			defines: {
				...envMap.userData,
			},
		});

		this.body.material = new PlayerBodyMaterial({
			uniforms: {
				...app.webgl.scene.commonShadowUniforms,
				...app.webgl.scene.staticShadowUniforms,

				uEmissiveOnly: globalUniforms.uEmissiveOnly,
				uShadowOnly: globalUniforms.uShadowOnly,

				uColor1: { value: new Color(flagColors[teamIso][1]) },
				uColor2: { value: new Color(flagColors[teamIso][0]) },
				uColor3: { value: new Color(flagColors[teamIso][2] || 0xffffff) },
				tAoMap: { value: aoMap },
				uAoMapIntensity: { value: bodyMatParams.aoMapIntensity },
				tNoise: { value: noise },
			},
			defines: {
				...envMap.userData,
				NEAR: `${app.webgl.scene.shadowCamera.near}.`,
				FAR: `${app.webgl.scene.shadowCamera.far}.`,
			},
		});
		gold.material = new PlayerGoldMaterial({
			uniforms: {
				uEmissiveOnly: globalUniforms.uEmissiveOnly,
				uShadowOnly: globalUniforms.uShadowOnly,
				uLightPosition: app.webgl.scene.commonShadowUniforms.uLightPosition,

				uRoughness: { value: goldMatParams.roughness },
				uMetalness: { value: goldMatParams.metalness },
				uEnvMapIntensity: { value: goldMatParams.envMapIntensity },

				uColor: { value: goldMatParams.color },

				tEnvMap: { value: envMap },

				tAoMap: { value: aoMap },
				uAoMapIntensity: { value: 1 },
			},
			defines: {
				...envMap.userData,
			},
		});

		this.raycastCube.visible = false;

		this.headBone = model.getObjectByName('tête2');

		// Set model transformations
		this.model.scale.setScalar(0.4);
		this.model.rotation.y = Math.PI;

		// Create Flame
		this.flame = new Flame();
		this.flame.position.y = 1;

		// Animations
		this.mixer = new AnimationMixer(this.model);
		this.animations = this.model.animations;

		// Add to player wrapper
		this.add(this.model, this.flame);
	}

	onTick({ dt }) {
		this.mixer.update(dt);
	}

	startIdle() {
		this.#moveTl?.kill();
		this.#moveTl = gsap.timeline({
			onStart: () => {
				this.mixer.clipAction(this.animations[0]).play();
			},
			onUpdate: () => {
				this.headBone.getWorldPosition(this.#vec3);

				if (this.#quat.y === 0) {
					this.flame.position.z = -(this.#vec3.z - this.position.z) * 5;
				} else if (this.#quat.y === 1) {
					this.flame.position.z = (this.#vec3.z - this.position.z) * 5;
				} else if (this.#quat.y > 0) {
					this.flame.position.z = (this.#vec3.x - this.position.x) * 5;
				} else {
					this.flame.position.z = -(this.#vec3.x - this.position.x) * 5;
				}
			},
			onComplete: () => {
				this.mixer.clipAction(this.animations[0]).stop();
				this.startIdle();
			},
		});
		const t = { value: 0 };
		const delay = this.animations[0].duration;
		this.#moveTl.to(t, { value: 1, duration: delay, ease: 'power3.out' }, 0);
	}

	updateISO(iso) {
		this.body.material.uniforms.uColor1.value = new Color(flagColors[iso][1]);
		this.body.material.uniforms.uColor2.value = new Color(flagColors[iso][0]);
		this.body.material.uniforms.uColor3.value = new Color(flagColors[iso][2] || 0xffffff);
	}
}

export { BasePlayer };
