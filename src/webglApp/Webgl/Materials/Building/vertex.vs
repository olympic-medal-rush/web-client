attribute vec3 position, normal;

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;
uniform mat3 normalMatrix;

varying vec3 vNormal;
varying float vDepth;

void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.);

  vNormal = normalize(normalMatrix * normal);
  vDepth = smoothstep(NEAR, FAR, -mvPosition.z);

  gl_Position = projectionMatrix * mvPosition;
}
