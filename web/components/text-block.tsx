import React from 'react';
import { textBlock } from './text-block.module.scss';

interface TextBlockProps {
  children?: React.ReactNode;
}

export const TextBlock = ({ children }: TextBlockProps) => {
  return (
    <div className={textBlock}>
      {children}
    </div>
  );
}