import rawP from '../../raw-data.json';

export type Price = {
  id: string;
  nickname: string | null;
  unit_amount: number;
};

export type Product = {
  id: string;
  description: string;
  url: string;
  images: [string, ...string[]];
  name: string;
  prices: [Price, ...Price[]];
};

const p = rawP as Product[];

export function findPrice(priceId: string): { product?: Product; price?: Price } {
  let price: Price | undefined;
  const product = p.find((product) => {
    price = product.prices.find(({ id }) => id === priceId);
    if (price) {
      return product;
    }
    return undefined;
  });

  return { product, price };
}

export default p;
