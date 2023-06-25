attribute vec3 position, normal;
attribute vec2 uv;

// Particles attributes
attribute float aSize, aSpeed, aRad;

// Instance attributes
#ifdef USE_INSTANCING
  attribute float aGlobalSpeed, aGlobalRadius, aGlobalElevation, aAnimationProgress, aRotationY;
  attribute vec2 aInstancePosition;
  attribute vec3 aColor;
#else
  uniform float uGlobalSpeed, uGlobalRadius, uGlobalElevation, uAnimationProgress;
  uniform vec3 uColor;
#endif

uniform mat4 projectionMatrix, modelViewMatrix;
uniform float uTime;
uniform sampler2D tAnimation;


varying vec2 vUv;
varying vec3 vColor;
varying vec3 vNormal;
varying float vSize;

#define PI 3.14159265

mat3 rotateY(float angle) {
  float c = cos(angle);
  float s = sin(angle);

  return mat3(c, 0.0, -s, 0.0, 1.0, 0.0, s, 0.0, c);
}

float map(float value, float min1, float max1, float min2, float max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}


void main() {
  vec3 color;
  float globalSpeed, globalRadius, globalElevation, animationProgress, rotationY;

  #ifdef USE_INSTANCING
    color = aColor;
    globalSpeed = aGlobalSpeed;
    globalRadius = aGlobalRadius;
    globalElevation = aGlobalElevation;
    animationProgress = aAnimationProgress;
    rotationY = aRotationY;
  #else
    color = uColor;
    globalSpeed = uGlobalSpeed;
    globalRadius = uGlobalRadius;
    globalElevation = uGlobalElevation;
    animationProgress = uAnimationProgress;
  #endif

  vUv = uv;
  vColor = color;
  vNormal = normal;

  vec3 pos = position;

  // Update size
  float life = fract(-uTime * aSpeed * globalSpeed);
  float size = smoothstep(.0, .5, life) * smoothstep(1., .9, life) * aSize * 1.2;
  pos *= size;


  // Update pos
  float radus = globalRadius - (pos.y * aSpeed * 800. * aSize);
  pos.y += fract(uTime * aSpeed * globalSpeed) * globalElevation + 1.5;
  pos.x += radus * cos(aRad);
  pos.z += radus * sin(aRad);

  // Update rotate
  vec3 transfomedPos = pos * rotateY(aRad);

  vec3 animationOffset = texture2D(tAnimation, vec2(0., animationProgress)).xzy;
  animationOffset.x = map(animationOffset.x, 0., 1., MIN_OFFSET, MAX_OFFSET);
  animationOffset.y = map(animationOffset.y, 0., 1., MIN_OFFSET, MAX_OFFSET);
  animationOffset.z = map(animationOffset.z, 0., 1., MIN_OFFSET, MAX_OFFSET);

  transfomedPos += animationOffset;
  transfomedPos = transfomedPos * rotateY(rotationY);

  #ifdef USE_INSTANCING
    transfomedPos.xz += aInstancePosition;
  #endif

  gl_Position = projectionMatrix * modelViewMatrix * vec4(transfomedPos, 1.);

  vSize = size;
}
