#version 450

layout(location = 0) in vec3 fragColor;

layout(location = 0) out vec4 outColor;

precision mediump float;

vec3 palette(float t){
  vec3 a = vec3(0.5, 0.5, 0.5);
  vec3 b = vec3(0.5, 0.5, 0.5);
  vec3 c = vec3(1.0, 1.0, 1.0);
  vec3 d = vec3(0.263, 0.416, 0.557);
  
  
  
  
  return a + b*cos(6.28318*(c*t*d));
}


void main() {
    
  //setting resolution into a 2D vector
  vec2 resolution = vec2(resolutionx,resolutiony);
  
  //based off resolution, sets a value based off the pixel its rendering with a value of -1 to 1, with (0,0) being the center of the canvas and the origin
  vec2 uv = (gl_FragCoord.xy * 2.0 - resolution) / resolution.y;
  vec2 uv0 = uv;
  vec3 finalColor = vec3(0.0);
  
  
  
  for (float i = 0.0; i < 3.0; i++){
    uv = fract(uv * 1.5) - 0.5;
    //distance the pixel is from the center
  float d = length(uv) * exp(-length(uv0));
  vec3 col = palette(length(uv0) + i*.4 + time * .4);
  //shader work 
  
  d = sin(d * 8.0 + time) / 8.0;
  d = abs(d);
  
  
  d = pow(0.01 / d, 1.2);
  
  finalColor += col * d;
  }
  float brightness = 1.25;
  
  finalColor *= brightness;
    
    outColor = vec4(fragColor, 1.0);
}
