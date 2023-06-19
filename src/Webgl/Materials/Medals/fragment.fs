precision highp float;

uniform float uEmissiveOnly;

uniform sampler2D tMedalColor;
uniform sampler2D tMedalHeights;

varying float vMedalType;
varying float vDisplacement;
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vViewPosition;

void main() {
	vec3 color = texture2D(tMedalColor, vec2(vMedalType, 0.)).rgb;

	vec3 viewDir = normalize(vViewPosition);
	
	vec3 x = normalize(vec3(viewDir.z, 0.0, - viewDir.x));
	vec3 y = cross(viewDir, x);

	vec2 uv = vec2(dot(x, vNormal), dot(y, vNormal)) * 0.495 + 0.5;
	float matcapColor = mix(0.2, 0.8, uv.y);

	color *= matcapColor;
	color *= mix(1., matcapColor * .5, uEmissiveOnly);

	gl_FragColor = vec4(color, 1.);
}
