precision highp float;

uniform bool uEmissiveOnly;
uniform vec3 uLightPosition;
uniform sampler2D tColors;
uniform sampler2D tGrain, tNoise;

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

	float grain = texture2D(tGrain, vUv * 30.).r;
  	float noise = texture2D(tNoise, vUv * 5.).r * texture2D(tNoise, vUv * 20.).r;

	vec3 color = texture2D(tColors, vUv).rgb + grain * .05 - noise * .05;
	// color = mix(color, color * smoothstep(.0, 3., min(1., length(color)) * step(vUv.y, .4)) * .2, float(uEmissiveOnly));

	color = mix(color - .5, color + .1, difLight);

	gl_FragColor = vec4(color, 1.);
	gl_FragColor.rgb *= (1. - float(uEmissiveOnly));
	

}
