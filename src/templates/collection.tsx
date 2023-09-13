import * as React from "react"
import Layout from '../components/layout'
import ItemList from '../components/item-list'
import { type Product } from '../data/products';
import meta from '../data/meta'

function CollectionTemplate({ pageContext }: { pageContext: { products: Product[] } }) {
    const { products } = pageContext;
    const items = products.map(item => ({
        ...item,
        image: item.images[0],
        href: `/product/${item.url}`,
        price: item.prices[0].unit_amount,
    }))
    return <Layout><ItemList items={items} /></Layout>
}

export default CollectionTemplate;

export function Head({ pageContext }: { pageContext: { name: string } }) {
    return <title>{`Buy ${pageContext.name} | ${meta.title}`}</title>
}