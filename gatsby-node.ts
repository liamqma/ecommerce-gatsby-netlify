import path from "path"
import products from './src/data/products'

exports.createPages = async function ({ actions }) {
  products.forEach(product => {
    actions.createPage({
      path: `/product/${product.id}`,
      component: path.resolve(`./src/templates/product.tsx`),
      context: {
        product,
      },
    })
  });
}