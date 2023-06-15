attribute vec3 position, normal;
attribute vec2 uv;

// Particles attributes
attribute float aSize, aSpeed, aRad;

// Instance attributes
attribute float aGlobalSpeed, aGlobalRadius, aGlobalElevation;
attribute vec2 aInstancePosition;
attribute vec3 aColor;

uniform mat4 projectionMatrix, modelViewMatrix;
uniform float uTime;
uniform float uAnimationProgress;
uniform sampler2D tAnimation;


varying vec2 vUv;
varying vec3 vColor;
varying vec3 vNormal;
varying float vSize;

#define PI 3.14159265

mat4 rotation3d(vec3 axis, float angle) {
  axis = normalize(axis);
  float s = sin(angle);
  float c = cos(angle);
  float oc = 1.0 - c;

  return mat4(oc * axis.x * axis.x + c, oc * axis.x * axis.y - axis.z * s, oc * axis.z * axis.x + axis.y * s, 0.0, oc * axis.x * axis.y + axis.z * s, oc * axis.y * axis.y + c, oc * axis.y * axis.z - axis.x * s, 0.0, oc * axis.z * axis.x - axis.y * s, oc * axis.y * axis.z + axis.x * s, oc * axis.z * axis.z + c, 0.0, 0.0, 0.0, 0.0, 1.0);
}

float map(float value, float min1, float max1, float min2, float max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}


void main() {
  vUv = uv;
  vColor = aColor;
  vNormal = normal;

  vec3 pos = position;

  // Update size
  float size = smoothstep(0., 0.7, fract(-uTime * aSpeed * aGlobalSpeed)) * aSize;
  pos *= size;


  // Update pos
  float radus = aGlobalRadius - (pos.y * aSpeed * 800. * aSize);
  pos.y += fract(uTime * aSpeed * aGlobalSpeed) * aGlobalElevation + 1.6;
  pos.x += radus * cos(aRad);
  pos.z += radus * sin(aRad);

  // Update rotate
  mat4 rotationMatrix = rotation3d(vec3(0., 1., 0.), aRad);
  vec4 transfomedPos = rotationMatrix * vec4(pos, 1.);

  vec3 animationOffset = texture2D(tAnimation, vec2(0., uAnimationProgress)).xzy;
  animationOffset.x = map(animationOffset.x, 0., 1., MIN_OFFSET, MAX_OFFSET);
  animationOffset.y = map(animationOffset.y, 0., 1., MIN_OFFSET, MAX_OFFSET);
  animationOffset.z = map(animationOffset.z, 0., 1., MIN_OFFSET, MAX_OFFSET);

  transfomedPos.xz += aInstancePosition;
  transfomedPos.xyz += animationOffset;

  gl_Position = projectionMatrix * modelViewMatrix * transfomedPos;

  vSize = size;
}
