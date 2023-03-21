import { state } from '@/State';
import { GlobalApp } from '@/main';
import flagColors from '@jsons/flag_colors.json';
import { app } from '@webglApp/App';
import { Color, MeshMatcapMaterial, Object3D, Vector2 } from 'three';
import { damp } from 'three/src/math/MathUtils';
import { EVENTS } from '@utils/constants';

export default class Player extends Object3D {
	constructor(glb, iso) {
		super();
		state.register(this);

		this.name = iso;
		this.glb = glb;

		const material = new MeshMatcapMaterial({ color: new Color(flagColors[iso][0]) });
		this.glb.traverse((child) => {
			if (child.isMesh) child.material = material;
		});

		const gameTeam = GlobalApp.game.teams.get(iso);

		this.positionOnGrid = gameTeam.position;

		this.add(this.glb);
	}

	onTick({ dt }) {
		this.position.x = damp(this.position.x, this.positionOnGrid.x + 0.5, 10, dt);
		this.position.z = damp(this.position.z, this.positionOnGrid.y + 0.5, 10, dt);
	}
}
