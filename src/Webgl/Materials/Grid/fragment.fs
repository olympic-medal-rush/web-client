precision highp float;

uniform sampler2D tData, tDynamicShadows, tStaticShadows, tPathFinding;
uniform sampler2D tNoise, tGrain;
uniform vec3 uWaterColor, uGrassColor, uFloorColor;
uniform vec3 uLightPosition;
uniform float uZoom;

// uniform sampler2D tSeamless1, tSeamless2, tSeamless3;

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
  vec3 seamlessData = texture2D(tData, gameUv).rgb;

  float grain = texture2D(tGrain, vUv * 30.).r;
  float noise = texture2D(tNoise, vUv * 5.).r * texture2D(tNoise, vUv * 20.).r;
  vec3 grass = uGrassColor + grain * .05 - noise * .1;

  vec3 mix1 = mix(grass, uFloorColor, seamlessData.r);
  vec3 mix2 = mix(mix1, uWaterColor, seamlessData.b * mask);
  
  vec3 final = mix2;
  
  

  float pathFindingData = texture2D(tPathFinding, gameUv).r * mask;

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

  float shadowFactor = step(depthShadowCoord - bias, depthShadowMap);

  float difLight = max(0.0, cosTheta);
  float shading = shadowFactor * difLight;


	// Final shading
  final = mix(final - .02, final + .05, shading);
  final = mix(final, final + .3, pathFindingData * (gridCircle));

  gl_FragColor = vec4(final, 1.);

}
