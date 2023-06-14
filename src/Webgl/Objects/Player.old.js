import { app } from '@/App';
import { state } from '@/State';
import gsap from 'gsap';
import { Euler, Matrix4, Quaternion, Raycaster, Vector3 } from 'three';
import { EVENTS } from '@utils/constants';
import { BasePlayer } from './Player';

class Player extends BasePlayer {
	#moveTl;
	#rotateTl;
	#positionOnGrid;
	#currentPosition = new Vector3();
	#nextPosition = new Vector3();
	#trendingNextPosition = new Vector3();
	#matrix = new Matrix4();
	#matrixTrend = new Matrix4();
	#quat = new Quaternion();
	#quat2 = new Quaternion();
	#quatTrend = new Quaternion();
	#euler = new Euler();
	#vec3 = new Vector3();

	constructor(model, team) {
		super(model, team.iso);
		state.register(this);

		// Initial position
		this.#positionOnGrid = team.position;
		this.#currentPosition.set(this.#positionOnGrid.x + 0.5, 0, this.#positionOnGrid.y + 0.5);
		this.#nextPosition.copy(this.#currentPosition);

		this.position.copy(this.#currentPosition);

		app.debug?.mapping.add(this, 'Player', 0, 'Player: ' + this.name);
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

	/**
	 *
	 * @param {VoteCountPayload} voteCountPayload
	 */
	onVoteCount(voteCountPayload) {
		// console.log('voteCount', voteCountPayload);
		// // if (this.#moveTl?.isActive()) return;
		// const direction = Object.entries(voteCountPayload).sort(([, valueB], [, valueA]) => valueA - valueB)[0][0];
		// this.#trendingNextPosition.copy(this.position);
		// switch (direction) {
		// 	case 'up':
		// 		this.#trendingNextPosition.z -= 10;
		// 		break;
		// 	case 'right':
		// 		this.#trendingNextPosition.x += 10;
		// 		break;
		// 	case 'down':
		// 		this.#trendingNextPosition.z += 10;
		// 		break;
		// 	case 'left':
		// 		this.#trendingNextPosition.x -= 10;
		// 		break;
		// }
		// this.#matrixTrend.identity();
		// this.#matrixTrend.lookAt(this.#currentPosition, this.#trendingNextPosition, this.up);
		// this.#quatTrend.setFromRotationMatrix(this.#matrixTrend);
		// this.quaternion.copy(this.#quatTrend);
		// this.#rotateTl?.kill();
		// this.#rotateTl = gsap.timeline();
		// const t = { value: 0 };
		// this.#rotateTl.to(t, { value: 1, onUpdate: () => this.quaternion.slerp(this.#quatTrend, t.value), duration: 0.1, ease: 'power3.out' }, 0);
	}
}

export { Player };
