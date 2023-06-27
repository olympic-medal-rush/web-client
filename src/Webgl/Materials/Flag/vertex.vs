attribute vec3 position;
attribute vec2 uv;

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;

uniform float uTime;
uniform sampler2D tNoise;

varying vec2 vUv;
varying float vWave, vDepth;

void main() {
  vec3 newPos = position;
  
  float noise = texture2D(tNoise, position.xy * 5. + uTime * .0001).r;

  newPos.y += sin(uTime * .01 + noise + position.x * 1000.) * .03 * smoothstep(.0, -.5, position.x);
  // newPos.z += sin(newPos.y * 10. + noise) * .01;
  
  vWave = newPos.y;
  
  vec4 mvPosition = modelViewMatrix * vec4(newPos, 1.);
  
  vDepth = smoothstep(NEAR, FAR, -mvPosition.z);
  vUv = uv;

  gl_Position = projectionMatrix * mvPosition;
}