precision highp float;

uniform vec3 uLightPosition;

varying float vDepth;
varying vec2 vUv;
varying vec3 vNormal;

void main() {
	vec2 discardUv = (gl_FragCoord.xy) * 0.15;
	discardUv.x += step(1., mod(discardUv.y, 2.)) * 0.5;
	discardUv = fract(discardUv);
	float closeDepth = smoothstep(.017, .0, vDepth);
	float dpMask = smoothstep(closeDepth - 0.2, closeDepth, length(discardUv - 0.5));

	if(dpMask < 0.5)
		discard;

	vec3 normal = vNormal;

	float cosTheta = dot(normalize(uLightPosition), normal);
	float bias = 0.005 * tan(acos(cosTheta));
	bias = clamp(bias, 0.0, 0.01);

	float difLight = max(0.0, cosTheta);

	vec3 color = vec3(1.);
	color = mix(color - .5, color + .1, difLight);

	gl_FragColor = vec4(color, 1.);
}
