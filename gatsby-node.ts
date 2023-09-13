import path from 'path';
import products from './src/data/products';
import collections from './src/data/collections';

exports.createPages = async function ({ actions }) {
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
      },
    });
  });
};
