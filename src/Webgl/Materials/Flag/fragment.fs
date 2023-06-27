precision highp float;

varying vec2 vUv;
varying float vWave, vDepth;

uniform sampler2D uTex;

void main() {
	#include ../Global/chunks/near_discard.glsl;

  vec3 flag = texture2D(uTex, vUv).rgb;
  vec3 black = vec3(0.);
  
  float depth = -vWave * 1.2;

  gl_FragColor = vec4(mix(flag, black, depth), 1.);
}
