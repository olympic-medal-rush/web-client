precision highp float;

// Three uniforms
uniform mat4 viewMatrix;

// Base params
uniform float uRoughness, uMetalness;
uniform vec3 uColor, uLightPosition;

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
#include <dithering_pars_fragment>

#define PI 3.14159265

void main() {
	float roughness = uRoughness;
	float metalness = uMetalness;
	vec3 normal = vNormal;

	// Color
	vec3 diffuse = vec3(uColor);
	vec4 final = vec4(diffuse, 1.);

	vec3 reflectVec = reflect(vEyeToSurfaceDir, normal);

	float theta = PI * .5;
	mat3 rotationMatrix = mat3(vec3(cos(theta), -sin(theta), 0.0), vec3(sin(theta), cos(theta), 0.0), vec3(0.0, 0.0, 1.0));
	// reflectVec = normalize((vec4(reflectVec, 0.0) * viewMatrix).xyz);
	reflectVec = normalize((vec4(reflectVec, 0.0) * viewMatrix * mat4(rotationMatrix)).xyz);
	vec3 envMapColor = textureCubeUV(tEnvMap, reflectVec, roughness).rgb * uEnvMapIntensity;

	final.rgb += envMapColor * smoothstep(0., 1., length(envMapColor) - length(final.rgb));
	final.rgb -= (1. - envMapColor) * metalness;

	vec3 aoMap = texture2D(tAoMap, vUv).rgb;
	final.rgb *= mix(vec3(1.), aoMap, uAoMapIntensity);

	// Emissive
	final.rgb = mix(final.rgb, smoothstep(.4, 1., final.rgb) * .3, float(uEmissiveOnly));

	// Shading 
	float cosTheta = dot(normalize(uLightPosition), normal);
	float bias = 0.005 * tan(acos(cosTheta));
	bias = clamp(bias, 0.0, 0.01);

	float difLight = max(0.0, cosTheta);
	float shading = difLight;

	final.rgb = mix(final.rgb - .1, final.rgb + .1, shading);

	gl_FragColor = final;
	#include <dithering_fragment>
}
