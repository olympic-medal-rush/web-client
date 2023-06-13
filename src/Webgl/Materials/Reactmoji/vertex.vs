attribute vec3 position;
attribute vec2 uv;
attribute float aSize;
attribute float aSpeed;
attribute vec2 aOffset;
attribute float aPlacing;

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;
uniform float uTime;
uniform float uElevation;
uniform float uGlobalSpead;

varying vec2 vOffset;
varying float vOpacity;

#define UV_Scale vec2(51. / 128., 52. / 256.)

void main() {

  vec2 offset = uv + .5;
  offset *= UV_Scale;
  offset += aOffset - .5 * UV_Scale;

  vOffset = offset;
  vec3 pos = position;

  // Update size
  float size = smoothstep(0., 0.5 + aSize * 0.5, fract(-uTime * aSpeed * uGlobalSpead)) * aSize;
  pos *= size;

  // Update pos
  pos *= -1.;
  pos.y += fract(uTime * aSpeed * uGlobalSpead) * uElevation;

  vOpacity = 1. - (pos.y - aSize * 1.5);

  pos.x += aPlacing;
  pos.z += aPlacing * 0.3;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
}