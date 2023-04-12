attribute vec3 position;
attribute vec2 uv;
attribute vec3 aColor;
attribute float aSize;
attribute float aSpeed;

uniform mat4 projectionMatrix, modelViewMatrix;
uniform float uTime;

varying vec2 vUv;
varying vec3 vColor;

void main() {
  vUv = uv;
  vColor = aColor;

  vec3 pos = position;
  // Update size
  pos *= aSize;

  // Update pos
  pos.y += clamp(sin(uTime * aSpeed), 0., 1.);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
}
