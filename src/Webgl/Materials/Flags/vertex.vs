attribute vec3 position;
attribute vec2 uv;
attribute vec2 aInstancePosition;
attribute vec2 aOffset;
attribute float aRatio;
attribute float aIsMyTeam;

uniform float uTime;
uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;

varying vec2 vUv;
varying vec2 vOffset;
varying float vIsMyTeam;

void main() {
  vUv = uv;
  vIsMyTeam = aIsMyTeam;

  vec2 offset = uv + .5;
  offset *= UV_SCALE;
  offset += aOffset - .5 * UV_SCALE;
  vOffset = offset;

  vec3 pos = position;
  pos.xz += aInstancePosition;
  pos.y += vIsMyTeam * .1;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
}