import * as React from "react"
import Layout from '../components/layout'
import ItemList from '../components/item-list'
import type { PageProps } from "gatsby"
import FullBackgroundImage from '../components/full-background-image';

const item = {
    name: 'Item Name',
    href: '/collection',
    image: 'https://cdn.shopify.com/s/files/1/0610/0100/7272/products/Gargantua6_1500x.jpg?v=1645200403',
};


function IndexPage({ location }: PageProps) {
    return <FullBackgroundImage isUnderMaintenance />
}

export default IndexPage;