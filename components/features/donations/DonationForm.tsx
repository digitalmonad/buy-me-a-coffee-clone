import { DONATION_IN_CENTS, MAX_DONATION_IN_CENTS } from 'config';

import {
  ChangeEvent,
  ChangeEventHandler,
  FocusEventHandler,
  useRef,
  useState,
} from 'react';

export type TDonationFormProps = {
  onDonation: ({
    quantity,
    name,
    message,
  }: {
    quantity: number;
    name: string;
    message: string;
  }) => void;
};

export const DonationForm = ({ onDonation }: TDonationFormProps) => {
  const [quantity, setQuantity] = useState(1);
  const inputRef = useRef<HTMLInputElement>(null);

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const presets = [1, 3, 5];

  const handleQuantityChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.value === '') {
      setQuantity(1);
    } else {
      const value = parseInt(e.target.value);
      if (value <= 0) {
        return;
      }
      setQuantity(parseInt(e.target.value));
    }
  };

  const handleQuantityBlur: FocusEventHandler<HTMLInputElement> = (e) => {
    if (!inputRef.current) return;

    if (e.target.value === '') {
      inputRef.current.value = '1';
      setQuantity(1);
    }

    const value = parseInt(e.target.value);
    if (value <= 0) {
      inputRef.current.value = '1';
      setQuantity(1);
    }
  };

  const handleSelectQuantity = (preset: number) => () => {
    setQuantity(preset);
    if (inputRef.current) {
      inputRef.current.value = String(preset);
    }
  };

  const handleDonateButtonClick = () => {
    onDonation({ quantity, name, message });
  };

  return (
    <div className='bg-paper p-3 border rounded-md border-gray-200'>
      <h3 className='mb-3 text-lg font-bold'>Buy me a cup of coffee</h3>
      <div className='mb-3 flex items-center bg-primary-50 p-4 rounded-sm border border-primary-200'>
        <span className='text-4xl'>☕</span>
        <span className='mx-2'>x</span>
        {presets.map((preset) => (
          <button
            key={preset}
            className={`h-10 w-10 rounded-full bg-white mx-1 text-primary-800 border border-primary-200 transition-colors ${
              preset === quantity &&
              '!text-white !bg-primary-800 !border-primary-400 border-none'
            }`}
            onClick={handleSelectQuantity(preset)}
          >
            {preset}
          </button>
        ))}
        <input
          ref={inputRef}
          type='number'
          min={1}
          defaultValue={1}
          max={MAX_DONATION_IN_CENTS / DONATION_IN_CENTS}
          onChange={handleQuantityChange}
          onBlur={handleQuantityBlur}
          className='ml-3 py-2  text-end border border-gray-200 rounded-sm'
        />
      </div>
      <div>
        <label htmlFor='name' className='hidden'>
          Name
        </label>
        <input
          placeholder='Type your name'
          className='mb-3 p-2 w-full rounded-sm border border-gray-200 bg-slate-100'
          type='text'
          id='name'
          value={name}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setName(e.target.value);
          }}
        />
        <label htmlFor='message' className='hidden'>
          Message
        </label>
        <textarea
          style={{ resize: 'none' }}
          placeholder='Leave me a message (if you want)...'
          className='mb-3 p-2 w-full rounded-sm border border-gray-200 bg-slate-100'
          id='message'
          value={message}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
            setMessage(e.target.value);
          }}
        />
      </div>
      <button
        onClick={handleDonateButtonClick}
        className='p-3 text-white font-bold rounded-md bg-green-400 w-full border border-green-500 hover:bg-green-300 transition-colors'
      >
        Donate {(quantity * DONATION_IN_CENTS) / 100} $
      </button>
    </div>
  );
};
