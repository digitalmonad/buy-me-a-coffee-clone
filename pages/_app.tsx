import '@/styles/global.css';
import type { AppProps } from 'next/app';
import { Poppins } from 'next/font/google';

const inter = Poppins({ subsets: ['latin'], weight: '600' });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />{' '}
    </main>
  );
}
