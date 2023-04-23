precision highp float;

uniform float uAoMapIntensity;
uniform bool uShadowOnly, uEmissiveOnly;
uniform vec3 uColor1, uColor2, uColor3;
uniform sampler2D tAoMap, tNoise;

varying vec2 vUv, vUv2;
varying vec3 vEyeToSurfaceDir, vNormal, vPosition;

#include ../Global/chunks/envmap_pars_fragment.glsl
#include ../Global/chunks/saturation.glsl

#include <packing>
#include <dithering_pars_fragment>

void main() {
	if(uShadowOnly) {
		gl_FragColor = packDepthToRGBA(gl_FragCoord.z);
	} else {
		float noise1 = (texture2D(tNoise, vPosition.xy * .1).r + texture2D(tNoise, vPosition.yz * .1).r) * 1.;
		float noise2 = (smoothstep(.3, 1., texture2D(tNoise, vPosition.xy * 5.).r) + smoothstep(.3, 1., texture2D(tNoise, vPosition.yz * 5.).r)) * .5;

		// Color
		vec3 color1 = adjustSaturation(clamp(uColor1, vec3(.1), vec3(1.)), .7);
		vec3 color2 = adjustSaturation(clamp(uColor2, vec3(.1), vec3(1.)), .7);
		vec3 color3 = adjustSaturation(clamp(uColor3, vec3(.1), vec3(1.)), .7);

		vec3 diffuse = mix(color1, color2, smoothstep(2. + noise1 * .1, .5 + noise1 * .1, vPosition.y));
		// diffuse = mix(diffuse, noise2 * color3, smoothstep(.8, .5, vPosition.y) * noise2);

		vec4 color = vec4(diffuse, 1.);

		vec3 aoMap = texture2D(tAoMap, vUv).rgb;
		color.rgb *= mix(vec3(1.), aoMap, uAoMapIntensity);

		// Emissive
		// color.rgb += uEmissive * uEmissiveIntensity;
		color.rgb *= (1. - float(uEmissiveOnly));

		gl_FragColor = color;
		#include <dithering_fragment>
	}

}
