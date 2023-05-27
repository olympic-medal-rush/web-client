attribute vec3 position, normal;

attribute vec2 aInstancePosition;

uniform mat4 modelViewMatrix, projectionMatrix;

varying vec3 vNormal;

void main() {
  vNormal = normalize(normal);

  vec3 instancePosition = vec3(aInstancePosition.x, 0., aInstancePosition.y);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position + instancePosition, 1.);
}
