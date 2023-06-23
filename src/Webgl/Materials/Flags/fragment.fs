precision highp float;
varying vec2 vUv;

uniform sampler2D uTex;
uniform bool uEmissiveOnly;
uniform float uZoom;
uniform float uTime;

varying vec2 vOffset;
varying float vIsMyTeam, vRatio;

void main() {

  vec4 flags = texture2D(uTex, fract(vOffset));
  gl_FragColor = flags;

  float time = sin(uTime * 0.005);

  vec2 uv = vec2(vUv.x * vRatio, vUv.y);

  float mask = smoothstep(.39, .44, length(uv - vec2(.5 * vRatio, .5)));
  gl_FragColor.rgb = mix(gl_FragColor.rgb, 1. * vec3(time), mask);
  gl_FragColor.a = mix(gl_FragColor.a, clamp(time, 0.2, 0.4), mask);

  gl_FragColor.a *= smoothstep(.44 + vIsMyTeam * .1, .39 + vIsMyTeam * .1, length(uv - vec2(.5 * vRatio, .5))) * smoothstep(.3, .4, (1. - uZoom));
  gl_FragColor.rgb = mix(gl_FragColor.rgb * (1. - float(uEmissiveOnly)), gl_FragColor.rgb, float(uEmissiveOnly) * vIsMyTeam * mask);
}
