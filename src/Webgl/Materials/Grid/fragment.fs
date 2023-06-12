precision highp float;

uniform sampler2D tData, tDynamicShadows, tStaticShadows;
uniform vec3 uFloorColor, uGridColor, uLightPosition;
uniform float uSize, uZoom;

uniform sampler2D tSeamless1, tSeamless2, tSeamless3;

varying vec2 vUv;
varying vec3 vNormal, vViewPosition;
varying vec4 vShadowCoord;

#include <packing>

#define CIRCLE_SIZE .4
#define CIRCLE_GRADIENT .07

float readDepth(sampler2D depthSampler, vec2 coord) {
	float fragCoordZ = texture2D(depthSampler, coord).x;
	float viewZ = perspectiveDepthToViewZ(fragCoordZ, NEAR, FAR);
	return viewZToOrthographicDepth(viewZ, NEAR, FAR);
}

// Returns height difference between current texel and neighbors (on both screen coordinates axes)
vec2 dHdxy_fwd(vec3 baseSample, sampler2D sampler, vec2 uv, float bumpScale) {
	vec2 dSTdx = dFdx(uv);
	vec2 dSTdy = dFdy(uv);

	float Hll = bumpScale * baseSample.r;
	float dBx = bumpScale * texture2D(sampler, uv + dSTdx).r - Hll;
	float dBy = bumpScale * texture2D(sampler, uv + dSTdy).r - Hll;

	return vec2(dBx, dBy);
}

vec3 perturbNormalArb(vec3 surf_pos, vec3 surf_norm, vec2 dHdxy) {
	vec3 vSigmaX = dFdx(surf_pos.xyz);
	vec3 vSigmaY = dFdy(surf_pos.xyz);
	vec3 vN = surf_norm;
	vec3 R1 = cross(vSigmaY, vN);
	vec3 R2 = cross(vN, vSigmaX);
	float fDet = dot(vSigmaX, R1);
	vec3 vGrad = sign(fDet) * (dHdxy.x * R1 + dHdxy.y * R2);
	return normalize(abs(fDet) * surf_norm - vGrad);
}

void main() {
	vec3 normal = vNormal;

	// Bump deformation
	vec2 seamlessUv = vUv * 100.;

	vec3 seamless1 = texture2D(tSeamless1, seamlessUv).rgb;
	vec3 seamless2 = texture2D(tSeamless2, seamlessUv).rgb;
	vec3 seamless3 = texture2D(tSeamless3, seamlessUv).rgb;

	// r: grass, g: sand, b: rock, water if 0
	vec3 seamlessData = texture2D(tData, vUv).rgb;

	// // Derivatives for bump
	// vec2 dSTdx = dFdx(seamlessUv);
	// vec2 dSTdy = dFdy(seamlessUv);
	// float bumpScale = 1.;

	// normal = perturbNormalArb(-vViewPosition, normal, dHdxy_fwd(seamless1, tSeamless1, seamlessUv, .5 *));

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

	vec3 mix1 = mix(uFloorColor, seamless1, seamlessData.r);
	vec3 mix2 = mix(mix1, seamless2, seamlessData.g);
	vec3 mix3 = mix(mix2, seamless3, seamlessData.b);

	vec3 gMix = mix(mix1, mix2, seamlessData.g);
	vec3 final = mix(gMix, mix3, seamlessData.b);

	// Final shading
	final = mix(final - .1, final + .1, shading);

	gl_FragColor = vec4(final, 1.);
}
