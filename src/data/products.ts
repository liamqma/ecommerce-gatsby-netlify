export type Price = {
  id: string;
  nickname: string | null;
  unit_amount: number;
};

export type Product = {
  id: string;
  description: string;
  images: [string, ...string[]];
  name: string;
  prices: [Price, ...Price[]];
};

const p: Product[] = [
  {
    id: 'nkyo1bq0u8odob',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus posuere nec magna eget aliquam. Fusce at volutpat ipsum. Curabitur placerat ornare quam, eget rhoncus est lobortis non. Phasellus eleifend velit nulla, ut interdum turpis lobortis.',
    images: ['/static/1.jpg', '/static/2.jpg'],
    name: 'Flower Plant',
    prices: [
      { id: 'price_1MZtglBx9e7RzSyHvkmq5o0M', nickname: 'Small', unit_amount: 199 },
      { id: 'price_1NEKr2Bx9e7RzSyHyHRAJhVl', nickname: 'Large', unit_amount: 399 },
    ],
  },
  {
    id: 'nhwdaxbjj6lgw5',
    description:
      'We believe in creating pieces that are respectful to the environment they are celebrating. The Luna Bouquet features rustic blush tones of Australian native myrtle, creamy hues of natural rice flower, and the dreamy translucent petals of lunaria. ',
    images: ['/static/2.jpg', '/static/1.jpg'],
    name: 'Everlasting Luna Bouquet',
    prices: [{ id: 'price_1MXMkEBx9e7RzSyHf1WhESI3', nickname: null, unit_amount: 99 }],
  },
];

export function findPrice(priceId: string): { product?: Product; price?: Price } {
  let price: Price | undefined;
  const product = p.find((product) => {
    price = product.prices.find(({ id }) => id === priceId);
    if (price) return p;
    return undefined;
  });
  return { product, price };
}

export default p;
