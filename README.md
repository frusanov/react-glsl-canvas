> WARNING! This library is in early development stage. Use it at your own risk.

React GLSL is a library that allows you to rander GLSL shaders inside React components.

This library is based on glsl-canvas-js that also need to be installed:

```bash
npm install react-glsl-canvas glsl-canvas-js
# or
yarn add react-glsl-canvas glsl-canvas-js
```

```typescript
import React from 'react';
import { GLSL } from 'react-glsl-canvas';
import shader from './shader.glsl';

export const App = () => {
  return (
    <GLSL fragmentString={shader} />
  );
}
```

```glsl
precision mediump float;

uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;

void main() {
  vec2 st = gl_FragCoord.xy/u_resolution.xy;
  gl_FragColor = vec4(st.x,st.y,0.0,1.0);
}
```


Props of GLSL component are passed to the underlying glsl-canvas-js instance as options.