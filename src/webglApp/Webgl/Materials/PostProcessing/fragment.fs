precision highp float;

uniform sampler2D tDiffuse, tEmissive, tDepth;
uniform float uEmissiveIntensity;

varying vec2 vUv;

#define PI 3.14159265359
#define NEAR 1.
#define FAR 1000.

void main() {
	vec4 diffuse = texture2D(tDiffuse, vUv);
	vec3 emissive = texture2D(tEmissive, vUv).rgb;
	// float depth = smoothstep(1., .8, texture2D(tDepth, vUv).r);

	vec4 color = diffuse + vec4(emissive, length(emissive)) * uEmissiveIntensity;

	gl_FragColor = color;
}
