precision highp float;
varying vec2 vUv;

uniform sampler2D uTex;
uniform bool uEmissiveOnly;

varying vec2 vOffset;
varying float vOpacity;

void main() {
  vec4 moji = texture2D(uTex, vOffset);
  gl_FragColor = moji;
  gl_FragColor.rgb *= (1. - float(uEmissiveOnly));
  gl_FragColor.a *= vOpacity;
}
