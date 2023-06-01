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

      <Container className=''>
        <div className='grid grid-cols-12 gap-4 -mt-10'>
          <div className='col-span-8'>
            <div className='pt-16'>{timeline}</div>
          </div>
          <div className='col-span-4'>
            <div className='sticky pt-16 top-0 min-w-[320px]'>
              <div className='mb-4'>{userInfo}</div>
              <div className='mb-4'>{donationsForm}</div>
              <div className=''>{donationsList}</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
