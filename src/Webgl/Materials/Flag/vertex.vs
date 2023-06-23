attribute vec3 position;
attribute vec2 uv;

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;
uniform float uTime;

varying vec2 vUv;
varying float vWave, vDepth;

void main() {
  vec3 newPos = position;
  
  newPos.y += sin(uTime * 0.005 + vUv.x) * 0.12 * position.x;
  vWave = newPos.y;
  
  vec4 mvPosition = modelViewMatrix * vec4(newPos, 1.);
  
  vDepth = smoothstep(NEAR, FAR, -mvPosition.z);
  vUv = uv;

  gl_Position = projectionMatrix * mvPosition;
}