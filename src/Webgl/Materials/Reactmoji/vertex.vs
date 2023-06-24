// PARTICLES ATTRIBUTES
attribute vec3 position;
attribute vec2 uv;
attribute float aSize;
attribute float aSpeed;
attribute vec2 aOffset;
attribute float aPlacing;

// INSTANCES ATTRIBUTES
attribute vec2 aInstancePosition;

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;
uniform float uTime;
uniform float uElevation;
uniform float uGlobalSpeed;

varying vec2 vOffset;
varying float vOpacity;

#define UV_Scale vec2(48. / 192., 48. / 48.)

mat3 rotateZ(float angle) {
    float s = sin(angle);
    float c = cos(angle);
    return mat3(
        c, -s, 0,
        s, c, 0,
        0, 0, 1
    );
}
void main() {

  vec2 offset = uv + .5;
  offset *= UV_Scale;
  offset += aOffset - .5 * UV_Scale;

  vOffset = offset;
  vec3 pos = position;
  pos = rotateZ(aPlacing * .5) * pos;

  float life = fract(uTime * aSpeed * uGlobalSpeed);
  // Update size
  float size = smoothstep(1., .2 + aSize * 0.5, life) * smoothstep(0., .2, life) * aSize;
  pos *= size;

  // Update pos
  pos *= -1.;
  pos.y += life * uElevation;

  vOpacity = 1. - (pos.y - aSize * 1.5);
  pos.y += 2.2;

  pos.x += aPlacing * life;
  pos.z += aPlacing;

  vec3 instancePosition = pos;
  instancePosition.xz += aInstancePosition;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(instancePosition, 1.);
}