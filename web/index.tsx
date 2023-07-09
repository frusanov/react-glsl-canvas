import React from 'react';
import { createRoot } from "react-dom/client";
import { GLSL } from '..';
import { DefaultLayout } from './layout/default';
import shader from './shader.glsl';
import { ShaderBox } from './components/shader-box';
import { Code } from './components/code';
import { TextBlock } from './components/text-block';
import { Message } from './components/message';

export const App = () => {
  return (
    <DefaultLayout>
      <ShaderBox shader={shader} />
      <TextBlock>
        <Message level={'warning'}>
          WARNING! This library is in early development stage. Use it at your own risk.
        </Message>
        <p>
          React GLSL is a library that allows you to rander GLSL shaders inside React components.
        </p>
        <p>
          Props of GLSL component are passed to the underlying{' '}
          <a href="https://github.com/actarian/glsl-canvas" target="_black">glsl-canvas-js</a>{' '}
          instance as options.
        </p>
        <Code language={'bash'}>
          npm install react-glsl-canvas{'\n'}
          # or{'\n'}
          yarn add react-glsl-canvas
        </Code>
        <Code language={'typescript'}>
          {`import React from 'react';
import { GLSL } from 'react-glsl-canvas';
import shader from './shader.glsl';

export const App = () => {
  return (
    <GLSL fragmentString={shader} />
  );
}`}
        </Code>
        <Code language={'glsl'}>
          {`precision mediump float;

uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_resolution;

void main() {
  vec2 st = gl_FragCoord.xy/u_resolution.xy;
  gl_FragColor = vec4(st.x,st.y,0.0,1.0);
}`}
        </Code>
      </TextBlock>
    </DefaultLayout>
  );
}

const container = document.getElementById("app");
const root = createRoot(container)
root.render(<App />);