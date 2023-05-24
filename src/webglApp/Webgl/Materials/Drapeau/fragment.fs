precision highp float;
varying vec2 vUv;
varying float vDepth;

uniform sampler2D uTex;

void main() {
  vec4 flag = texture2D(uTex, vUv);
  vec4 black = vec4(vec3(0.), 1.0);
  float depth = -vDepth * 1.2;
  gl_FragColor = mix( flag, black, depth);
}
