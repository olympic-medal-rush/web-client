precision highp float;

// Three uniforms
uniform mat4 viewMatrix;

// Base params
uniform float uRoughness, uMetalness;
uniform vec3 uColor;

// Emissive
uniform bool uEmissiveOnly;

// UVs
varying vec2 vUv;

// Envmap
uniform sampler2D tEnvMap;
uniform float uEnvMapIntensity;
varying vec3 vEyeToSurfaceDir, vNormal;

// AO
uniform sampler2D tAoMap;
uniform float uAoMapIntensity;

#include ../Global/chunks/envmap_pars_fragment.glsl
#include ../Global/chunks/saturation.glsl

#include <dithering_pars_fragment>

void main() {
	float roughness = uRoughness;
	float metalness = uMetalness;
	vec3 normal = vNormal;

	// Color
	vec4 color = vec4(adjustSaturation(clamp(uColor, vec3(.1), vec3(.9)), .7) + .15, 1.);

	vec3 reflectVec = reflect(vEyeToSurfaceDir, normal);

	reflectVec = normalize((vec4(reflectVec, 0.0) * viewMatrix).xyz);
	vec3 envMapColor = textureCubeUV(tEnvMap, reflectVec, roughness).rgb * uEnvMapIntensity;

	color.rgb += envMapColor * smoothstep(0., 1., length(envMapColor) - length(color.rgb));
	color.rgb -= (1. - envMapColor) * metalness;

	vec3 aoMap = texture2D(tAoMap, vUv).rgb;
	color.rgb *= mix(vec3(1.), aoMap, uAoMapIntensity);

	// Emissive
	// color.rgb += uEmissive * uEmissiveIntensity;
	color.rgb *= (1. - float(uEmissiveOnly));

	gl_FragColor = color;
	#include <dithering_fragment>
}
