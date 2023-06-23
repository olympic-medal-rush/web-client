precision highp float;

uniform vec3 uColor;

varying float vDepth;

void main() {
	#include ../Global/chunks/near_discard.glsl;

	gl_FragColor = vec4(uColor, 1.);
}
