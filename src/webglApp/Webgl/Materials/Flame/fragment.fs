precision highp float;
varying vec2 vUv;
varying vec3 vNormal;

uniform vec3 uColor;
uniform float uEmissiveOnly;

void main() {
  vec3 finalColor = uColor * length(vNormal.rg + .25);
  // finalColor += uEmissiveOnly * finalColor;

  gl_FragColor = vec4(vec3(finalColor), 1.0);
}
