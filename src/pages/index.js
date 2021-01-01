import React, { useEffect, useState } from 'react'

import Layout from '../Layout'
import SEO from '../components/Seo'
import { graphql } from 'gatsby'
import { getNodes } from '../utils/utils'

const IndexPage = ({ data }) => {
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        const items = getNodes(data, 'allDatoCmsPost')
        setPosts(items)
        console.log(posts)
    }, [])

    return (
        <Layout>
            <SEO title="Home" />
        </Layout>
    )
}

export const query = graphql`
    query {
        allDatoCmsPost {
            edges {
                node {
                    title
                    slug
                }
            }
        }
    }
`

export default IndexPage
