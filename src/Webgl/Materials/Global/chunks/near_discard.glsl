vec2 discardUv = (gl_FragCoord.xy) * 0.15;
discardUv.x += step(1., mod(discardUv.y, 2.)) * 0.5;
discardUv = fract(discardUv);
float closeDepth = smoothstep(.017, .0, vDepth);
float dpMask = smoothstep(closeDepth - 0.2, closeDepth, length(discardUv - 0.5));

if(dpMask < 0.5)
    discard;
