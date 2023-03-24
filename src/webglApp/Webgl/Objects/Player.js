import { state } from '@/State';
import flagColors from '@jsons/flag_colors.json';
import gsap from 'gsap';
import { Color, MeshMatcapMaterial, Object3D, Vector2 } from 'three';

const PI2 = Math.PI * 2;

class Player extends Object3D {
	#currentPosition = new Vector2();
	#nextPosition = new Vector2();
	#currentAngle = 0;
	constructor(model, team) {
		super();
		state.register(this);

		this.name = team.iso;
		this.model = model;

		const material = new MeshMatcapMaterial({ color: new Color(flagColors[team.iso][0]) });

		this.model.traverse((child) => {
			if (child.isMesh) child.material = material;
		});

		this.positionOnGrid = team.position;

		this.#currentPosition.set(this.positionOnGrid.x + 0.5, this.positionOnGrid.y + 0.5);
		this.#nextPosition.copy(this.#currentPosition);

		this.position.setX(this.#currentPosition.x).setZ(this.#currentPosition.y);

		this.add(this.model);

		this.moveTl = null;
	}

	move() {
		this.moveTl?.kill();
		this.moveTl = gsap.timeline();

		this.#currentPosition.set(this.#nextPosition.x, this.#nextPosition.y);
		this.#nextPosition.set(this.positionOnGrid.x + 0.5, this.positionOnGrid.y + 0.5);

		const angle = PI2 - Math.atan2(this.#nextPosition.y - this.#currentPosition.y, this.#nextPosition.x - this.#currentPosition.x);
		let diff = angle - this.#currentAngle;
		if (diff > Math.PI) diff -= 2 * Math.PI;
		else if (diff < -Math.PI) diff += 2 * Math.PI;

		this.#currentAngle = this.#currentAngle + diff;

		this.moveTl.to(this.rotation, { y: `${this.#currentAngle}`, duration: 0.25, ease: 'power3.out' }, 0);
		this.moveTl.to(this.position, { x: this.#nextPosition.x, z: this.#nextPosition.y, duration: 0.5, ease: 'power3.inOut' }, 0);
		this.moveTl.to(this.position, { y: 0.5, duration: 0.25, ease: 'power3.in' }, 0);
		this.moveTl.to(this.position, { y: 0, duration: 0.25, ease: 'power3.out' }, 0.25);
	}
}

export { Player };
