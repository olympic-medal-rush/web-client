precision highp float;

uniform sampler2D tData, tDynamicShadows, tStaticShadows;
uniform vec3 uFloorColor, uGridColor, uLightPosition;
uniform float uSize, uZoom;

uniform sampler2D tSeamless1;
uniform sampler2D tSeamless2;
uniform sampler2D tSeamless3;
// uniform sampler2D tSeamless4;

varying vec2 vUv;
varying vec3 vNormal, vViewPosition;
varying vec4 vShadowCoord;

#include <packing>

#define CIRCLE_SIZE .4
#define CIRCLE_GRADIENT .1

float readDepth(sampler2D depthSampler, vec2 coord) {
	float fragCoordZ = texture2D(depthSampler, coord).x;
	float viewZ = perspectiveDepthToViewZ(fragCoordZ, NEAR, FAR);
	return viewZToOrthographicDepth(viewZ, NEAR, FAR);
}

void main() {
	vec3 normal = vNormal;

	// Circle grid pattern on normals
	vec2 gridUv = mod(vUv * uSize, 1.);
	float gridCircle = smoothstep(CIRCLE_SIZE, CIRCLE_SIZE + CIRCLE_GRADIENT, length(gridUv - .5)) * .4;
	normal.y -= gridCircle;

	// Player shadows
	vec3 shadowCoord = vShadowCoord.xyz / vShadowCoord.w * 0.5 + 0.5;
	float depthShadowCoord = shadowCoord.z;

	vec2 depthMapUv = shadowCoord.xy;
	float depthShadowMap = readDepth(tDynamicShadows, depthMapUv) * readDepth(tStaticShadows, depthMapUv);

	float cosTheta = dot(normalize(uLightPosition), normal);
	float bias = 0.005 * tan(acos(cosTheta));
	bias = clamp(bias, 0.0, 0.01);

	float shadowFactor = step(depthShadowCoord - bias, depthShadowMap);

	// bvec4 inFrustumVec = bvec4(shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0);
	// bool inFrustum = all(inFrustumVec);

	// bvec2 frustumTestVec = bvec2(inFrustum, shadowCoord.z <= 1.0);
	// bool frustumTest = all(frustumTestVec);

	// if(frustumTest == false)
	// 	shadowFactor = 1.0;

	float difLight = max(0.0, cosTheta);
	float shading = shadowFactor * difLight;

	// Texture samplings
	vec3 data = texture2D(tData, vUv).rgb;

	vec3 t1 = texture2D(tSeamless1, vUv * 100.).rgb;
	vec3 t2 = texture2D(tSeamless2, vUv * 100.).rgb;
	vec3 t3 = texture2D(tSeamless3, vUv * 100.).rgb;
	// vec3 t4 = texture2D(tSeamless4, vUv * 100.).rgb;

	vec3 mix1 = mix(uFloorColor, t1, data.r);
	vec3 mix2 = mix(mix1, t2, data.g);
	vec3 mix3 = mix(mix2, t3, data.b);

	vec3 gMix = mix(mix1, mix2, data.g);
	vec3 final = mix(gMix, mix3, data.b);

	// Final shading
	final = mix(final - .1, final + .1, shading);

	gl_FragColor = vec4(final, 1.);
}
