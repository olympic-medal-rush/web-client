attribute vec3 position, normal;
attribute vec2 uv;

uniform mat4 projectionMatrix, modelViewMatrix;

varying vec2 vUv;
varying vec3 vEyeToSurfaceDir, vNormal;

#include ../Global/chunks/skinning_pars_vertex.glsl

void main() {
  vUv = uv;

  vec3 objectNormal = normal;
  vec3 transformed = position;

  // Need objectNormal and transformed
  #include ../Global/chunks/skinning_vertex.glsl

  vNormal = normalize(modelViewMatrix * vec4(objectNormal, 0.0)).xyz;

  vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.);
  vEyeToSurfaceDir = normalize(mvPosition.xyz);

  gl_Position = projectionMatrix * mvPosition;
}
