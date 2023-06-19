import { app } from '@/App';
import { state } from '@/State';
import flagColors from '@jsons/flag_colors.json';
import { frame_count as frameCount, max_value as maxValue, min_value as minValue, steps } from '@jsons/vat.json';
import { gsap } from 'gsap';
import { BufferGeometry, Color, LinearFilter, LinearSRGBColorSpace, Mesh, RepeatWrapping } from 'three';
import { TeamsMaterial } from '@Webgl/Materials/Teams/material';
import { MATERIALS } from '@utils/config';
import { globalUniforms } from '@utils/globalUniforms';
import { Flames } from './Flames';

class Player extends Mesh {
	#animationsSteps = {
		jump: 0,
		medal: 0,
	};
	#updateTl;
	constructor(model, teamIso) {
		super();
		state.register(this);

		const totalFrames = frameCount;
		this.#animationsSteps.jump = steps[1] / totalFrames;
		this.#animationsSteps.medal = 1;

		this.commonUniforms = {
			uAnimationProgress: { value: 0 },
		};

		this.geometry = this.#createGeometry({ baseGeometry: model.getObjectByName('player').geometry });
		this.material = this.#createMaterial(teamIso);

		this.flames = new Flames({ commonUniforms: this.commonUniforms });
		this.add(this.flames);

		app.debug?.mapping.add(this.material, 'TeamsMaterial');
	}

	#createGeometry({ baseGeometry }) {
		const geometry = new BufferGeometry();

		geometry.index = baseGeometry.index;
		geometry.setAttribute('position', baseGeometry.getAttribute('position'));
		geometry.setAttribute('uv', baseGeometry.getAttribute('uv'));
		geometry.setAttribute('aVertexID', baseGeometry.getAttribute('_vertexid'));

		return geometry;
	}

	#createMaterial(teamIso) {
		const [positionOffsets, normal, metalnessMap, aoMap, noise] = app.core.assetsManager.get('playerPositionOffsets', 'playerNormal', 'playerMetalness', 'playerAo', 'noise');
		positionOffsets.flipY = normal.flipY = aoMap.flipY = metalnessMap.flipY = false;
		positionOffsets.generateMipmaps = normal.generateMipmaps = aoMap.generateMipmaps = metalnessMap.generateMipmaps = false;
		positionOffsets.magFilter = positionOffsets.minFilter = LinearFilter;
		noise.wrapS = noise.wrapT = RepeatWrapping;

		const { color1, color2, color3 } = this.#getTeamColors(teamIso);

		const material = new TeamsMaterial({
			uniforms: {
				// globals
				uTime: globalUniforms.uTime,
				uEmissiveOnly: globalUniforms.uEmissiveOnly,
				...app.webgl.scene.commonShadowUniforms,
				...app.webgl.scene.staticShadowUniforms,
				...this.commonUniforms,

				uGold: { value: MATERIALS.teams.gold },
				uAoMapIntensity: { value: MATERIALS.teams.aoMapIntensity },
				uEnvMapIntensity: { value: MATERIALS.teams.envMapIntensity },

				uRoughness: { value: MATERIALS.teams.roughness },
				uMetalness: { value: MATERIALS.teams.metalness },

				tPositionOffsets: { value: positionOffsets },
				tNormal: { value: normal },

				tNoise: { value: noise },
				tGrain: { value: app.tools.noise.texture },

				tMetalnessMap: { value: metalnessMap },
				tAoMap: { value: aoMap },
				tEnvMap: { value: app.webgl.scene.environment },

				uColor1: { value: color1 },
				uColor2: { value: color2 },
				uColor3: { value: color3 },
			},
			defines: {
				...app.webgl.scene.environment.userData,
				NEAR: `${app.webgl.scene.shadowCamera.near}.`,
				FAR: `${app.webgl.scene.shadowCamera.far}.`,
				MIN_OFFSET: `${minValue}`,
				MAX_OFFSET: `${maxValue}`,
			},
		});

		return material;
	}

	#getTeamColors(iso = 'NONE') {
		const colors = flagColors[iso];
		const color1 = new Color().setStyle(colors[0], LinearSRGBColorSpace);
		const color2 = new Color().setStyle(colors[1] || colors[0], LinearSRGBColorSpace);
		const color3 = new Color().setStyle(colors[2] || colors[1] || colors[0], LinearSRGBColorSpace);

		return { color1, color2, color3 };
	}

	updateISO(iso) {
		const { color1, color2, color3 } = this.#getTeamColors(iso);

		this.#updateTl?.kill();
		const tl = (this.#updateTl = gsap.timeline());

		tl.to(this.rotation, { y: `+=${Math.PI * 2}`, duration: 0.5, ease: 'power3.inOut' }, 0);
		tl.to(this.uniforms.uColor1.value, { r: color1.r, g: color1.g, b: color1.b, duration: 0.5, ease: 'linear' }, 0);
		tl.to(this.uniforms.uColor2.value, { r: color2.r, g: color2.g, b: color2.b, duration: 0.5, ease: 'linear' }, 0);
		tl.to(this.uniforms.uColor3.value, { r: color3.r, g: color3.g, b: color3.b, duration: 0.5, ease: 'linear' }, 0);
		tl.fromTo(this.uniforms.uAnimationProgress, { value: this.#animationsSteps.jump }, { value: 1, duration: 1, ease: 'linear' }, 0);
	}

	dispose() {
		this.geometry.dispose();
		this.material.dispose();
	}

	get uniforms() {
		return this.material.uniforms;
	}
}

export { Player };
