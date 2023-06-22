precision highp float;

uniform vec3 uLightPosition;
uniform sampler2D tColors;

varying float vDepth;
varying vec2 vUv;
varying vec3 vNormal;

void main() {
	#include ../Global/chunks/near_discard.glsl;
	
	vec3 normal = vNormal;

	float cosTheta = dot(normalize(uLightPosition), normal);
	float bias = 0.005 * tan(acos(cosTheta));
	bias = clamp(bias, 0.0, 0.01);

	float difLight = max(0.0, cosTheta);

	vec3 color = texture2D(tColors, vUv).rgb;
	color = mix(color - .5, color + .1, difLight);

	gl_FragColor = vec4(color, 1.);
}
