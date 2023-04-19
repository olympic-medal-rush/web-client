attribute vec3 position;
attribute vec3 normal;
attribute vec2 uv;

attribute vec3 aColor;
attribute float aSize;
attribute float aSpeed;
attribute float aRad;

uniform mat4 projectionMatrix, modelViewMatrix;
uniform float uTime;
uniform float uRadius;
uniform float uGlobalSpead;
uniform float uElevation;

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

void main() {
  vUv = uv;
  vColor = aColor;
  vNormal = normal;

  vec3 pos = position;
  // Update size
  float size = smoothstep(0., 0.7, fract(-uTime * aSpeed * uGlobalSpead)) * aSize;
  pos *= size;

  // Update pos
  float radus = uRadius - (pos.y * aSpeed * 800. * aSize);
  pos.y += fract(uTime * aSpeed * uGlobalSpead) * uElevation;
  pos.x += radus * cos(aRad);
  pos.z += radus * sin(aRad);

  // Update rotate
  mat4 rotationMatrix = rotation3d(vec3(0., 1., 0.), aRad);
  vec4 transfomedPos = rotationMatrix * vec4(pos, 1.);

  gl_Position = projectionMatrix * modelViewMatrix * transfomedPos;

  vSize = size;
}
