precision highp float;

uniform vec3 uLightPosition;

varying vec3 vNormal;
varying float vDepth;

void main() {
	float alpha = smoothstep(.0, .02, vDepth);

	if(alpha < .5)
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
