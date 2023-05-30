import {
  AIRTABLE_APP_ID,
  AIRTABLE_SECRET_API_TOKEN,
  STRIPE_API_KEY,
  STRIPE_WEBHOOK_SECRET,
} from 'config';
import { buffer } from 'micro';
import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const insertToAirtable = async (fields: {
  name: string;
  message: string;
  amount: number;
}) => {
  const url = `https://api.airtable.com/v0/${AIRTABLE_APP_ID}/donations`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${AIRTABLE_SECRET_API_TOKEN}`,
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({
      records: [{ fields }],
    }),
  });

  return await response.json();
};

const stripe = new Stripe(STRIPE_API_KEY, {
  apiVersion: '2022-11-15',
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).send({ message: 'Method not allowed' });
  }
  const signature = req.headers['stripe-signature'] as string;

  if (!signature) {
    return res.status(400).send({ message: 'Missing signature' });
  }

  let event: Stripe.Event;

  try {
    const buf = await buffer(req);

    event = stripe.webhooks.constructEvent(
      buf,
      signature,
      STRIPE_WEBHOOK_SECRET
    );
  } catch (error) {
    return res.status(400).send({ message: `Invalid signature` });
  }

  if (event.type !== 'checkout.session.completed') {
    return res.status(400).send({ message: 'Invalid event type' });
  }

  const { name, message } = (
    event.data.object as {
      metadata: {
        name: string;
        message: string;
      };
    }
  ).metadata;

  const amount =
    (
      event.data.object as {
        amount_total: number;
      }
    ).amount_total / 100;

  try {
    await insertToAirtable({ name, message, amount });
  } catch (error) {
    console.log('ERR: ', error);
  }

  return res.status(200).send({ message: 'success' });
}
