precision highp float;

// Three uniforms
uniform mat4 viewMatrix;

// Base params
uniform float uRoughness, uMetalness, uEmissiveIntensity;
uniform vec3 uColor, uEmissive;

// UVs
varying vec2 vUv;
varying vec2 vUv2;

// Envmap
uniform sampler2D tEnvMap;
uniform float uEnvMapScale, uEnvMapIntensity;
varying vec3 vEyeToSurfaceDir, vNormal;

// AO
uniform sampler2D uAoMap;
uniform float uAoMapIntensity;

#include ../Global/chunks/envmap_pars_fragment.glsl
#include <dithering_pars_fragment>

void main() {
	float roughness = uRoughness;
	float metalness = uMetalness;
	vec3 normal = vNormal;

	// Color
	vec3 diffuse = vec3(uColor);
	vec4 color = vec4(diffuse, 1.);

	vec3 reflectVec = reflect(vEyeToSurfaceDir, normal);

	reflectVec = normalize((vec4(reflectVec, 0.0) * viewMatrix).xyz);
	vec3 envMapColor = textureCubeUV(tEnvMap, vec3(reflectVec.xy * uEnvMapScale, reflectVec.z), roughness).rgb * uEnvMapIntensity;

	color.rgb += envMapColor * smoothstep(0., 1., length(envMapColor) - length(color.rgb));
	color.rgb -= (1. - envMapColor) * metalness;

	// vec3 tAoMap = texture2D(uAoMap, vUv2).rgb;
	// color.rgb *= mix(vec3(1.), tAoMap, uAoMapIntensity);

	// Emissive
	color.rgb += uEmissive * uEmissiveIntensity;

	gl_FragColor = color;
	// gl_FragColor = vec4(vNormal, 1.);
	#include <dithering_fragment>
}
