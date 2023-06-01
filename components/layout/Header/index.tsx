import React from 'react';
import { BiCoffeeTogo } from 'react-icons/bi';
import Link from 'next/link';

export const Header = () => {
  return (
    <div className='bg-paper h-10 px-3 flex items-center shrink-0 border-b border-gray-200 sticky top-0 w-full'>
      <BiCoffeeTogo />
      <h3 className='text-md text-gray-500 font-bold text-typography ml-1'>
        <Link href={'/'}>Buy me a coffee</Link>
      </h3>
    </div>
  );
};
