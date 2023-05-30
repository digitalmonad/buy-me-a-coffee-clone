import React, { PropsWithChildren } from 'react';

export const Container = ({ children }: PropsWithChildren) => {
  return (
    <div className='max-w-5xl flex h-full w-full flex-col mx-auto'>
      {children}
    </div>
  );
};
