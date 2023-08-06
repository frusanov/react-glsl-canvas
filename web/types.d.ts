declare module "*.glsl" {
  const content: string;
  export default content;
}

declare module "glsl-canvas-js" {
  export * from 'glsl-canvas-js/dist/cjs/glsl';
}