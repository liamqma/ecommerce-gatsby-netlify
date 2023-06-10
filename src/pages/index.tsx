import * as React from "react"
import Layout from '../components/layout'
import ItemList from '../components/item-list'
import collections from '../data/collections';

const items = collections.map(collection => ({
    name: collection.name,
    href: `/collection/${collection.id}`,
    image: collection.image,
}));

function IndexPage() {
    return <Layout isHome><ItemList items={items} /></Layout>
}

export default IndexPage;