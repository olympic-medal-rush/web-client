import { app } from '@/App';
import { frame_count as frameCount, steps } from '@jsons/vat.json';
import { gsap } from 'gsap';
import { Vector2 } from 'three';
import { lerp } from 'three/src/math/MathUtils.js';
import { Bimap } from '@utils/BiMap';
import { InstancedFlags } from './InstancedFlags';
import { InstancedFlames } from './InstancedFlames';
import { InstancedTeams } from './InstancedTeams';

class TeamsWrapper {
	positions;

	#teams;
	#rotationsY;
	#animationsSteps = {
		jump: 0,
		medal: 0,
	};
	/** @type {Set<import('@Game/Team').Team>} */
	#justWonMedalTeams = new Set();

	constructor({ teams = [], maxCount = 210 } = {}) {
		this.#teams = new Bimap(teams.map((team, i) => [i, team]));
		this.positions = new Map(teams.map((team) => [team, team.position.clone().addScalar(0.5)]));
		this.#rotationsY = new Map(teams.map((team) => [team, { value: 0 }]));

		this.maxCount = maxCount;
		const totalFrames = frameCount;
		this.#animationsSteps.jump = steps[1] / totalFrames;
		this.#animationsSteps.medal = 1;

		this.instancedTeams = new InstancedTeams({ teams: this.#teams, model: app.core.assetsManager.get('player'), maxCount });
		this.instancedFlags = new InstancedFlags({ teams: this.#teams, maxCount });
		this.instancedFlames = new InstancedFlames({ teams: this.#teams, maxCount });
	}

	setIsMyTeam(team) {
		this.instancedFlags.setIsMyTeam(team);
	}

	/**
	 *
	 * @param {import('@Game/Team').Team} team
	 */
	addInstance(team) {
		if (this.#teams.hasValue(team)) return console.error('Team instance already exists');
		this.#teams.add(this.#count, team);
		this.positions.set(team, team.position.clone().addScalar(0.5));
		this.#rotationsY.set(team, { value: 0 });

		this.instancedTeams.addInstance(team);
		this.instancedFlames.addInstance(team);
		this.instancedFlags.addInstance(team);
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
		const teamRotation = this.#rotationsY.get(team);

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
		if (this.#justWonMedalTeams.has(team)) {
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
			},
		});

		const shouldRotate = Math.abs(nextRotationY - currentRotationY) > 0.01;

		if (shouldRotate) tl.to(t, { rotationProgress: 1, ease: 'power3.inOut', duration: 0.6 }, 0);
		tl.to(t, { animationProgress: animationProgressTarget, ease: 'linear', duration: animationDuration }, shouldRotate ? '>-.5' : 0);
		tl.to(t, { positionProgress: 1, ease: 'power3.inOut', duration: 0.6 }, '<.7');
	}

	/**
	 *
	 * @param {import('@Game/Team').Team} team
	 */
	collectMedal(team) {
		if (!this.#teams.hasValue(team)) return console.error("Team instance doesn't exist");

		this.#justWonMedalTeams.add(team);
	}

	get #count() {
		return this.instancedTeams.count;
	}
}

export { TeamsWrapper };
