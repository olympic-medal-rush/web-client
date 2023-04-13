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

	float grid = step(0.95, mod(vUv.x * uSize, 1.));
	grid += step(0.95, mod(vUv.y * uSize, 1.));
	grid *= smoothstep(.7, .8, uZoom);

	final = mix(final, uGridColor, grid);

	gl_FragColor = vec4(final, 1.);
}
