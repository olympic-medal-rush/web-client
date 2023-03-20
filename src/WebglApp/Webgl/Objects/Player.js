import { state } from '@/State';
import { app } from '@webglApp/App';
import { Object3D, Vector2 } from 'three';
import { damp } from 'three/src/math/MathUtils';
import { EVENTS } from '@utils/constants';

export default class Player extends Object3D {
	constructor(glb, camFocus) {
		super();
		state.register(this);

		this.camFocus = camFocus;
		this.glb = glb;
		this.positionOnGrid = new Vector2().setX(this.position.x).setY(this.position.z);

		this.add(this.glb);

		if (app.debug) {
			state.on(EVENTS.KEY_DOWN, (key) => {
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
			});
		}
	}

	onTick({ dt }) {
		if (app.webgl.camera.orbitControls) return;
		this.position.x = damp(this.position.x, this.positionOnGrid.x + 0.5, 10, dt);
		this.position.z = damp(this.position.z, this.positionOnGrid.y + 0.5, 10, dt);
		if (this.camFocus) this.updatePosCam();
	}

	updatePosCam() {
		app.webgl.camera.position.y = this.position.y + 2;
		app.webgl.camera.position.x = this.position.x;
		app.webgl.camera.position.z = this.position.z + 8;
		app.webgl.camera.lookAt(this.position.x, this.position.y + 0.5, this.position.z);
	}
}
