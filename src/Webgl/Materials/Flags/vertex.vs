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

#define UV_Scale vec2(128. / 2048., 128. / 2048.)

void main() {
  vUv = uv;
  vIsMyTeam = aIsMyTeam;

  vec2 offset = uv + .5;
  offset *= UV_Scale;
  offset += aOffset - .5 * UV_Scale;
  vOffset = offset;

  vec3 pos = position;
  pos.xz += aInstancePosition;
  pos.y += 2.6 + vIsMyTeam * .1;

  // Rotate
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
}