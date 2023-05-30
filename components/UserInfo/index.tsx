import React from 'react';
import Image from 'next/image';

export type TUserInfoProps = {
  name: string;
  occupancy: string;
  avatarUrl: string;
};

export const UserInfo = ({ name, occupancy, avatarUrl }: TUserInfoProps) => {
  return (
    <div className='bg-paper p-4 flex rounded-md border border-gray-200'>
      <div className='h-16 w-16 rounded-full'>
        <Image
          className='rounded-full'
          alt={name}
          src={avatarUrl}
          width={200}
          height={200}
        />
      </div>
      <div className='ml-4'>
        <h3 className='text-lg font-bold'>{name}</h3>
        <p className='text-md text-gray-500'>{occupancy}</p>
      </div>
    </div>
  );
};
