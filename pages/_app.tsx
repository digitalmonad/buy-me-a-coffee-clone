import '@/styles/global.css';

import type { AppProps } from 'next/app';
import { Barlow_Condensed, Roboto } from 'next/font/google';

const barlowCondensed = Barlow_Condensed({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-barlow-condensed',
});
const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${roboto.className} text-sm font-medium`}>
      <Component {...pageProps} />{' '}
    </main>
  );
}
