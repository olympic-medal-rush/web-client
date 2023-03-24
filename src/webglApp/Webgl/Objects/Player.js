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
	}

	move() {
		gsap.to(this.position, {
			x: this.positionOnGrid.x + 0.5,
			z: this.positionOnGrid.y + 0.5,
			duration: 0.3,
			ease: 'expo.inOut',
		});
	}

	onTick({ dt }) {
		// this.position.x = damp(this.position.x, this.positionOnGrid.x + 0.5, 10, dt);
		// this.position.z = damp(this.position.z, this.positionOnGrid.y + 0.5, 10, dt);
	}
}
