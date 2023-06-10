export type Collection = {
  id: string;
  name: string;
  image: string;
  products: string[];
};

const c: Collection[] = [
  {
    id: 'collection-1',
    name: 'Collection 1',
    image: '/static/1.jpg',
    products: ['nkyo1bq0u8odob', 'nhwdaxbjj6lgw5'],
  },
  {
    id: 'collection-2',
    name: 'Collection 2',
    image: '/static/2.jpg',
    products: ['nkyo1bq0u8odob', 'nhwdaxbjj6lgw5'],
  },
];

export default c;
