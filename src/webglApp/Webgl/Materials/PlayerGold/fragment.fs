precision highp float;

// Three uniforms
uniform mat4 viewMatrix;

// Base params
uniform float uRoughness, uMetalness;
uniform vec3 uColor;

// Emissive
uniform bool uEmissiveOnly, uShadowOnly;

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
#include <dithering_pars_fragment>
#include <packing>

#define PI 3.14159265

void main() {
	if(uShadowOnly) {
		gl_FragColor = packDepthToRGBA(gl_FragCoord.z);
	} else {
		float roughness = uRoughness;
		float metalness = uMetalness;
		vec3 normal = vNormal;

		// Color
		vec3 diffuse = vec3(uColor);
		vec4 color = vec4(diffuse, 1.);

		vec3 reflectVec = reflect(vEyeToSurfaceDir, normal);

		float theta = PI * .5;
		mat3 rotationMatrix = mat3(vec3(cos(theta), -sin(theta), 0.0), vec3(sin(theta), cos(theta), 0.0), vec3(0.0, 0.0, 1.0));
		// reflectVec = normalize((vec4(reflectVec, 0.0) * viewMatrix).xyz);
		reflectVec = normalize((vec4(reflectVec, 0.0) * viewMatrix * mat4(rotationMatrix)).xyz);
		vec3 envMapColor = textureCubeUV(tEnvMap, reflectVec, roughness).rgb * uEnvMapIntensity;

		color.rgb += envMapColor * smoothstep(0., 1., length(envMapColor) - length(color.rgb));
		color.rgb -= (1. - envMapColor) * metalness;

		vec3 aoMap = texture2D(tAoMap, vUv).rgb;
		color.rgb *= mix(vec3(1.), aoMap, uAoMapIntensity);

		// Emissive
		color.rgb = mix(color.rgb, smoothstep(.4, 1., color.rgb) * .3, float(uEmissiveOnly));

		gl_FragColor = color;
		#include <dithering_fragment>
	}
}
