import React from 'react'
import { graphql } from 'gatsby'

import { useQuery } from '../hooks/useQuery'
import { CategoryTile, Grid, Layout, Search, Seo } from '../components'
import { useFilter } from '../hooks/useFilter'

const Blog = ({ data }) => {
    const [categories] = useQuery(data, 'allDatoCmsCategory', 'pl')
    const [filteredCategories, onFilter] = useFilter(categories)

    return (
        <Layout>
            <Seo title="Blog" />
            <Search title={'Blog'} onFilter={onFilter} field={'title'}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, voluptatum.
            </Search>
            <Grid items={categories} filteredItems={filteredCategories} component={CategoryTile} />
        </Layout>
    )
}

export const query = graphql`
    query {
        allDatoCmsCategory(sort: { fields: position }) {
            nodes {
                id
                title
                slug
                theme {
                    hex
                }
                position
                new
                locale
                icon {
                    url
                }
                description
                posts {
                    slug
                    id
                }
            }
        }
    }
`

export default Blog
