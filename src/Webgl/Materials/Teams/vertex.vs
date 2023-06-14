attribute vec2 uv;
attribute vec3 position;

attribute float aVertexID;

// INSTANCING
#ifdef USE_INSTANCING
  attribute vec2 aInstancePosition;
  attribute float aAnimationProgress, aRotationY;
  attribute vec3 aColor1, aColor2, aColor3;
#else
  uniform float uAnimationProgress, uRotationY;
  uniform vec3 uColor1, uColor2, uColor3;
#endif

// SHADOWS
#ifdef USE_SHADOWS
uniform mat4 uShadowProjectionMatrix, uShadowMatrixInverse;

varying vec4 vShadowCoord;
#endif

uniform float uTime;
uniform mat4 modelViewMatrix, projectionMatrix, viewMatrix, modelMatrix;
uniform sampler2D tPositionOffsets, tNormal;

varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal, vEyeToSurfaceDir;
varying vec3 vColor1, vColor2, vColor3;

mat3 rotateY(float angle) {
  float c = cos(angle);
  float s = sin(angle);

  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
}

float map(float value, float min1, float max1, float min2, float max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

void main() {
  float animationProgress, rotationY;
  vec3 color1, color2, color3;
  
  #ifdef USE_INSTANCING
    animationProgress = aAnimationProgress;
    rotationY = aRotationY;
    color1 = aColor1;
    color2 = aColor2;
    color3 = aColor3;
  #else
    animationProgress = uAnimationProgress;
    rotationY = uRotationY;
    color1 = uColor1;
    color2 = uColor2;
    color3 = uColor3;
  #endif

  vec2 offsetsUv = vec2(aVertexID, animationProgress);

  vec3 objectNormal = texture2D(tNormal, offsetsUv).xzy;
  vec3 objectPosition = position * .6;
  // vec3 objectPosition = position;

  vec3 positionOffset = texture2D(tPositionOffsets, offsetsUv).xyz;
  positionOffset = positionOffset.xzy * step(0., animationProgress);
  positionOffset.x = map(positionOffset.x, 0., 1., MIN_OFFSET, MAX_OFFSET);
  positionOffset.y = map(positionOffset.y, 0., 1., MIN_OFFSET, MAX_OFFSET);
  positionOffset.z = map(positionOffset.z, 0., 1., MIN_OFFSET, MAX_OFFSET);
  objectPosition += positionOffset;

  vec4 finalPosition = vec4(objectPosition * rotateY(rotationY), 1.);
  
  #ifdef USE_INSTANCING
    finalPosition.xz += aInstancePosition;
  #endif

  vec4 mvPosition = modelViewMatrix * finalPosition;

  gl_Position = projectionMatrix * mvPosition;

  vUv = uv;
  vPosition = position;
  vNormal = normalize(viewMatrix * modelMatrix * vec4(objectNormal, 0.0)).xyz;
  vEyeToSurfaceDir = normalize(mvPosition.xyz);
  
  #ifdef USE_SHADOWS
    vShadowCoord = uShadowProjectionMatrix * uShadowMatrixInverse * modelMatrix * finalPosition;
  #endif


  vColor1 = color1;
  vColor2 = color2;
  vColor3 = color3;
}
