const Stripe = require('stripe');
const path = require('path');
const fs = require('fs');
const lodash = require('lodash');
require('dotenv').config({ path: path.resolve(process.cwd(), '.env.local') });

const stripe = new Stripe(process.env.STRIPE_API_KEY, {
  apiVersion: '2022-11-15',
});

const output = [];

async function main() {
  const { data: products } = await stripe.products.list({
    active: true,
    limit: 100,
  });

  const { data: prices } = await stripe.prices.list({
    active: true,
    limit: 100,
    type: 'one_time',
  });

  products.forEach((product) => {
    const productSegment = lodash.kebabCase(product.name);
    const images = fs
      .readdirSync(path.resolve(process.cwd(), 'static', 'static', productSegment))
      .filter((file) => file.endsWith('jpg'))
      .map((file) => `/static/${productSegment}/${file}`);

    output.push({
      id: product.id,
      url: productSegment,
      description: product.description,
      images: images,
      name: product.name,
      prices: prices
        .filter((price) => price.product === product.id)
        .map((price) => ({
          id: price.id,
          nickname: price.nickname,
          unit_amount: price.unit_amount / 100,
        }))
        .sort((a, b) => a.unit_amount - b.unit_amount),
      metadata: product.metadata,
    });
  });

  fs.writeFileSync('raw-data.json', JSON.stringify(output));
}

main();
