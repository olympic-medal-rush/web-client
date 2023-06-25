precision highp float;

uniform sampler2D tData, tDynamicShadows, tStaticShadows, tPathFinding;
uniform sampler2D tNoise, tGrain;
uniform vec3 uWaterColor, uGrassColor, uPathColor, uGroundColor, uFogColor;
uniform vec3 uLightPosition;
uniform float uZoom;

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

  vec2 seamlessUv = vUv * 100.;

  vec2 gameUv = (vUv - .5) * GRID_SIZE_FACTOR + .5;

  vec2 rectMin = vec2(0., 0.); 
  vec2 rectMax = vec2(1., 1.);
  float mask = step(gameUv.x, 1.) * step(0., gameUv.x) * step(gameUv.y, 1.) * step(0., gameUv.y);

	// r: rock, g: nothing, b: water, grass if 0
  vec3 seamlessData = texture2D(tData, vUv).rgb;

  float grain = texture2D(tGrain, vUv * 20.).r;
  float noise = texture2D(tNoise, vUv * 5.).r * texture2D(tNoise, vUv * 20.).r;

  vec3 grassColor = uGrassColor + grain * .05 - noise * .1 - smoothstep(.1, .0, grain) * .2;;
  vec3 pathColor = uPathColor + grain * .1 + smoothstep(.9, 1., grain) * .2;
  vec3 sandColorColor = uGroundColor;

  vec3 final = mix(grassColor, pathColor, seamlessData.r);
  final = mix(final, sandColorColor, seamlessData.g);
  final = mix(final, uWaterColor, seamlessData.b);

	// Circle grid pattern on normals
  vec2 gridUv = mod(gameUv * GRID_SIZE, 1.);
  float gridCircle = mask * smoothstep(CIRCLE_SIZE + CIRCLE_GRADIENT, CIRCLE_SIZE, length(gridUv - .5));
  normal.y += gridCircle * .7 * (1. - seamlessData.b);

	// Player shadows
  vec3 shadowCoord = vShadowCoord.xyz / vShadowCoord.w * 0.5 + 0.5;
  float depthShadowCoord = shadowCoord.z;

  vec2 depthMapUv = shadowCoord.xy;
 
  float depthShadowMap = readDepth(tDynamicShadows, depthMapUv) * readDepth(tStaticShadows, depthMapUv);

  float cosTheta = dot(normalize(uLightPosition), normal);
  float bias = 0.005 * tan(acos(cosTheta));
  bias = clamp(bias, 0.0, 0.01);

  float shadowFactor = step(depthShadowCoord - bias, depthShadowMap) * smoothstep(.3, .2, length(vUv - .5));

  float difLight = max(0.0, cosTheta);
  float shading = shadowFactor * difLight;

  float pathFindingData = texture2D(tPathFinding, gameUv).r * mask;

	// Final shading
  final = mix(final - .02 * (1. - gridCircle), final + .05, shading);
  final = mix(final, final + .3, pathFindingData * (gridCircle));

  // FOG
  final = mix(uFogColor, final, smoothstep(.5, .3, length(vUv - .5)));

  gl_FragColor = vec4(final, 1.);

}
