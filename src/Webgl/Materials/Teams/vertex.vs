attribute vec2 uv;
attribute vec3 position;

attribute float aVertexID, aAnimationProgress, aRotationY;
attribute vec2 aInstancePosition;
attribute vec3 aColor1, aColor2, aColor3;

uniform float uTime;
uniform mat4 modelViewMatrix, projectionMatrix, viewMatrix, modelMatrix;
uniform mat4 uShadowProjectionMatrix, uShadowMatrixInverse;
uniform sampler2D tPositionOffsets, tNormal;

varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal, vEyeToSurfaceDir;
varying vec3 vColor1, vColor2, vColor3;
varying vec4 vShadowCoord;

mat3 rotateY(float angle) {
  float c = cos(angle);
  float s = sin(angle);

  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
}

float map(float value, float min1, float max1, float min2, float max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

void main() {
  vec2 offsetsUv = vec2(aVertexID, aAnimationProgress);

  vec3 objectNormal = texture2D(tNormal, offsetsUv).xzy;
  vec3 objectPosition = position * .6;

  float isMedalAnimation = step(JUMP_PROGRESS_STEP, aAnimationProgress);
  float maxOffset = mix(MAX_OFFSET_JUMP, MAX_OFFSET_MEDAL, isMedalAnimation);
  float minOffset = mix(MIN_OFFSET_JUMP, MIN_OFFSET_MEDAL, isMedalAnimation);

  vec3 positionOffset = texture2D(tPositionOffsets, offsetsUv).xyz;
  positionOffset = vec3(positionOffset.x, positionOffset.z, positionOffset.y) * step(0., aAnimationProgress);
  positionOffset.x = map(positionOffset.x, 0., 1., minOffset, maxOffset);
  positionOffset.y = map(positionOffset.y, 0., 1., minOffset, maxOffset);
  positionOffset.z = map(positionOffset.z, 0., 1., minOffset, maxOffset);

  objectPosition += positionOffset;
  // * step(0.0001, aJumpProgress);
  // objectPosition = rotateY(aRotationY) * objectPosition; 

  vec4 instancePosition = vec4(objectPosition, 1.);
  instancePosition.xz += aInstancePosition;

  vec4 mvPosition = modelViewMatrix * instancePosition;

  gl_Position = projectionMatrix * mvPosition;

  vUv = uv;
  vPosition = position;
  vNormal = normalize(viewMatrix * modelMatrix * vec4(objectNormal, 0.0)).xyz;
  vEyeToSurfaceDir = normalize(mvPosition.xyz);
  vShadowCoord = uShadowProjectionMatrix * uShadowMatrixInverse * modelMatrix * instancePosition;

  vColor1 = aColor1;
  vColor2 = aColor2;
  vColor3 = aColor3;
}
