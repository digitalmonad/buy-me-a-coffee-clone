export type TDonor = { name: string; amount: number; message?: string };

export type TDonationMetadata = { createdTime: string; id: string };

export type TDonationsApiResponse = {
  records: {
    createdTime: string;
    fields: TDonor;
    id: string;
  }[];
};

export type TDonation = TDonor & TDonationMetadata;
