attribute vec2 uv;
attribute vec3 position, normal;

attribute vec2 aInstancePosition;
attribute float aMedalType;

uniform float uTime;
uniform mat4 modelViewMatrix, projectionMatrix;
uniform sampler2D tMedalHeights;

varying float vMedalType;
varying float vDisplacement;
varying vec2 vUv;
varying vec3 vViewPosition;
varying vec3 vNormal;

#include ../Global/chunks/rotation.glsl

void main() {
  vec3 objectNormal = normal;
  
  vec4 instancePosition = vec4(position, 1.);

  instancePosition *= rotation3d(vec3(0., 1., 0.), uTime * .004 * (aMedalType + 1.));
  instancePosition.y += (sin(uTime * .005 * (aMedalType + 1.)) + 1.) * .1;
  instancePosition.xz += aInstancePosition;

  vec4 mvPosition = modelViewMatrix * instancePosition;

  gl_Position = projectionMatrix * mvPosition;

  vViewPosition = - mvPosition.xyz;
  vMedalType = aMedalType;
  vNormal = normalize(objectNormal);
  vUv = uv;
}
