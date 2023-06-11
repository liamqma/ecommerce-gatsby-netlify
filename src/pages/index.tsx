import * as React from "react"
import Layout from '../components/layout'
import ItemList from '../components/item-list'
import collections from '../data/collections';
import meta from '../data/meta'

const items = collections.map(collection => ({
    name: collection.name,
    href: `/collection/${collection.id}`,
    image: collection.image,
}));

function IndexPage() {
    return <Layout isHome><ItemList items={items} /></Layout>
}

export default IndexPage;

export function Head() {
    return <title>{`${meta.title} | Dried Flowers Australia`}</title>
}