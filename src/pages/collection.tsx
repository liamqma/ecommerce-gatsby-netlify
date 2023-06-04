import * as React from "react"
import Layout from '../components/layout'
import ItemList from '../components/item-list'
import productsData from "../data/products";

const items = productsData.map(item => ({
    ...item,
    image: item.images[0],
    href: `/product/${item.id}`,
    price: item.prices[0].unit_amount,
}))

function IndexPage() {
    return <Layout><ItemList items={items} /></Layout>
}

export default IndexPage;