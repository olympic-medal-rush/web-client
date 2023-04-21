precision highp float;

uniform sampler2D tData;
uniform vec3 uFloorColor;
uniform vec3 uGridColor;
uniform float uSize, uZoom;

uniform sampler2D tSeamless1;
uniform sampler2D tSeamless2;
uniform sampler2D tSeamless3;
uniform sampler2D tSeamless4;

varying vec2 vUv;

void main() {
	vec3 data = texture2D(tData, vUv).rgb;

	vec3 t1 = texture2D(tSeamless1, vUv * 100.).rgb;
	vec3 t2 = texture2D(tSeamless2, vUv * 100.).rgb;
	vec3 t3 = texture2D(tSeamless3, vUv * 100.).rgb;
	vec3 t4 = texture2D(tSeamless4, vUv * 100.).rgb;

	vec3 mix1 = mix(uFloorColor, t1, data.r);
	vec3 mix2 = mix(uFloorColor, t2, data.g);
	vec3 mix3 = mix(uFloorColor, t3, data.b);

	vec3 gMix = mix(mix1, mix2, data.g);

	vec3 final = mix(gMix, mix3, data.b);
	final += .5;

	vec2 gridUv = mod(vUv * uSize, 1.);
	float gridCircle = smoothstep(.4, .5, length(gridUv - .5)) * .15;

	// final = mix(final, uGridColor, grid);
	// final = mix(vec3(.7), uGridColor, grid);

	gl_FragColor = vec4(final - gridCircle, 1.);
}
