precision mediump float;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

vec3 palette( in float t)
{
  vec3 a = vec3(0.5, 0.5, 0.5);
  vec3 b = vec3(0.5, 0.5, 0.5);
  vec3 c = vec3(1.0, 1.0, 1.0);
  vec3 d = vec3(0.23, 0.15, 0.532);
  
  return a + b*cos( 6.28318*(c*t+d) );
}

void main() {
  vec2 uv = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / u_resolution.y;
  vec2 uv0 = uv;
  vec3 finalColor = vec3(0.0);

  for (float i = 0.0; i < 2.0; i++) {
    uv = exp(sin(uv + u_time)) / 2.0;
    
    float d = length(uv) * exp(-length(uv0));
    vec3 col = palette(length(uv0) + i*.4 + u_time*.4);

    d = sin(d*8. - u_time)/8.;
    d = abs(d);
    
    d = pow(0.01 / d, 1.0);
    
    finalColor += col * d;
  }
  
  gl_FragColor =  vec4(finalColor, 1.0);
}
