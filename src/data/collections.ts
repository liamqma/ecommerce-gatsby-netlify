export type Collection = {
  id: string;
  name: string;
  image: string;
  products: string[];
  imageAspectRatio: number;
};

const c: Collection[] = [
  {
    id: 'flower-frames',
    name: 'Flower Frames',
    image: '/static/mysa-12.jpg',
    products: ['a-field-trip', 'candy-crush'],
    imageAspectRatio: 4 / 3,
  },
  {
    id: 'handtied-posies',
    name: 'Handtied Posies',
    image: '/static/mysa-03.jpg',
    products: ['fairy-floss', 'wilds-of-nature', 'amethyst-dream', 'pure-love'],
    imageAspectRatio: 3 / 4,
  },
  {
    id: 'flower-id-frames',
    name: 'Flower ID Frames',
    image: '/static/mysa-64.jpg',
    products: ['smile-of-the-earth', 'sunset-glow'],
    imageAspectRatio: 1,
  },
];

export default c;
