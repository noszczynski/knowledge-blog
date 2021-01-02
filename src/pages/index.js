import React, { useEffect, useState } from 'react'

import Layout from '../Layout'
import SEO from '../components/Seo'
import { graphql } from 'gatsby'
import { getNodes } from '../utils/utils'
import { Heading, LinkSection, Paragraph } from '../components'
import Container from '../Layout/Container'

const IndexPage = ({ data }) => {
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        const items = getNodes(data, 'allDatoCmsPost')
        setPosts(items)
    }, [])

    return (
        <Layout>
            <SEO title="Home" />
            <Container>
                <LinkSection label={'link label'} slug={'#'}>
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur.
                    </Paragraph>
                    <Heading variant={'h1'}>
                        Lorem ipsum dolor sit amet, consectetur.
                    </Heading>
                </LinkSection>
            </Container>
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
