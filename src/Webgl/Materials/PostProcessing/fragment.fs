precision highp float;

uniform sampler2D tDiffuse, tEmissive, tDepth;
uniform float uEmissiveIntensity;

// Animation
uniform float uFadeProgress;
uniform vec3 uFadeColor;

varying vec2 vUv;

#define PI 3.14159265359

void main() {
	vec4 diffuse = texture2D(tDiffuse, vUv);
	diffuse.rgb = mix(diffuse.rgb, uFadeColor, uFadeProgress);

	vec3 emissive = texture2D(tEmissive, vUv).rgb;
	emissive.rgb = mix(emissive.rgb, uFadeColor, uFadeProgress);
	// float depth = smoothstep(1., .8, texture2D(tDepth, vUv).r);


	vec4 color = diffuse + vec4(emissive, length(emissive)) * uEmissiveIntensity;

	gl_FragColor = color;
}
