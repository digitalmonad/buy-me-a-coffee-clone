import { SubscriptionForm } from '@/components/SubscriptionForm';
import { MainLayout } from '@/components/layout/MainLayout';
import Head from 'next/head';

export default function Home() {
  return (
    <div className='flex h-screen'>
      <Head>
        <title>Buy me a coffee</title>
      </Head>

      <MainLayout
        banner={<MainLayout.Banner />}
        userInfo={<MainLayout.UserInfo />}
        timeline={<div>Timeline</div>}
        subscriptions={<SubscriptionForm />}
      />
    </div>
  );
}
