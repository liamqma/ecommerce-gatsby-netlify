import * as React from "react"
import Layout from '../components/layout'
import ItemList from '../components/item-list'
import { type Product } from '../data/products';


function CollectionTemplate({ pageContext }: { pageContext: { products: Product[] } }) {
    const { products } = pageContext;
    const items = products.map(item => ({
        ...item,
        image: item.images[0],
        href: `/product/${item.id}`,
        price: item.prices[0].unit_amount,
    }))
    return <Layout><ItemList items={items} /></Layout>
}

export default CollectionTemplate;