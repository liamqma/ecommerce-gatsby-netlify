export type Collection = {
  id: string;
  name: string;
  image: string;
  products: string[];
  imageAspectRatio: number;
};

const c: Collection[] = [
  {
    id: 'garden-frames',
    name: 'Garden Frames',
    image: '/static/garden-frames.jpg',
    products: ['a-field-trip', 'candy-crush'],
    imageAspectRatio: 4 / 3,
  },
  {
    id: 'posies',
    name: 'Posies',
    image: '/static/posies.jpg',
    products: ['fairy-floss', 'wilds-of-nature', 'amethyst-dream', 'pure-love'],
    imageAspectRatio: 3 / 4,
  },
  {
    id: 'art-frames',
    name: 'Art Frames',
    image: '/static/art-frames.jpg',
    products: ['smile-of-the-earth', 'sunset-glow'],
    imageAspectRatio: 1,
  },
];

export default c;
