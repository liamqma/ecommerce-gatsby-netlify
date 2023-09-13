export type Collection = {
  id: string;
  name: string;
  image: string;
  products: string[];
};

const c: Collection[] = [
  {
    id: 'flower-frames',
    name: 'Flower Frames',
    image: '/static/mysa-12.jpg',
    products: ['a-field-trip', 'candy-crush'],
  },
  {
    id: 'handtied-posies',
    name: 'Handtied Posies',
    image: '/static/mysa-03.jpg',
    products: ['fairy-floss', 'wilds-of-nature', 'amethyst-dream', 'pure-love'],
  },
  {
    id: 'flower-id-frames',
    name: 'Flower ID Frames',
    image: '/static/mysa-64.jpg',
    products: ['smile-of-the-earth', 'sunset-glow'],
  },
];

export default c;
