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
    products: ['od3nvr7zgxrmqy', 'od3lsemuayzi3z'],
  },
  {
    id: 'handtied-posies',
    name: 'Handtied Posies',
    image: '/static/mysa-03.jpg',
    products: ['od3g6cuu9sx4j6', 'od3fj37dkkppln', 'od3c33cfrb7mfj', 'od3yclricys82l'],
  },
  {
    id: 'flower-id-frames',
    name: 'Flower ID Frames',
    image: '/static/mysa-64.jpg',
    products: ['od44omns7egb3e', 'od40wba88lnihy'],
  },
];

export default c;
