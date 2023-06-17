precision highp float;

uniform sampler2D tData, tDynamicShadows, tStaticShadows, tPathFinding;
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

void main() {
  vec3 normal = vNormal;

	// Bump deformation
  vec2 seamlessUv = vUv * 100.;

  vec3 seamless1 = texture2D(tSeamless1, seamlessUv).rgb;
  vec3 seamless2 = texture2D(tSeamless2, seamlessUv).rgb;
  vec3 seamless3 = texture2D(tSeamless3, seamlessUv).rgb;

	// r: grass, g: sand, b: rock, water if 0
  vec3 seamlessData = texture2D(tData, vUv).rgb;

  float pathFindingData = texture2D(tPathFinding, vUv).r;

	// Circle grid pattern on normals
  vec2 gridUv = mod(vUv * uSize, 1.);
  float gridCircle = smoothstep(CIRCLE_SIZE, CIRCLE_SIZE + CIRCLE_GRADIENT, length(gridUv - .5));
  normal.y -= gridCircle * .4;

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
  final = mix(final, final + .3, pathFindingData * (1. - gridCircle));

  gl_FragColor = vec4(final, 1.);

}
