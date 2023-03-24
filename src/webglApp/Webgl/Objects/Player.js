import { state } from '@/State';
import flagColors from '@jsons/flag_colors.json';
import gsap from 'gsap';
import { Color, Matrix4, MeshMatcapMaterial, Object3D, Quaternion, Vector3 } from 'three';

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

		this.model.traverse((child) => {
			if (child.isMesh) child.material = material;
		});

		this.#positionOnGrid = team.position;
		this.#currentPosition.set(this.#positionOnGrid.x + 0.5, 0, this.#positionOnGrid.y + 0.5);
		this.#nextPosition.copy(this.#currentPosition);

		this.position.copy(this.#currentPosition);

		this.add(this.model);
	}

	move() {
		this.#moveTl?.kill();
		this.#moveTl = gsap.timeline();

		this.#currentPosition.set(this.#nextPosition.x, 0, this.#nextPosition.z);
		this.#nextPosition.set(this.#positionOnGrid.x + 0.5, 0, this.#positionOnGrid.y + 0.5);

		this.#matrix.identity();
		this.#matrix.lookAt(this.#currentPosition, this.#nextPosition, this.up);
		this.#quat.setFromRotationMatrix(this.#matrix);

		const t = { value: 0 };
		this.#moveTl.to(t, { value: 1, onUpdate: () => this.quaternion.slerp(this.#quat, t.value), duration: 0.25, ease: 'power3.out' }, 0);
		this.#moveTl.to(this.position, { x: this.#nextPosition.x, z: this.#nextPosition.z, duration: 0.5, ease: 'power3.inOut' }, 0);
		this.#moveTl.to(this.position, { y: 0.5, duration: 0.25, ease: 'power3.in' }, 0);
		this.#moveTl.to(this.position, { y: 0, duration: 0.25, ease: 'power3.out' }, 0.25);
	}
}

export { Player };
