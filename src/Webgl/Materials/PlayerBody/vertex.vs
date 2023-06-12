attribute vec3 position, normal;
attribute vec2 uv, uv2;

uniform mat4 projectionMatrix, modelMatrix, viewMatrix;

uniform mat4 uShadowProjectionMatrix, uShadowMatrixInverse;

varying vec2 vUv, vUv2;
varying vec3 vEyeToSurfaceDir, vNormal, vPosition;
varying vec4 vShadowCoord;

#include ../Global/chunks/skinning_pars_vertex.glsl

void main() {
  vUv = uv;
  vUv2 = uv2;

  vec3 objectNormal = normal;
  vec3 transformed = position;

  // Need objectNormal and transformed
  #include ../Global/chunks/skinning_vertex.glsl

  vec4 mvPosition = viewMatrix * modelMatrix * vec4(transformed, 1.);

  gl_Position = projectionMatrix * mvPosition;

  vNormal = normalize(viewMatrix * modelMatrix * vec4(objectNormal, 0.0)).xyz;
  vPosition = transformed;
  vEyeToSurfaceDir = normalize(mvPosition.xyz);
  vShadowCoord = uShadowProjectionMatrix * uShadowMatrixInverse * modelMatrix * vec4(transformed, 1.);
}
