import { state } from '@/State';
import { store } from '@/Store';
import flagColors from '@jsons/flag_colors.json';
import { app } from '@webglApp/App';
import { globalUniforms } from '@webglApp/utils/globalUniforms';
import { computeEnvmap } from '@webglApp/utils/misc';
import gsap from 'gsap';
import { AnimationMixer, Color, Matrix4, Object3D, Quaternion, Raycaster, RepeatWrapping, Vector3 } from 'three';
import { Euler } from 'three';
import { MATERIALS } from '@utils/config';
import { EVENTS } from '@utils/constants';
import { PlayerBodyMaterial } from '../Materials/PlayerBody/material';
import { PlayerFaceMaterial } from '../Materials/PlayerFace/material';
import { PlayerGoldMaterial } from '../Materials/PlayerGold/material';
import Flame from './Flame';

class Player extends Object3D {
	#moveTl;
	#positionOnGrid;
	#currentPosition = new Vector3();
	#nextPosition = new Vector3();
	#matrix = new Matrix4();
	#quat = new Quaternion();
	#quat2 = new Quaternion();
	#euler = new Euler();
	#vec3 = new Vector3();

	constructor(model, team) {
		super();
		state.register(this);

		this.name = team.iso;
		this.model = model;

		// const material = new MeshMatcapMaterial({ color: new Color(flagColors[team.iso][0]) });

		const envMap = computeEnvmap(app.webgl.renderer, app.core.assetsManager.get('envmap'), false);
		const [aoMap, noise] = app.core.assetsManager.get('playerAo', 'noise');
		aoMap.flipY = false;
		aoMap.generateMipmaps = false;

		noise.wrapS = noise.wrapT = RepeatWrapping;

		// Set materials
		const body = model.getObjectByName('body');
		const face = model.getObjectByName('face');
		const gold = model.getObjectByName('gold');
		this.raycastCube = model.getObjectByName('raycastCube');

		const { face: faceMatParams, body: bodyMatParams, gold: goldMatParams } = MATERIALS;

		face.material = new PlayerFaceMaterial({
			uniforms: {
				uEmissiveOnly: globalUniforms.uEmissiveOnly,
				uShadowOnly: globalUniforms.uShadowOnly,

				uRoughness: { value: faceMatParams.roughness },
				uMetalness: { value: faceMatParams.metalness },
				uEnvMapIntensity: { value: faceMatParams.envMapIntensity },
				uColor: { value: new Color(flagColors[team.iso][0]) },
				tEnvMap: { value: envMap },
				tAoMap: { value: aoMap },
				uAoMapIntensity: { value: faceMatParams.aoMapIntensity },
			},
			defines: {
				...envMap.userData,
			},
		});

		body.material = new PlayerBodyMaterial({
			uniforms: {
				uEmissiveOnly: globalUniforms.uEmissiveOnly,
				uShadowOnly: globalUniforms.uShadowOnly,

				uColor1: { value: new Color(flagColors[team.iso][1]) },
				uColor2: { value: new Color(flagColors[team.iso][0]) },
				uColor3: { value: new Color(flagColors[team.iso][2] || 0xffffff) },
				tAoMap: { value: aoMap },
				uAoMapIntensity: { value: bodyMatParams.aoMapIntensity },
				tNoise: { value: noise },
			},
			defines: {
				...envMap.userData,
			},
		});
		gold.material = new PlayerGoldMaterial({
			uniforms: {
				uEmissiveOnly: globalUniforms.uEmissiveOnly,
				uShadowOnly: globalUniforms.uShadowOnly,

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

		// Initial position
		this.#positionOnGrid = team.position;
		this.#currentPosition.set(this.#positionOnGrid.x + 0.5, 0, this.#positionOnGrid.y + 0.5);
		this.#nextPosition.copy(this.#currentPosition);

		this.position.copy(this.#currentPosition);

		// Create Flame
		this.flame = new Flame();
		this.flame.position.y = 1;

		// Animations
		this.mixer = new AnimationMixer(this.model);
		this.animations = this.model.animations;

		// Add to player wrapper
		this.add(this.model, this.flame);

		app.debug?.mapping.add(this, 'Player', 0, 'Player: ' + this.name);
	}

	onTick({ dt }) {
		this.mixer.update(dt);
	}

	addRaycaster() {
		this.raycaster = new Raycaster();
		state.on(EVENTS.POINTER_DOWN, (e) => {
			this.raycaster.setFromCamera(e.webgl, app.webgl.camera);
			const intersects = this.raycaster.intersectObject(this.raycastCube);
			if (intersects.length > 0) app.webgl.camera.focusPlayer = true;
		});
	}

	move() {
		this.#moveTl?.kill();
		this.#moveTl = gsap.timeline({
			onStart: () => {
				this.mixer.clipAction(this.animations[0]).play();
			},
			onUpdate: () => {
				this.headBone.getWorldPosition(this.#vec3);
				this.#euler.setFromQuaternion(this.headBone.getWorldQuaternion(this.#quat2));

				// this.flame.rotation.copy(this.#euler);
				// this.flame.applyQuaternion(this.#quat);

				if (this.#quat.y === 0) {
					this.flame.position.z = (this.#vec3.z - this.position.z) * 5;
				} else if (this.#quat.y === 1) {
					this.flame.position.z = -(this.#vec3.z - this.position.z) * 5;
				} else if (this.#quat.y > 0) {
					this.flame.position.z = (this.#vec3.x - this.position.x) * 5;
				} else {
					this.flame.position.z = -(this.#vec3.x - this.position.x) * 5;
				}
			},
			onComplete: () => {
				this.mixer.clipAction(this.animations[0]).stop();
			},
		});

		this.#currentPosition.set(this.#nextPosition.x, 0, this.#nextPosition.z);
		this.#nextPosition.set(this.#positionOnGrid.x + 0.5, 0, this.#positionOnGrid.y + 0.5);

		this.#matrix.identity();
		this.#matrix.lookAt(this.#currentPosition, this.#nextPosition, this.up);
		this.#quat.setFromRotationMatrix(this.#matrix);

		const t = { value: 0 };
		const delay = this.animations[0].duration / 3;
		this.#moveTl.to(t, { value: 1, onUpdate: () => this.quaternion.slerp(this.#quat, t.value), duration: delay, ease: 'power3.out' }, 0);
		this.#moveTl.to(
			this.position,
			{
				x: this.#nextPosition.x,
				z: this.#nextPosition.z,
				duration: this.animations[0].duration - delay,
				// duration: 2,
				// ease: 'playerJump',
				ease: 'power3.inOut',
				delay,
			},
			0,
		);
	}
}

export { Player };
