import { format, parseISO } from 'date-fns';
import { TDonation } from '../../../types';

export type TDonationsListProps = {
  donations: TDonation[];
};

export const DonationsList = ({ donations }: TDonationsListProps) => {
  let content;

  if (donations.length < 1) {
    content = (
      <div className='flex flex-1 justify-center items-center'>
        No donations so far
      </div>
    );
  } else {
    content = (
      <ul className='text-sm font-medium text-primary h-[220px] overflow-scroll'>
        {donations.map((donation: TDonation) => (
          <li
            key={donation.id}
            className='w-full px-2 py-2 border bg-slate-100 border-slate-200 rounded-sm mb-2'
          >
            <div className='flex justify-between'>
              <h3 className='font-bold'>{donation.name}</h3>
              <p className='text-sm text-gray-300'>
                {format(parseISO(donation.createdTime), 'MM/dd/yyyy')}
              </p>
            </div>
            <p className='text-sm text-gray-500'>{donation.message}</p>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className='w-full flex flex-col h-[220px] bg-white border border-gray-200 rounded-md p-3'>
      <h3 className='mb-3 text-lg font-bold'>Last donors</h3>
      {content}
    </div>
  );
};
