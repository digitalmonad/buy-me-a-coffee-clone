import { ReactNode } from 'react';
import { Header } from '@/components/layout/Header';
import { Container } from '@/components/layout/Container';

export const MainLayout = ({
  userInfo,
  timeline,
  donationsForm,
  donationsList,
}: {
  userInfo: ReactNode;
  timeline: ReactNode;
  donationsForm: ReactNode;
  donationsList: ReactNode;
}) => {
  return (
    <div className='flex flex-col w-full h-screen'>
      <Header />

      <Container>
        <div className='flex-1 py-6 grid grid-cols-6 gap-4'>
          <div className='col-span-4'>{timeline}</div>
          <div className='col-span-2'>
            <div className='mb-4'>{userInfo}</div>
            <div className='mb-4'>{donationsForm}</div>
            <div className=''>{donationsList}</div>
          </div>
        </div>
      </Container>
    </div>
  );
};
