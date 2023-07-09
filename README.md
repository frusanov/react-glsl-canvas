> WARNING! This library is in early development stage. Use it at your own risk.

React GLSL is a library that allows you to rander GLSL shaders inside React components.

Props of GLSL component are passed to the underlying [glsl-canvas-js](https://github.com/actarian/glsl-canvas) instance as options.

```bash
npm install react-glsl-canvas
# or
yarn add react-glsl-canvas
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
