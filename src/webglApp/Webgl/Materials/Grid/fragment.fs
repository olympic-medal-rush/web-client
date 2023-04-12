precision highp float;

uniform sampler2D tData;
uniform sampler2D tSeamless1;

varying vec2 vUv;

void main() {
	vec3 data = texture2D(tSeamless1, vUv * 10.).rgb;
	gl_FragColor = vec4(data, 1.);

}
