import React from 'react';
import { message, message__error, message__warning, } from './message.module.scss';

interface MessageProps {
  children?: React.ReactNode;
  level?: 'info' | 'warning' | 'error';
}

export const Message = ({ children, level = 'info' }: MessageProps) => {
  const classNames = [
    message,
    ...(level === 'error' ? [message__error] : []),
    ...(level === 'warning' ? [message__warning] : []),
  ];

  return (
    <div className={classNames.join(' ')}>
      {children}
    </div>
  );
}