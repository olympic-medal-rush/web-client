attribute vec3 position;
attribute vec2 uv;

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;
uniform float uTime;

varying vec2 vUv;
varying float vDepth;

void main() {
  vec3 newPos = position;
  vUv = uv;
  newPos.y += sin(uTime * 0.005 + vUv.x) * 0.12 * position.x;
  vDepth = newPos.y;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.);
}