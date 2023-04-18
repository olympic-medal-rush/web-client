import { state } from '@/State';
import flagColors from '@jsons/flag_colors.json';
import { app } from '@webglApp/App';
import gsap from 'gsap';
import { AnimationMixer, Color, Euler, Matrix4, MeshMatcapMaterial, Object3D, Quaternion, Vector3 } from 'three';
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

		const material = new MeshMatcapMaterial({ color: new Color(flagColors[team.iso][0]) });

		this.baseForFlame = model.getObjectByName('Bone002');

		this.model.traverse((child) => {
			if (child.isMesh && child.material.color.r === 1) {
				if (child.name === 'plane') {
					child.visible = false;
				} else {
					child.material = material;
				}
			}
		});
		this.model.scale.setScalar(0.4);
		this.model.rotation.y = Math.PI;
		// Animation
		this.mixer = new AnimationMixer(this.model);
		this.animations = {
			jump: this.model.animations[0],
		};

		this.#positionOnGrid = team.position;
		this.#currentPosition.set(this.#positionOnGrid.x + 0.5, 0, this.#positionOnGrid.y + 0.5);
		this.#nextPosition.copy(this.#currentPosition);

		this.position.copy(this.#currentPosition);

		this.flame = new Flame();
		this.flame.position.y = 1;

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
				this.mixer.clipAction(this.animations.jump).play();
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
				duration: this.animations.jump.duration,
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
					this.mixer.clipAction(this.animations.jump).stop();
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
