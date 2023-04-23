uniform mat4 uShadowProjectionMatrix, uShadowMatrixInverse;

varying vec2 vUv;
varying vec3 vNormal, vViewPosition;
varying vec4 vShadowCoord;

void main() {
  vUv = uv;
  vNormal = normal;

  vec3 pos = position;
  vec4 mvPosition = viewMatrix * modelMatrix * vec4(pos, 1.);

  gl_Position = projectionMatrix * mvPosition;

  vViewPosition = -mvPosition.xyz;
  vShadowCoord = uShadowProjectionMatrix * uShadowMatrixInverse * modelMatrix * vec4(pos, 1.);
}
