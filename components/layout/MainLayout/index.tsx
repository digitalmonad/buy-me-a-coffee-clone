import { ReactNode } from 'react';
import { Header } from '../Header';
import { Banner } from './Banner';
import { Container } from './Container';
import { UserInfo } from './UserInfo';
import Image from 'next/image';

export const MainLayout = ({
  banner,
  userInfo,
  timeline,
  donationsForm,
  donationsList,
}: {
  banner?: ReactNode;
  userInfo: ReactNode;
  timeline: ReactNode;
  donationsForm: ReactNode;
  donationsList: ReactNode;
}) => {
  return (
    <div className='flex flex-col w-full h-screen'>
      <Header />
      {banner}
      <div className='flex justify-center'>
        <div className='-mt-14 bg-paper border-4 border-paper h-24 w-24 rounded-full absolute'>
          <Image
            className='rounded-full'
            alt='musk'
            src={'/musk-avatar.jpg'}
            width={200}
            height={200}
          />
        </div>
      </div>
      {userInfo}
      <Container>
        <div className='flex-1 py-6 grid grid-cols-6 gap-4'>
          <div className='col-span-4'>{timeline}</div>
          <div className='col-span-2'>
            <div className='mb-4'>{donationsForm}</div>
            <div className=''>{donationsList}</div>
          </div>
        </div>
      </Container>
    </div>
  );
};

MainLayout.Banner = Banner;
MainLayout.UserInfo = UserInfo;
