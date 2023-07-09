import React from 'react';
import { shaderBox, shaderBox__text } from './shader-box.module.scss';
import { GLSL } from '../..';


interface ShaderBoxProps {
  shader: string;
}

export const ShaderBox = ({ shader }: ShaderBoxProps) => {
  return (
    <div className={shaderBox}>
      <div className={shaderBox__text}>
        React GLSL
      </div>
      <GLSL fragmentString={shader} />
    </div>
  );
}