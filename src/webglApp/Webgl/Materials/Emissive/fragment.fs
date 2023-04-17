precision highp float;

uniform sampler2D tEmissive;
uniform vec2 uResolution;
uniform float uHorizontal;

varying vec2 vUv;

// #define WEIGHT_1 0.227027
#define WEIGHT_1 0.1945946
#define WEIGHT_2 0.1216216
#define WEIGHT_3 0.054054
#define WEIGHT_4 0.016216

// #define PI 3.14159265
// #define PI2 6.28318530

void main() {
	vec2 offset = 2. / uResolution;

	vec3 color = vec3(0.);

	if(uHorizontal > .5) {
		color += texture2D(tEmissive, vUv + vec2(offset.x * 1., 0.0)).rgb * WEIGHT_1;
		color += texture2D(tEmissive, vUv - vec2(offset.x * 1., 0.0)).rgb * WEIGHT_1;

		color += texture2D(tEmissive, vUv + vec2(offset.x * 2., 0.0)).rgb * WEIGHT_2;
		color += texture2D(tEmissive, vUv - vec2(offset.x * 2., 0.0)).rgb * WEIGHT_2;

		color += texture2D(tEmissive, vUv + vec2(offset.x * 3., 0.0)).rgb * WEIGHT_3;
		color += texture2D(tEmissive, vUv - vec2(offset.x * 3., 0.0)).rgb * WEIGHT_3;

		color += texture2D(tEmissive, vUv + vec2(offset.x * 4., 0.0)).rgb * WEIGHT_4;
		color += texture2D(tEmissive, vUv - vec2(offset.x * 4., 0.0)).rgb * WEIGHT_4;
	} else {
		color += texture2D(tEmissive, vUv + vec2(0.0, offset.y * 1.)).rgb * WEIGHT_1;
		color += texture2D(tEmissive, vUv - vec2(0.0, offset.y * 1.)).rgb * WEIGHT_1;

		color += texture2D(tEmissive, vUv + vec2(0.0, offset.y * 2.)).rgb * WEIGHT_2;
		color += texture2D(tEmissive, vUv - vec2(0.0, offset.y * 2.)).rgb * WEIGHT_2;

		color += texture2D(tEmissive, vUv + vec2(0.0, offset.y * 3.)).rgb * WEIGHT_3;
		color += texture2D(tEmissive, vUv - vec2(0.0, offset.y * 3.)).rgb * WEIGHT_3;

		color += texture2D(tEmissive, vUv + vec2(0.0, offset.y * 4.)).rgb * WEIGHT_4;
		color += texture2D(tEmissive, vUv - vec2(0.0, offset.y * 4.)).rgb * WEIGHT_4;
	}

	gl_FragColor = vec4(color * 2., 1.);
}