attribute vec2 uv;
attribute vec3 position;

uniform mat4 modelViewMatrix, projectionMatrix;

varying vec2 vUv;

void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.);

  gl_Position = projectionMatrix * mvPosition;

  vUv = uv;
}
