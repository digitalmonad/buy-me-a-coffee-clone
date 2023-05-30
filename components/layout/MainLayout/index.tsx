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
      <div className='pt-10'>
        <Container>
          <div className='py-6 grid grid-cols-12 gap-4'>
            <div className='col-span-9'>{timeline}</div>
            <div className='col-span-3'>
              <div className='mb-4'>{userInfo}</div>
              <div className='mb-4'>{donationsForm}</div>
              <div className=''>{donationsList}</div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
