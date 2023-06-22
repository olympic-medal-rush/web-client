precision highp float;

varying vec2 vUv;
varying float vWave, vDepth;

uniform sampler2D uTex;

void main() {
	#include ../Global/chunks/near_discard.glsl;

  vec4 flag = texture2D(uTex, vUv);
  vec4 black = vec4(vec3(0.), 1.0);
  float depth = -vWave * 1.2;
  gl_FragColor = mix(flag, black, depth);
}
