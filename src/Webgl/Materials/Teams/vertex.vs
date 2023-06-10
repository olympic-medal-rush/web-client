attribute vec2 uv;
attribute vec3 position, normal;

attribute float aVertexID, aJumpProgress, aRotationY;
attribute vec2 aInstancePosition;
attribute vec3 aColor1, aColor2, aColor3;

uniform float uTime;
uniform mat4 modelViewMatrix, projectionMatrix, viewMatrix, modelMatrix;
uniform mat4 uShadowProjectionMatrix, uShadowMatrixInverse;
uniform sampler2D tPositionOffsets, tNormalOffsets;

varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal, vEyeToSurfaceDir;
varying vec3 vColor1, vColor2, vColor3;
varying vec4 vShadowCoord;

mat3 rotateY(float angle) {
  float c = cos(angle);
  float s = sin(angle);

  return mat3(
    c, 0.0, -s,
    0.0, 1.0, 0.0,
    s, 0.0, c
  );
}

void main() {
  vec3 objectNormal = normal;
  vec3 objectPosition = position;

  vec2 offsetsUv = vec2(aVertexID, aJumpProgress);

  vec3 normalOffset = texture2D(tNormalOffsets, offsetsUv).xyz;
  objectNormal += normalOffset;

  vec3 positionOffset = texture2D(tPositionOffsets, offsetsUv).xyz;
  objectPosition += vec3(positionOffset.x, positionOffset.z, positionOffset.y) * step(0.0001, aJumpProgress);
  objectPosition = rotateY(aRotationY) * objectPosition; 
  
  vec4 instancePosition = vec4(objectPosition, 1.);
  instancePosition.xz += aInstancePosition;

  vec4 mvPosition = modelViewMatrix * instancePosition;

  gl_Position = projectionMatrix * mvPosition;

  vUv = uv;
  vPosition = objectPosition;
  vNormal = normalize(viewMatrix * modelMatrix * vec4(objectNormal, 0.0)).xyz;
  vEyeToSurfaceDir = normalize(mvPosition.xyz);
  vShadowCoord = uShadowProjectionMatrix * uShadowMatrixInverse * modelMatrix * instancePosition;

  vColor1 = aColor1;
  vColor2 = aColor2;
  vColor3 = aColor3;
}
