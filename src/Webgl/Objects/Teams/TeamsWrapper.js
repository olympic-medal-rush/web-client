import { app } from '@/App';
import { state } from '@/State';
import { frame_count as frameCount, steps } from '@jsons/vat.json';
import { gsap } from 'gsap';
import { BoxGeometry, Mesh, Raycaster, Vector2 } from 'three';
import { lerp } from 'three/src/math/MathUtils.js';
import { Bimap } from '@utils/BiMap';
import { EVENTS } from '@utils/constants';
import { InstancedFlags } from './InstancedFlags';
import { InstancedFlames } from './InstancedFlames';
import { InstancedReactMoji } from './InstancedReactMoji';
import { InstancedTeams } from './InstancedTeams';

class TeamsWrapper {
	positions;

	#teams;
	#animationsSteps = {
		jump: 0,
		medal: 0,
	};
	/** @type {Set<import('@Game/Team').Team>} */
	#justWonMedalTeams = new Set();

	#raycaster = new Raycaster();
	#raycastCube;

	constructor({ teams = [], maxCount = 50 } = {}) {
		this.#teams = new Bimap(teams.map((team, i) => [i, team]));

		this.positions = new Map(teams.map((team) => [team, team.position.clone().addScalar(0.5)]));
		this.rotationsY = new Map(teams.map((team) => [team, { value: 0 }]));

		this.maxCount = maxCount;
		const totalFrames = frameCount;
		this.#animationsSteps.jump = steps[1] / totalFrames;
		this.#animationsSteps.medal = 1;

		this.instancedTeams = new InstancedTeams({ teams: this.#teams, model: app.core.assetsManager.get('player'), maxCount });
		this.instancedFlags = new InstancedFlags({ teams: this.#teams, maxCount });
		this.instancedFlames = new InstancedFlames({ teams: this.#teams, maxCount });
		this.instancedReactMoji = new InstancedReactMoji({ teams: this.#teams, maxCount });
	}

	setCurrentTeam(team) {
		this.instancedFlags.setIsMyTeam(team);
		app.sound.setGlobal(this.positions.get(team), this.rotationsY.get(team));

		state.on(EVENTS.POINTER_DOWN, this.#onPointerDown);

		this.#raycastCube = new Mesh(new BoxGeometry(1.5, 2, 1.5).translate(0, 1, 0));
		this.#raycastCube.visible = false;
		app.webgl.scene.add(this.#raycastCube);
	}

	/**
	 *
	 * @param {import('@Game/Team').Team} team
	 */
	addInstance(team) {
		if (this.#teams.hasValue(team)) return console.error('Team instance already exists');
		this.#teams.add(this.#count, team);
		this.positions.set(team, team.position.clone().addScalar(0.5));
		this.rotationsY.set(team, { value: 0 });

		this.instancedTeams.addInstance(team);
		this.instancedFlames.addInstance(team);
		this.instancedFlags.addInstance(team);
		this.instancedReactMoji.addInstance(team);
	}

	addReaction(countryReactionPayload) {
		this.instancedReactMoji.addReaction(countryReactionPayload);
	}

	/**
	 *
	 * @param {import('@Game/Team').Team} team
	 */
	moveInstance(team) {
		if (!this.#teams.hasValue(team)) return console.error("Team instance doesn't exist");

		const teamIndex = this.#teams.getKey(team);

		const animatedPosition = new Vector2();
		let animatedRotation = 0;

		const teamPosition = this.positions.get(team);
		const teamRotation = this.rotationsY.get(team);

		const previousPosition = teamPosition.clone();
		let currentRotationY = teamRotation.value;

		const nextPosition = new Vector2(team.position.x + 0.5, team.position.y + 0.5);

		const direction = nextPosition.clone().sub(previousPosition).normalize();
		const targetRotationY = Math.atan2(-direction.x, direction.y);

		let rotationDiff = targetRotationY - currentRotationY;

		while (Math.abs(rotationDiff) > Math.PI) {
			if (rotationDiff > Math.PI) currentRotationY += 2 * Math.PI;
			else currentRotationY -= 2 * Math.PI;

			rotationDiff = targetRotationY - currentRotationY;
		}

		const nextRotationY = currentRotationY + rotationDiff;

		const t = { positionProgress: 0, animationProgress: 0, rotationProgress: 0 };

		let animationProgressTarget = this.#animationsSteps.jump;
		let animationDuration = 1.5;
		let hasWonMedal = false;
		if (this.#justWonMedalTeams.has(team)) {
			hasWonMedal = true;
			this.#justWonMedalTeams.delete(team);
			animationProgressTarget = this.#animationsSteps.medal;
			animationDuration += 1;
		}

		const tl = gsap.timeline({
			onUpdate: () => {
				animatedPosition.lerpVectors(previousPosition, nextPosition, t.positionProgress);
				animatedRotation = lerp(currentRotationY, nextRotationY, t.rotationProgress);

				teamPosition.set(animatedPosition.x, animatedPosition.y);
				teamRotation.value = animatedRotation;

				this.instancedTeams.moveInstanceUpdate({ teamIndex, animatedPosition, animatedRotation, animationProgress: t.animationProgress });
				this.instancedFlames.moveInstanceUpdate({ teamIndex, animatedPosition, animatedRotation, animationProgress: t.animationProgress });
				this.instancedFlags.moveInstanceUpdate({ teamIndex, animatedPosition });
				this.instancedReactMoji.moveInstanceUpdate({ teamIndex, animatedPosition });

				if ((app.game.currentTeam.iso = team.iso)) this.#raycastCube.position.set(animatedPosition.x, 0, animatedPosition.y);

				app.sound.setParams(`playerRotation-${team.iso}`, { pos: { x: animatedPosition.x, y: 0, z: animatedPosition.y } });
				app.sound.setParams(`playerJump-${team.iso}`, { pos: { x: animatedPosition.x, y: 0, z: animatedPosition.y } });
				app.sound.setParams(`playerFall-${team.iso}`, { pos: { x: animatedPosition.x, y: 0, z: animatedPosition.y } });
				app.sound.setParams(`playerCollect-${team.iso}`, { pos: { x: animatedPosition.x, y: 0, z: animatedPosition.y } });
			},
		});

		const shouldRotate = Math.abs(nextRotationY - currentRotationY) > 0.01;

		if (shouldRotate) {
			tl.add(() => app.sound.play(`playerRotation-${team.iso}`), 0);
			tl.to(t, { rotationProgress: 1, ease: 'power3.inOut', duration: 0.6 }, 0);
		}

		tl.to(t, { animationProgress: animationProgressTarget, ease: 'linear', duration: animationDuration }, shouldRotate ? '>-.5' : 0);

		tl.add(() => app.sound.play(`playerJump-${team.iso}`), '<.7');
		tl.to(t, { positionProgress: 1, ease: 'power3.inOut', duration: 0.6 }, '<');
		tl.add(() => app.sound.play(`playerFall-${team.iso}`), '>+.15');
		if (hasWonMedal) tl.add(() => app.sound.play(`playerCollect-${team.iso}`), '>');
	}

	/**
	 *
	 * @param {import('@Game/Team').Team} team
	 */
	collectMedal(team) {
		if (!this.#teams.hasValue(team)) return console.error("Team instance doesn't exist");

		this.#justWonMedalTeams.add(team);
	}

	#onPointerDown = ({ webgl }) => {
		this.#raycaster.setFromCamera(webgl, app.webgl.camera);
		const intersects = this.#raycaster.intersectObject(this.#raycastCube);
		if (intersects.length > 0) app.webgl.camera.focusPlayer = true;
	};

	dispose() {
		this.instancedFlags.dispose();
		this.instancedFlames.dispose();
		this.instancedTeams.dispose();
		this.instancedReactMoji.dispose();
	}

	get #count() {
		return this.instancedTeams.count;
	}
}

export { TeamsWrapper };
