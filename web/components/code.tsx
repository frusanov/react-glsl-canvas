import React from 'react'
import { codeWrapper, codeWrapper__inline } from './code.module.scss'
import Highlight from 'react-highlight'
import 'highlight.js/styles/atom-one-light.css'

interface CodeProps {
  children?: React.ReactNode;
  inline?: boolean;
  language?: string;
}

export const Code = ({ children, language, inline }: CodeProps) => {
  const classNames = [
    codeWrapper,
    ...(inline ? [codeWrapper__inline] : [])
  ];

  return (
    <div className={classNames.join(' ')}>
      <Highlight className={`language-${language ?? 'typescript'}`}>
        {children}
      </Highlight>
    </div>
  );
}
