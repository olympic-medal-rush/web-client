import { state } from '@/State';
import flagColors from '@jsons/flag_colors.json';
import { app } from '@webglApp/App';
import { computeEnvmap } from '@webglApp/utils/misc';
import gsap from 'gsap';
import { AnimationMixer, Color, Matrix4, Object3D, Quaternion, Vector3 } from 'three';
import { PlayerBodyMaterial } from '../Materials/PlayerBody/material';
import Flame from './Flame';

class Player extends Object3D {
	#moveTl;
	#positionOnGrid;
	#currentPosition = new Vector3();
	#nextPosition = new Vector3();
	#matrix = new Matrix4();
	#quat = new Quaternion();

	constructor(model, team) {
		super();
		state.register(this);

		this.name = team.iso;
		this.model = model;

		// const material = new MeshMatcapMaterial({ color: new Color(flagColors[team.iso][0]) });

		const envMap = computeEnvmap(app.webgl.renderer, app.core.assetsManager.get('envmap'), false);

		// Set materials
		const body = model.getObjectByName('body');
		// console.log(body.material);
		const eyes = model.getObjectByName('eyes');
		const gold = model.getObjectByName('gold');

		eyes.material = new PlayerBodyMaterial({
			uniforms: {
				uRoughness: { value: eyes.material.roughness },
				uMetalness: { value: eyes.material.metalness },
				uEnvMapIntensity: { value: 0 },
				uEnvMapScale: { value: 1 },
				uColor: { value: eyes.material.color },
				tEnvMap: { value: envMap },
			},
			defines: {
				...envMap.userData,
			},
		});
		body.material = new PlayerBodyMaterial({
			uniforms: {
				uRoughness: { value: body.material.roughness },
				uMetalness: { value: body.material.metalness },
				uEnvMapIntensity: { value: 0 },
				uEnvMapScale: { value: 1 },
				uColor: { value: new Color(flagColors[team.iso][0]) },
				tEnvMap: { value: envMap },
			},
			defines: {
				...envMap.userData,
			},
		});
		gold.material = new PlayerBodyMaterial({
			uniforms: {
				uRoughness: { value: gold.material.roughness },
				uMetalness: { value: gold.material.metalness },
				uEnvMapIntensity: { value: 0 },
				uEnvMapScale: { value: 1 },
				uColor: { value: gold.material.color },
				tEnvMap: { value: envMap },
			},
			defines: {
				...envMap.userData,
			},
		});

		this.baseForFlame = model.getObjectByName('Bone002');

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

	move() {
		this.#moveTl?.kill();
		this.#moveTl = gsap.timeline({
			onStart: () => {
				this.mixer.clipAction(this.animations[0]).play();
			},
		});

		this.#currentPosition.set(this.#nextPosition.x, 0, this.#nextPosition.z);
		this.#nextPosition.set(this.#positionOnGrid.x + 0.5, 0, this.#positionOnGrid.y + 0.5);

		this.#matrix.identity();
		this.#matrix.lookAt(this.#currentPosition, this.#nextPosition, this.up);
		this.#quat.setFromRotationMatrix(this.#matrix);

		const t = { value: 0 };
		this.#moveTl.to(t, { value: 1, onUpdate: () => this.quaternion.slerp(this.#quat, t.value), duration: 0.25, ease: 'power3.out' }, 0);
		this.#moveTl.to(
			this.position,
			{
				x: this.#nextPosition.x,
				z: this.#nextPosition.z,
				duration: this.animations[0].duration,
				ease: 'playerJump',
				onUpdate: () => {
					const planePosition = new Vector3();
					this.baseForFlame.getWorldPosition(planePosition);
					// const planeRotation = new Euler().setFromQuaternion(this.baseForFlame.getWorldQuaternion(new Quaternion()));
					// console.log(planeRotation);
					if (this.#quat._y === 0) {
						this.flame.position.z = (planePosition.z - this.position.z) * 5;
					} else if (this.#quat._y === 1) {
						this.flame.position.z = -(planePosition.z - this.position.z) * 5;
					} else if (this.#quat._y > 0) {
						this.flame.position.z = (planePosition.x - this.position.x) * 5;
					} else {
						this.flame.position.z = -(planePosition.x - this.position.x) * 5;
					}
				},
				onComplete: () => {
					this.mixer.clipAction(this.animations[0]).stop();
				},
			},
			0,
		);
	}

	set emissiveOnly(value) {
		this.model.visible = !value;
	}

	get emissiveOnly() {
		return this.model.visible;
	}
}

export { Player };
