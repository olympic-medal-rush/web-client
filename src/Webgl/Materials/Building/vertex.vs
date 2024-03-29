attribute vec3 position, normal;
attribute vec2 uv, uv1;

#ifdef USE_INSTANCING
  attribute mat4 instanceMatrix;
#endif

uniform mat4 modelViewMatrix, projectionMatrix;
uniform mat3 normalMatrix;

varying float vDepth, vFog;
varying vec2 vUv, vUv1;
varying vec3 vNormal;

void main() {
  vec4 pos = vec4(position, 1.);


  #ifdef USE_INSTANCING
    pos = instanceMatrix * pos;
  #endif
  vec4 mvPosition = modelViewMatrix * pos;

  #ifdef USE_INSTANCING
    vNormal = normalize(mat3(instanceMatrix) * normal);
  #else
    vNormal = normalize(normalMatrix * normal);
  #endif
  
  vUv = uv;
  vUv1 = uv1;
  vDepth = smoothstep(NEAR, FAR, -mvPosition.z);

  gl_Position = projectionMatrix * mvPosition;
}
