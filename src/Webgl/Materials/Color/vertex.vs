attribute vec3 position;

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;

varying float vDepth;

void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.);

  vDepth = smoothstep(NEAR, FAR, -mvPosition.z);

  gl_Position = projectionMatrix * mvPosition;
}
