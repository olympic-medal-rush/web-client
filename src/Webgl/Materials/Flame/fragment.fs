precision highp float;
varying vec2 vUv;
varying vec3 vNormal;
varying float vSize;

uniform vec3 uColor;
uniform bool uEmissiveOnly;

void main() {
  vec3 finalColor = uColor * length(vNormal.rg + .25);
  finalColor = mix(finalColor, finalColor * vSize * 5., float(uEmissiveOnly));

  gl_FragColor = vec4(vec3(finalColor), 1.0);
}
