import { app } from '@/App';
import { frame_count as frameCount, max_value as maxValue, min_value as minValue, steps } from '@jsons/vat.json';
import { gsap } from 'gsap';
import { BoxGeometry, Color, InstancedBufferGeometry, InstancedInterleavedBuffer, InterleavedBufferAttribute, Mesh, StaticDrawUsage, StreamDrawUsage, Vector3 } from 'three';
import { randFloat } from 'three/src/math/MathUtils';
import { lerp } from 'three/src/math/MathUtils.js';
import { FlamesMaterial } from '@Webgl/Materials/Flames/material';
import { Bimap } from '@utils/BiMap';
import { globalUniforms } from '@utils/globalUniforms';

class InstancedFlames extends Mesh {
	#teams;
	/** @type {Set<import('@Game/Team').Team>} */
	#justWonMedalTeams = new Set();
	/** @type {Record<string, import('three').InterleavedBufferAttribute>} */
	#streamAttributes = {
		instancePosition: null,
		animationProgress: null,
		rotationY: null,
	};
	#staticAttributes = {
		globalSpeed: null,
		globalElevation: null,
		globalRadius: null,
		color: null,
	};
	/** @type {import('three').InstancedInterleavedBuffer} */
	#particlesInstancedInterleaveBuffer;
	/** @type {import('three').InstancedInterleavedBuffer} */
	#staticInstancedInterleaveBuffer;
	/** @type {import('three').InstancedInterleavedBuffer} */
	#streamInstancedInterleaveBuffer;
	#particleInstancesStride = 0;
	#staticInstancesStride = 0;
	#streamInstancesStride = 0;

	#animationsSteps = {
		jump: 0,
		medal: 0,
	};

	constructor({ teams = [], maxCount = 210, particlesCount = 100 }) {
		super();

		this.#teams = new Bimap(teams.map((team, i) => [i, team]));

		this.maxCount = maxCount;
		this.particlesCount = particlesCount;

		const totalFrames = frameCount;
		this.#animationsSteps.jump = steps[1] / totalFrames;
		this.#animationsSteps.medal = 1;

		this.geometry = this.#createGeometry();
		this.material = this.#createMaterial();

		this.#count = teams.length;
		this.frustumCulled = false;

		app.debug?.mapping.add(this.material, 'FlamesMaterial');
	}

	#createGeometry() {
		const geometry = new InstancedBufferGeometry();
		geometry.instanceCount = this.particlesCount * this.maxCount;
		const cube = new BoxGeometry(1, 1, 1);

		geometry.index = cube.index;
		geometry.attributes = cube.attributes;

		this.#particleInstancesStride = 3;
		const particlesData = [];

		let increment = 0;

		// Common particles attributes
		for (let i = 0; i < geometry.instanceCount; i++) {
			const instancedIndexStride = i * this.#particleInstancesStride;
			increment = instancedIndexStride;

			// Add random size
			particlesData[increment++] = randFloat(0.05, 0.15);

			// Add random speed
			particlesData[increment++] = randFloat(0.0005, 0.001);

			// Add random angle to instances
			particlesData[increment++] = randFloat(0, 2 * Math.PI);
		}

		this.#particlesInstancedInterleaveBuffer = new InstancedInterleavedBuffer(new Float32Array(particlesData), this.#particleInstancesStride).setUsage(StaticDrawUsage);
		geometry.setAttribute('aSize', new InterleavedBufferAttribute(this.#particlesInstancedInterleaveBuffer, 1, 0, false));
		geometry.setAttribute('aSpeed', new InterleavedBufferAttribute(this.#particlesInstancedInterleaveBuffer, 1, 1, false));
		geometry.setAttribute('aRad', new InterleavedBufferAttribute(this.#particlesInstancedInterleaveBuffer, 1, 2, false));

		// Instances attributes
		this.#streamInstancesStride = 4;
		this.#staticInstancesStride = 6;

		const instanceStreamData = [];
		const instanceStaticData = [];

		let staticIncrement,
			streamIncrement = 0;

		const teamsArr = [...this.#teams.values()];

		for (let i = 0; i < this.maxCount; i++) {
			const staticInstancedIndexStride = i * this.#staticInstancesStride;
			staticIncrement = staticInstancedIndexStride;

			const streamInstancedIndexStride = i * this.#streamInstancesStride;
			streamIncrement = streamInstancedIndexStride;

			//// STREAM ATTRIBUTES
			// Instance position
			instanceStreamData[streamIncrement++] = teamsArr[i]?.position.x + 0.5 || 0;
			instanceStreamData[streamIncrement++] = teamsArr[i]?.position.y + 0.5 || 0;

			// Animation progress
			instanceStreamData[streamIncrement++] = 0;

			// RotationY
			instanceStreamData[streamIncrement++] = 0;

			//// STATIC ATTRIBUTES
			// speed
			instanceStaticData[staticIncrement++] = 1;

			// radius
			instanceStaticData[staticIncrement++] = 0.3;

			// elevation
			instanceStaticData[staticIncrement++] = 0.8;

			// color
			const color = new Color('orange');
			instanceStaticData[staticIncrement++] = color.r;
			instanceStaticData[staticIncrement++] = color.g;
			instanceStaticData[staticIncrement++] = color.b;
		}

		this.#streamInstancedInterleaveBuffer = new InstancedInterleavedBuffer(new Float32Array(instanceStreamData), this.#streamInstancesStride, this.particlesCount).setUsage(
			StreamDrawUsage,
		);
		this.#streamAttributes.instancePosition = new InterleavedBufferAttribute(this.#streamInstancedInterleaveBuffer, 2, 0, false);
		this.#streamAttributes.animationProgress = new InterleavedBufferAttribute(this.#streamInstancedInterleaveBuffer, 1, 2, false);
		this.#streamAttributes.rotationY = new InterleavedBufferAttribute(this.#streamInstancedInterleaveBuffer, 1, 3, false);

		geometry.setAttribute('aInstancePosition', this.#streamAttributes.instancePosition);
		geometry.setAttribute('aAnimationProgress', this.#streamAttributes.animationProgress);
		geometry.setAttribute('aRotationY', this.#streamAttributes.rotationY);

		this.#staticInstancedInterleaveBuffer = new InstancedInterleavedBuffer(new Float32Array(instanceStaticData), this.#staticInstancesStride, this.particlesCount).setUsage(
			StaticDrawUsage,
		);

		this.#staticAttributes.globalSpeed = new InterleavedBufferAttribute(this.#staticInstancedInterleaveBuffer, 1, 0, false);
		this.#staticAttributes.globalRadius = new InterleavedBufferAttribute(this.#staticInstancedInterleaveBuffer, 1, 1, false);
		this.#staticAttributes.globalElevation = new InterleavedBufferAttribute(this.#staticInstancedInterleaveBuffer, 1, 2, false);
		this.#staticAttributes.color = new InterleavedBufferAttribute(this.#staticInstancedInterleaveBuffer, 3, 3, false);

		geometry.setAttribute('aGlobalSpeed', this.#staticAttributes.globalSpeed);
		geometry.setAttribute('aGlobalRadius', this.#staticAttributes.globalRadius);
		geometry.setAttribute('aGlobalElevation', this.#staticAttributes.globalElevation);
		geometry.setAttribute('aColor', this.#staticAttributes.color);

		return geometry;
	}

	#createMaterial() {
		const material = new FlamesMaterial({
			uniforms: {
				uTime: globalUniforms.uTime,
				uEmissiveOnly: globalUniforms.uEmissiveOnly,

				tAnimation: { value: app.webgl.scene.topHeadAnimationTexture },
			},
			defines: {
				USE_INSTANCING: true,
				MIN_OFFSET: `${minValue}`,
				MAX_OFFSET: `${maxValue}`,
			},
		});

		return material;
	}

	/**
	 *
	 * @param {import('@Game/Team').Team} team
	 */
	addInstance(team) {
		if (this.#teams.hasValue(team)) return console.error('Team instance already exists');
		this.#teams.add(this.#count, team);

		this.#streamAttributes.instancePosition.setXY(this.#count, team.position.x + 0.5, team.position.y + 0.5);

		this.#count++;

		this.#streamInstancedInterleaveBuffer.updateRange.offset = (this.#count - 1) * this.#streamInstancesStride;
		this.#streamInstancedInterleaveBuffer.updateRange.count = this.#streamInstancesStride;
		this.#streamInstancedInterleaveBuffer.needsUpdate = true;
	}

	/**
	 *
	 * @param {import('@Game/Team').Team} team
	 */
	moveInstance(team) {
		if (!this.#teams.hasValue(team)) return console.error("Team instance doesn't exist");

		const teamIndex = this.#teams.getKey(team);

		const animatedPosition = new Vector3();
		const currentPosition = new Vector3(this.#streamAttributes.instancePosition.getX(teamIndex), 0, this.#streamAttributes.instancePosition.getY(teamIndex));
		const nextPosition = new Vector3(team.position.x + 0.5, 0, team.position.y + 0.5);
		let currentRotationY = this.#streamAttributes.rotationY.getX(teamIndex);

		const direction = nextPosition.clone().sub(currentPosition).normalize();
		const targetRotationY = Math.atan2(-direction.x, direction.z);

		let rotationDiff = targetRotationY - currentRotationY;

		while (Math.abs(rotationDiff) > Math.PI) {
			if (rotationDiff > Math.PI) {
				currentRotationY += 2 * Math.PI;
			} else {
				currentRotationY -= 2 * Math.PI;
			}
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
				animatedPosition.lerpVectors(currentPosition, nextPosition, t.positionProgress);

				this.#streamAttributes.instancePosition.setXY(teamIndex, animatedPosition.x, animatedPosition.z);
				this.#streamAttributes.animationProgress.setX(teamIndex, t.animationProgress);
				this.#streamAttributes.rotationY.setX(teamIndex, lerp(currentRotationY, nextRotationY, t.rotationProgress));

				this.#streamInstancedInterleaveBuffer.updateRange.offset = teamIndex * this.#streamInstancesStride;
				this.#streamInstancedInterleaveBuffer.updateRange.count = this.#streamInstancesStride;
				this.#streamInstancedInterleaveBuffer.needsUpdate = true;
			},
		});
		const shouldRotate = Math.abs(nextRotationY - currentRotationY) > 0.01;

		if (shouldRotate) tl.to(t, { rotationProgress: 1, ease: 'power3.inOut', duration: 0.6 }, 0);
		tl.to(t, { animationProgress: animationProgressTarget, ease: 'linear', duration: animationDuration }, shouldRotate ? '>-.5' : 0);
		tl.to(t, { positionProgress: 1, ease: 'power3.inOut', duration: 0.6 }, '<.7');
	}

	set #count(value) {
		this.geometry.instanceCount = value * this.particlesCount;
		this.visible = value !== 0;
	}

	get #count() {
		return this.geometry.instanceCount / this.particlesCount;
	}
}

export { InstancedFlames };
