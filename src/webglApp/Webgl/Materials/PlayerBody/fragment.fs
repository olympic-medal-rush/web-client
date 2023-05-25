precision highp float;

uniform float uAoMapIntensity;
uniform bool uShadowOnly, uEmissiveOnly;
uniform vec3 uColor1, uColor2, uColor3, uLightPosition;
uniform sampler2D tAoMap, tNoise, tStaticShadows;

varying vec2 vUv, vUv2;
varying vec3 vEyeToSurfaceDir, vNormal, vPosition;
varying vec4 vShadowCoord;

#include ../Global/chunks/envmap_pars_fragment.glsl
#include ../Global/chunks/saturation.glsl

#include <packing>
#include <dithering_pars_fragment>

float readDepth(sampler2D depthSampler, vec2 coord) {
	float fragCoordZ = texture2D(depthSampler, coord).x;
	float viewZ = perspectiveDepthToViewZ(fragCoordZ, NEAR, FAR);
	return viewZToOrthographicDepth(viewZ, NEAR, FAR);
}

void main() {
	vec3 normal = vNormal;

	// Player shadows
	vec3 shadowCoord = vShadowCoord.xyz / vShadowCoord.w * 0.5 + 0.5;
	float depthShadowCoord = shadowCoord.z;

	vec2 depthMapUv = shadowCoord.xy;
	float depthShadowMap = readDepth(tStaticShadows, depthMapUv);

	float cosTheta = dot(normalize(uLightPosition), normal);
	float bias = 0.005 * tan(acos(cosTheta));
	bias = clamp(bias, 0.0, 0.01);

	float shadowFactor = step(depthShadowCoord - bias, depthShadowMap);

	float difLight = max(.5, cosTheta);
	float shading = shadowFactor * difLight;

	float noise1 = (texture2D(tNoise, vPosition.xy * .1).r + texture2D(tNoise, vPosition.yz * .1).r) * 1.;
	float noise2 = (smoothstep(.3, 1., texture2D(tNoise, vPosition.xy * 5.).r) + smoothstep(.3, 1., texture2D(tNoise, vPosition.yz * 5.).r)) * .5;

	// Color
	vec3 color1 = adjustSaturation(clamp(uColor1, vec3(.1), vec3(1.)), .7);
	vec3 color2 = adjustSaturation(clamp(uColor2, vec3(.1), vec3(1.)), .7);
	vec3 color3 = adjustSaturation(clamp(uColor3, vec3(.1), vec3(1.)), .7);

	vec3 diffuse = mix(color1, color2, smoothstep(2. + noise1 * .1, .5 + noise1 * .1, vPosition.y));

	vec4 final = vec4(diffuse, 1.);

	vec3 aoMap = texture2D(tAoMap, vUv).rgb;
	final.rgb *= mix(vec3(1.), aoMap, uAoMapIntensity);

	// Shading
	final.rgb = mix(final.rgb - .1, final.rgb + .1, shading);

	gl_FragColor = final;

	// Emissive
	gl_FragColor.rgb *= (1. - float(uEmissiveOnly));
	#include <dithering_fragment>
}
