attribute vec3 position;

#ifdef USE_INSTANCING
  attribute mat4 instanceMatrix;
#endif

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;

varying float vDepth;

void main() {
  vec4 pos = vec4(position, 1.);


  #ifdef USE_INSTANCING
    pos = instanceMatrix * pos;
  #endif
  vec4 mvPosition = modelViewMatrix * pos;

  vDepth = smoothstep(NEAR, FAR, -mvPosition.z);

  gl_Position = projectionMatrix * mvPosition;
}
