import { DonationForm } from '@/components/features/donations/DonationForm';
import { MainLayout } from '@/components/layout/MainLayout';
import { DonationsList } from '@/components/features/donations/DonationsList';
import {
  AIRTABLE_DONATIONS_TABLE_URL,
  AIRTABLE_SECRET_API_TOKEN,
} from 'config';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { TDonation, TDonationsApiResponse } from 'types';

export type THomeProps = {
  donations: TDonation[];
};

export default function Home({ donations }: THomeProps) {
  const router = useRouter();

  const handleDonation = async ({
    quantity,
    name,
    message,
  }: {
    quantity: number;
    name: string;
    message: string;
  }) => {
    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        quantity,
        name,
        message,
      }),
    });

    const res = await response.json();

    if (res.url) {
      router.push(res.url);
    }
  };

  return (
    <div className='flex h-screen'>
      <Head>
        <title>Buy me a coffee</title>
      </Head>

      <MainLayout
        banner={<MainLayout.Banner />}
        userInfo={<MainLayout.UserInfo />}
        timeline={<div>Timeline</div>}
        donationsForm={<DonationForm onDonation={handleDonation} />}
        donationsList={<DonationsList {...{ donations }}></DonationsList>}
      />
    </div>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch(AIRTABLE_DONATIONS_TABLE_URL, {
    headers: {
      Authorization: `Bearer ${AIRTABLE_SECRET_API_TOKEN}`,
      'Content-Type': 'application/json',
    },
  });

  const res: TDonationsApiResponse = await response.json();

  const donations = res.records.map(({ createdTime, id, fields }, index) => ({
    createdTime,
    name: fields.name,
    amount: fields.amount,
    message: fields?.message || '',
    id,
  }));

  return {
    props: {
      donations,
    },
  };
};
