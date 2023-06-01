import React, { PropsWithChildren } from 'react';

export const Container = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <div className={`max-w-5xl mx-auto ${className || ''}`}>{children}</div>
  );
};
