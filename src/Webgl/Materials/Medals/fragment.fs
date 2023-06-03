precision highp float;

uniform float uEmissiveOnly;

uniform sampler2D tMedalColor;

varying float vMedalType;

void main() {
	vec3 color = texture2D(tMedalColor, vec2(vMedalType, 0.)).rgb;


	color *= (1. - uEmissiveOnly);

	gl_FragColor = vec4(color, 1.);
}
