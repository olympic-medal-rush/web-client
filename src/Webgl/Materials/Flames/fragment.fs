precision highp float;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vColor;
varying float vSize;

uniform bool uEmissiveOnly;

uniform sampler2D tInstancePosition;
varying float vInstanceId;

void main() {
  vec3 finalColor = vColor * length(vNormal.rg + .5);
  finalColor = mix(finalColor, finalColor * vSize * 10., float(uEmissiveOnly));

  gl_FragColor = vec4(vec3(finalColor), 1.0);
}
