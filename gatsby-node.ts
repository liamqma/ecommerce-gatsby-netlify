import path from 'path';
import products from './src/data/products';
import collections from './src/data/collections';

exports.createPages = async function ({ actions }) {
  actions.createPage({
    path: 'shop-all',
    component: path.resolve(`./src/templates/collection.tsx`),
    context: {
      products,
      name: 'Shop All',
      imageAspectRatio: 4 / 3,
    },
  });

  products.forEach((product) => {
    actions.createPage({
      path: `/product/${product.url}`,
      component: path.resolve(`./src/templates/product.tsx`),
      context: {
        product,
      },
    });
  });

  collections.forEach((collection) => {
    const p = products.filter((product) => {
      return collection.products.includes(product.url);
    });

    actions.createPage({
      path: `/collection/${collection.id}`,
      component: path.resolve(`./src/templates/collection.tsx`),
      context: {
        products: p,
        name: collection.name,
        imageAspectRatio: collection.imageAspectRatio,
      },
    });
  });
};
