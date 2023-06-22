attribute vec3 position;

uniform mat4 modelViewMatrix, projectionMatrix;

void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.);

  gl_Position = projectionMatrix * mvPosition;
}
