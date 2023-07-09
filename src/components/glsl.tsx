import React, { useEffect, useRef, useState } from 'react';
import type { JSX } from 'react';
import { Canvas, ICanvasOptions } from 'glsl-canvas-js/dist/esm/glsl';

interface GLSLOptions extends ICanvasOptions {
  fallback?: (error: Error) => JSX.Element;
  getInstance?: (glsl: Canvas) => void;
}

export const GLSL = ({ getInstance, fallback, ...options }: GLSLOptions) => {
  const [error, setError] = useState<Error>();
  const canvasRef = useRef<HTMLCanvasElement>();

  useEffect(() => {
    if (!canvasRef?.current) return;

    const glsl = new Canvas(canvasRef.current, {
      ...options,
      onError: (error) => {
        setError(error);
        options.onError?.(error);
      }
    });

    getInstance?.(glsl);

    return () => {
      glsl.destroy();
    }
  }, []);

  if (error && fallback) return fallback(error);

  return (
    <canvas ref={canvasRef} style={{
      width: '100%',
      height: '100%',
    }} />
  );
};