attribute vec3 position, normal;

attribute vec2 aInstancePosition;
attribute float aMedalType;

uniform float uTime;
uniform mat4 modelViewMatrix, projectionMatrix;

varying float vMedalType;

#include ../Global/chunks/rotation.glsl

void main() {
  vMedalType = aMedalType;

  vec4 instancePosition = vec4(position, 1.);
  instancePosition *= rotation3d(vec3(0., 1., 0.), uTime * .005);
  instancePosition.xz += aInstancePosition;

  gl_Position = projectionMatrix * modelViewMatrix * instancePosition;
}
