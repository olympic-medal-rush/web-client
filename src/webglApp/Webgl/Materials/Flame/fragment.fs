precision highp float;
varying vec2 vUv;
varying vec3 vNormal;

uniform vec3 uColor;

void main() {
  vec3 finalColor = uColor * length(vNormal.rg + .25);

	gl_FragColor = vec4(vec3(finalColor), 1.0);
}
