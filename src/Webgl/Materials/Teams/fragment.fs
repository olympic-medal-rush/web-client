precision highp float;

uniform float uEmissiveOnly, uAoMapIntensity, uEnvMapIntensity, uRoughness, uMetalness;
uniform vec3 uGold;
uniform mat4 viewMatrix;
uniform sampler2D tNoise,tGrain;
uniform sampler2D tMetalnessMap, tAoMap, tEnvMap;

varying float vAnimationProgress;
varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal, vEyeToSurfaceDir;
varying vec3 vColor1, vColor2, vColor3;

// SHADOWS
#ifdef USE_SHADOWS
	uniform vec3 uLightPosition;
	uniform sampler2D tStaticShadows;

	varying vec4 vShadowCoord;

	#include <packing>

	float readDepth(sampler2D depthSampler, vec2 coord) {
		float fragCoordZ = texture2D(depthSampler, coord).x;
		float viewZ = perspectiveDepthToViewZ(fragCoordZ, NEAR, FAR);
		return viewZToOrthographicDepth(viewZ, NEAR, FAR);
	}

#endif

#include ../Global/chunks/saturation.glsl
#include ../Global/chunks/envmap_pars_fragment.glsl

void main() {
	float metalnessMap = texture2D(tMetalnessMap, vUv).r;
	float metalness = uMetalness * metalnessMap;
	float roughness = (1. - metalnessMap) * uRoughness;

	float face = step(.001, smoothstep(0.51, .5, abs(vPosition.y - 1.6)) * metalness);
	float gold = step(.001, metalness * (1. - face * 2.));
	float body = 1. - (face + gold);

	vec3 normal = vNormal;

	// SHADOWS
	#ifdef USE_SHADOWS
		vec3 shadowCoord = vShadowCoord.xyz / vShadowCoord.w * 0.5 + 0.5;
		float depthShadowCoord = shadowCoord.z;

		vec2 depthMapUv = shadowCoord.xy;
		float depthShadowMap = readDepth(tStaticShadows, depthMapUv);
		float cosTheta = dot(normalize(uLightPosition), normal);
		float bias = .005 * tan(acos(cosTheta));
		bias = clamp(bias, 0., .01);

		float shadowFactor = step(depthShadowCoord - bias, depthShadowMap);

		float difLight = max(.5, cosTheta);
		float shading = shadowFactor * difLight;
	#endif


	// GRADIENT NOISE
	float noise1 = texture2D(tNoise, vPosition.xy * 2.).r + texture2D(tNoise, vPosition.xy * .5).g;
	noise1 *= .5;
	

	// FLAG COLORS
	vec3 color1 = vColor1;
	vec3 color2 = vColor2;
	vec3 color3 = vColor3;

	vec3 diffuse = mix(color1, mix(color2, mix(color3, color2, noise1), smoothstep(.9 - noise1 * .1, .5 - noise1 * .1, vPosition.y + sin(vPosition.x * 20. - 10.) * .03)), smoothstep(1.8, .8, vPosition.y));
	

	diffuse = mix(diffuse, color3, face);
	diffuse = mix(diffuse, uGold, gold);
	diffuse -= texture2D(tGrain, vUv * 20.).r * body * smoothstep(2.5, 0., vPosition.y) * .1;

	// ENVMAP
	vec3 reflectVec = reflect(vEyeToSurfaceDir, normal);

	reflectVec = normalize((vec4(reflectVec, 0.0) * viewMatrix).xyz);
	vec3 envMapColor = textureCubeUV(tEnvMap, reflectVec, roughness * (1. - metalness)).rgb * uEnvMapIntensity * smoothstep(2.7, 2., vPosition.y);

	diffuse.rgb += envMapColor * smoothstep(0., 1., length(envMapColor) - length(diffuse.rgb));
	diffuse.rgb -= (1. - envMapColor) * metalness;

	vec4 final = vec4(diffuse, 1.);

	float ao = texture2D(tAoMap, vUv).r;
	float animationProgressFade = smoothstep(0.0, 0.3, vAnimationProgress) * smoothstep(0.4, 0.3, vAnimationProgress) * smoothstep(0.5, 0.4, vAnimationProgress);
	ao = mix(ao, 1., animationProgressFade * smoothstep(1.5, 2., vPosition.y) * body);
	final.rgb *= mix(1., ao, uAoMapIntensity);

	// Shading
	#ifdef USE_SHADOWS
	final.rgb = mix(final.rgb - .1, final.rgb + .1, shading);
	#endif

	gl_FragColor = final;

	// Emissive
	gl_FragColor.rgb *= (1. - float(uEmissiveOnly));
	// #include <dithering_fragment>
}
