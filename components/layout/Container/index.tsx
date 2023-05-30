import React, { PropsWithChildren } from 'react';

export const Container = ({ children }: PropsWithChildren) => {
  return (
    <div className='lg:max-w-7xl flex h-full w-full flex-col mx-auto'>
      {children}
    </div>
  );
};
