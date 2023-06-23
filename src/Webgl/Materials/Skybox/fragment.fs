precision highp float;

varying vec2 vUv;

uniform sampler2D tBackground;
uniform sampler2D tGrain;

void main() {
	float noise = (texture2D(tGrain, vUv * vec2(2., 1.) * 50.).r - .5) * (.2 + smoothstep(0., .05, abs(vUv.y - .5)) * .8) * .01;
	vec3 color = texture2D(tBackground, vec2(0., vUv.y + noise)).rgb;
	color += texture2D(tBackground, vec2(0., vUv.y - noise)).rgb;
	color *= .5;

	gl_FragColor = vec4(color, 1.);
}
