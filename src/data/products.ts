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
    id: 'od44omns7egb3e',
    description: 'Flower ID frame - earthy colours',
    images: [
      '/static/smile-of-the-earth/24.jpg',
      '/static/smile-of-the-earth/25.jpg',
      '/static/smile-of-the-earth/61.jpg',
      '/static/smile-of-the-earth/62.jpg',
      '/static/smile-of-the-earth/63.jpg',
      '/static/smile-of-the-earth/64.jpg',
      '/static/smile-of-the-earth/65.jpg',
    ],
    name: 'Smile of the Earth',
    prices: [{ id: 'price_1NpnwUBx9e7RzSyHnFvSB7OQ', nickname: null, unit_amount: 59.95 }],
  },
  {
    id: 'od40wba88lnihy',
    description: 'Flower ID frame - pink and purple',
    images: [
      '/static/sunset-glow/26.jpg',
      '/static/sunset-glow/57.jpg',
      '/static/sunset-glow/58.jpg',
      '/static/sunset-glow/59.jpg',
      '/static/sunset-glow/60.jpg',
      '/static/sunset-glow/66.jpg',
      '/static/sunset-glow/67.jpg',
    ],
    name: 'Sunset glow',
    prices: [{ id: 'price_1NpnsZBx9e7RzSyHA3r7Xq3r', nickname: null, unit_amount: 59.95 }],
  },
  {
    id: 'od3nvr7zgxrmqy',
    description: 'See-through flower frame - colour',
    images: [
      '/static/a-field-trip/12.jpg',
      '/static/a-field-trip/13.jpg',
      '/static/a-field-trip/14.jpg',
      '/static/a-field-trip/15.jpg',
    ],
    name: 'A Field Trip',
    prices: [{ id: 'price_1NpnfdBx9e7RzSyHy4smMreG', nickname: null, unit_amount: 119.95 }],
  },
  {
    id: 'od3lsemuayzi3z',
    description: 'See-through flower frame - pink and white',
    images: [
      '/static/candy-crush/6.jpg',
      '/static/candy-crush/7.jpg',
      '/static/candy-crush/8.jpg',
      '/static/candy-crush/9.jpg',
      '/static/candy-crush/10.jpg',
      '/static/candy-crush/11.jpg',
    ],
    name: 'Candy Crush',
    prices: [{ id: 'price_1Npne3Bx9e7RzSyHjAURqJxT', nickname: null, unit_amount: 119.95 }],
  },
  {
    id: 'od3g6cuu9sx4j6',
    description: 'Pink posy',
    images: [
      '/static/fairy-floss/5.jpg',
      '/static/fairy-floss/33.jpg',
      '/static/fairy-floss/35.jpg',
      '/static/fairy-floss/37.jpg',
      '/static/fairy-floss/s.jpg',
      '/static/fairy-floss/m.jpg',
      '/static/fairy-floss/l.jpg',
    ],
    name: 'Fairy Floss',
    prices: [
      { id: 'price_1NpnZ3Bx9e7RzSyHRuQnL8HM', nickname: 'small', unit_amount: 43.95 },
      { id: 'price_1NpnZ3Bx9e7RzSyHCTiRBZSG', nickname: 'medium', unit_amount: 83.95 },
      { id: 'price_1NpnZ3Bx9e7RzSyHW5e0xdEv', nickname: 'large', unit_amount: 143.95 },
    ],
  },
  {
    id: 'od3fj37dkkppln',
    description: 'Neutral posy',
    images: [
      '/static/wild-of-nature/4.jpg',
      '/static/wild-of-nature/47.jpg',
      '/static/wild-of-nature/48.jpg',
      '/static/wild-of-nature/49.jpg',
      '/static/wild-of-nature/50.jpg',
      '/static/wild-of-nature/51.jpg',
      '/static/wild-of-nature/52.jpg',
      '/static/wild-of-nature/53.jpg',
      '/static/wild-of-nature/54.jpg',
      '/static/wild-of-nature/55.jpg',
      '/static/wild-of-nature/56.jpg',
      '/static/wild-of-nature/s.jpg',
      '/static/wild-of-nature/m.jpg',
      '/static/wild-of-nature/l.jpg',
    ],
    name: 'Wilds of Nature',
    prices: [
      { id: 'price_1NpnXjBx9e7RzSyHP4wWPXi7', nickname: 'small', unit_amount: 43.95 },
      { id: 'price_1NpnXjBx9e7RzSyHLbe8oiId', nickname: 'medium', unit_amount: 83.95 },
      { id: 'price_1NpnXjBx9e7RzSyH4D7e18at', nickname: 'large', unit_amount: 143.95 },
    ],
  },
  {
    id: 'od3c33cfrb7mfj',
    description: 'Lavender posy',
    images: [
      '/static/amethyst-dream/1.jpg',
      '/static/amethyst-dream/3.jpg',
      '/static/amethyst-dream/41.jpg',
      '/static/amethyst-dream/42.jpg',
      '/static/amethyst-dream/43.jpg',
      '/static/amethyst-dream/s.jpg',
      '/static/amethyst-dream/m.jpg',
      '/static/amethyst-dream/l.jpg',
    ],
    name: 'Amethyst Dream',
    prices: [
      { id: 'price_1NpnVhBx9e7RzSyHacOcaske', nickname: 'small', unit_amount: 43.95 },
      { id: 'price_1NpnVhBx9e7RzSyHkkNwY6rM', nickname: 'medium', unit_amount: 83.95 },
    ],
  },
  {
    id: 'od3yclricys82l',
    description: 'White posy ',
    images: [
      '/static/pure-love/20.jpg',
      '/static/pure-love/21.jpg',
      '/static/pure-love/22.jpg',
      '/static/pure-love/30.jpg',
      '/static/pure-love/s.jpg',
      '/static/pure-love/m.jpg',
      '/static/pure-love/l.jpg',
    ],
    name: 'Pure Love',
    prices: [
      { id: 'price_1NpnRcBx9e7RzSyHG0LzUyuD', nickname: 'small', unit_amount: 43.95 },
      { id: 'price_1NpnRcBx9e7RzSyHh3qANmEw', nickname: 'medium', unit_amount: 63.95 },
      { id: 'price_1NpnRcBx9e7RzSyHrGfn8w73', nickname: 'large', unit_amount: 108.95 },
    ],
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
