precision highp float;

uniform float uEmissiveOnly, uAoMapIntensity, uEnvMapIntensity, uRoughness, uMetalness;
uniform vec3 uLightPosition;
uniform vec3 uGold;
uniform mat4 viewMatrix;
uniform sampler2D tNoise, tStaticShadows, tMetalnessMap, tAoMap, tEnvMap;

varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal, vEyeToSurfaceDir;
varying vec3 vColor1, vColor2, vColor3;
varying vec4 vShadowCoord;

#include ../Global/chunks/saturation.glsl
#include ../Global/chunks/envmap_pars_fragment.glsl

#include <packing>
#include <dithering_pars_fragment>

float readDepth(sampler2D depthSampler, vec2 coord) {
	float fragCoordZ = texture2D(depthSampler, coord).x;
	float viewZ = perspectiveDepthToViewZ(fragCoordZ, NEAR, FAR);
	return viewZToOrthographicDepth(viewZ, NEAR, FAR);
}

void main() {
	float metalness = uMetalness;
	metalness = metalness * (texture2D(tMetalnessMap, vUv).r);

	float roughness = (1. - metalness) * uRoughness;

	vec3 normal = vNormal;

	// SHADOWS
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

	// GRADIENT NOISE
	float noise1 = (texture2D(tNoise, vPosition.xy * .1).r + texture2D(tNoise, vPosition.yz * .1).r) * 1.;
	float noise2 = (smoothstep(.3, 1., texture2D(tNoise, vPosition.xy * 5.).r) + smoothstep(.3, 1., texture2D(tNoise, vPosition.yz * 5.).r)) * .5;

	// FLAG COLORS
	// vec3 color1 = adjustSaturation(clamp(vColor1, vec3(.1), vec3(1.)), .7);
	// vec3 color2 = adjustSaturation(clamp(vColor2, vec3(.1), vec3(1.)), .7);
	// vec3 color3 = adjustSaturation(clamp(vColor3, vec3(.1), vec3(1.)), .7);
	vec3 color1 = vColor1;
	vec3 color2 = vColor2;
	vec3 color3 = vColor3;

	vec3 diffuse = mix(color1, color2, smoothstep(2. + noise1 * .1, .5 + noise1 * .1, vPosition.y));
	float face = step(.001, smoothstep(0.51, .5, abs(vPosition.y - 1.7)) * metalness);
	float gold = step(.001, metalness * (1. - face * 2.));

	diffuse = mix(diffuse, color3, face);
	diffuse = mix(diffuse, uGold, gold);

	// ENVMAP
	vec3 reflectVec = reflect(vEyeToSurfaceDir, normal);

	reflectVec = normalize((vec4(reflectVec, 0.0) * viewMatrix).xyz);
	vec3 envMapColor = textureCubeUV(tEnvMap, reflectVec, roughness * (1. - metalness)).rgb * uEnvMapIntensity;

	diffuse.rgb += envMapColor * smoothstep(0., 1., length(envMapColor) - length(diffuse.rgb));
	diffuse.rgb -= (1. - envMapColor) * metalness;

	vec4 final = vec4(diffuse, 1.);

	float ao = texture2D(tAoMap, vUv).r;
	final.rgb *= mix(vec3(1.), vec3(ao), uAoMapIntensity);

	// Shading
	final.rgb = mix(final.rgb - .1, final.rgb + .1, shading);

	gl_FragColor = final;
	// gl_FragColor = vec4(vec3(gold), 1.);

	// Emissive
	gl_FragColor.rgb *= (1. - float(uEmissiveOnly));
	#include <dithering_fragment>
}
