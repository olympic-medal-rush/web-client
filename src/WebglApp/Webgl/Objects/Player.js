import { state } from '@/State';
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

		this.positionOnGrid = new Vector2().setX(this.position.x).setY(this.position.z);

		this.add(this.glb);

		if (app.debug) {
			state.on(EVENTS.KEY_DOWN, (key) => {
				if (app.webgl.camera.playerFocus?.name === this.name) {
					switch (key) {
						case 'ArrowUp':
							this.positionOnGrid.y--;
							break;
						case 'ArrowDown':
							this.positionOnGrid.y++;
							break;
						case 'ArrowLeft':
							this.positionOnGrid.x--;
							break;
						case 'ArrowRight':
							this.positionOnGrid.x++;
							break;
						default:
							break;
					}
				}
			});
		}
	}

	onTick({ dt }) {
		this.position.x = damp(this.position.x, this.positionOnGrid.x + 0.5, 10, dt);
		this.position.z = damp(this.position.z, this.positionOnGrid.y + 0.5, 10, dt);
	}
}
