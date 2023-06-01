import { Header } from '@/components/layout/Header';
import Link from 'next/link';

export default function Cancel() {
  return (
    <div>
      <Header />
      <div className='flex h-screen justify-center items-center'>
        <div className='flex flex-col items-center'>
          <h1 className='text-xl font-bold'>Payment canceled</h1>
          <Link className='underline text-primary-400' href={'/'}>
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}
