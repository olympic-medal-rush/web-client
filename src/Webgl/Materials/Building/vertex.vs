varying float vDepth;
varying vec2 vUv;
varying vec3 vNormal;

void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.);

  vNormal = normalize(normalMatrix * normal);
  vUv = uv;
  vDepth = smoothstep(NEAR, FAR, -mvPosition.z);

  gl_Position = projectionMatrix * mvPosition;
}
