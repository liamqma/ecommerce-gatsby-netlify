import { Handler } from '@netlify/functions';
import { wrap } from '@netlify/integrations';
import Stripe from 'stripe';
import { parse } from 'url';
import { withSentry } from '@netlify/sentry';

const withIntegrations = wrap(withSentry);

if (typeof process.env.STRIPE_API_KEY !== 'string')
  throw new Error('STRIPE_API_KEY is not available.');

const stripe = new Stripe(process.env.STRIPE_API_KEY, {
  apiVersion: '2022-11-15',
});

export const handler: Handler = withIntegrations(async (event) => {
  if (!event.body) throw new Error('Incorrect input');
  const items = JSON.parse(event.body);

  const url = parse(event.rawUrl);
  const URL = `${url.protocol}//${url.host}`;

  let totalPrice = 0;

  for (const item of items) {
    const price = await stripe.prices.retrieve(item.id);
    if (!price?.unit_amount) throw new Error('Price not found');
    totalPrice += price.unit_amount * item.qty;
  }

  if (totalPrice >= 20000) {
  }

  const shippingRate =
    totalPrice >= 20000 ? 'shr_1O65A3Bx9e7RzSyHuq5qw4C4' : 'shr_1O659yBx9e7RzSyHs7UItlhz';

  const lineItems = items.map((item) => {
    return {
      price: item.id,
      quantity: item.qty,
      tax_rates: ['txr_1O65AABx9e7RzSyHxw87gvEg'],
    };
  });

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: 'payment',
    success_url: `${URL}/thank-you?success=true`,
    cancel_url: `${URL}/cart?canceled=true`,
    shipping_address_collection: { allowed_countries: ['AU'] },
    shipping_options: [
      {
        shipping_rate: shippingRate,
      },
    ],
    automatic_tax: {
      enabled: false,
    },
    allow_promotion_codes: true,
  });

  return {
    statusCode: 200,
    body: JSON.stringify({
      url: session.url,
    }),
  };
});
