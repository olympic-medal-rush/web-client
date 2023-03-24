import { state } from '@/State';
import flagColors from '@jsons/flag_colors.json';
import gsap from 'gsap';
import { Color, MeshMatcapMaterial, Object3D } from 'three';

export default class Player extends Object3D {
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
		this.position.setX(this.positionOnGrid.x + 0.5).setZ(this.positionOnGrid.y + 0.5);

		this.add(this.model);

		this.moveTl = null;
	}

	move() {
		this.moveTl = gsap.timeline();

		this.moveTl.to(this.position, { x: this.positionOnGrid.x + 0.5, z: this.positionOnGrid.y + 0.5, duration: 0.5, ease: 'expo.inOut' }, 0);
		this.moveTl.to(this.position, { y: 0.5, duration: 0.25, ease: 'power3.in' }, 0);
		this.moveTl.to(this.position, { y: 0, duration: 0.25, ease: 'power3.out' }, 0.25);
	}
}
