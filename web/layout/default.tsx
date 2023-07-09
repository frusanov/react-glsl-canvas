import React from 'react';
import { defaultLayout } from './default.module.scss';

interface DefaultLayoutProps {
  children?: React.ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return <main className={defaultLayout}>
    {children}
  </main>
};