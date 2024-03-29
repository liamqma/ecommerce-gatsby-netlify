import * as React from 'react';
import Layout from '../components/layout';
import ItemList from '../components/item-list';
import { type Product } from '../data/products';
import meta from '../data/meta';

function CollectionTemplate({
  pageContext,
}: {
  pageContext: { products: Product[]; imageAspectRatio: number };
}) {
  const { products, imageAspectRatio } = pageContext;
  const items = products.map((item) => ({
    ...item,
    image: item.images[0],
    href: `/product/${item.url}`,
    price: item.prices[0].unit_amount,
  }));
  return (
    <Layout>
      <ItemList numOfColumnsDesktop={2} imageAspectRatio={imageAspectRatio} items={items} />
    </Layout>
  );
}

export default CollectionTemplate;

export function Head({ pageContext }: { pageContext: { name: string } }) {
  return (
    <>
      <title>{`${pageContext.name} | ${meta.title}`}</title>
      <meta
        name="description"
        content={`Experience nature's enduring beauty with ${meta.title}. Our consciously sourced, naturally dried, and uniquely crafted flowers bring a breath of freshness to your home. Committed to preserving nature with sustainable sourcing and chemical-free methods across Australia.`}
      />
    </>
  );
}
