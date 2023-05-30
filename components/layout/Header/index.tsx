import React from 'react';
import { BiCoffeeTogo } from 'react-icons/bi';

export const Header = () => {
  return (
    <div className='bg-paper h-10 px-3 flex items-center shrink-0 border-b border-gray-200'>
      <BiCoffeeTogo />
      <h3 className='text-xs font-bold text-typography ml-1'>
        Buy me a coffee
      </h3>
    </div>
  );
};
