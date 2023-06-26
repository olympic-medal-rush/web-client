precision highp float;

uniform bool uEmissiveOnly;
uniform vec3 uLightPosition;
uniform vec3 uFogColor;
uniform sampler2D tColors, tAoMap;
uniform sampler2D tGrain, tNoise;

varying float vDepth, vFog;
varying vec2 vUv, vUv1;
varying vec3 vNormal;

void main() {
	#include ../Global/chunks/near_discard.glsl;

	vec3 normal = vNormal;

	float cosTheta = dot(normalize(uLightPosition), normal);
	float bias = 0.005 * tan(acos(cosTheta));
	bias = clamp(bias, 0.0, 0.01);

	float difLight = max(0.0, cosTheta);

	float grain = texture2D(tGrain, vUv1 * 20.).r;
  	float noise = texture2D(tNoise, vUv1 * 5.).r * texture2D(tNoise, vUv1 * 20.).r;

	vec3 color = texture2D(tColors, vUv).rgb + grain * .05;


	float ao = texture2D(tAoMap, vUv1).r;
	color.rgb *= mix(1., ao, .25);

	color = mix(color - .5, color + .1, difLight);

	gl_FragColor = vec4(color, 1.);
	gl_FragColor.rgb *= (1. - float(uEmissiveOnly));
}
