import React, { useEffect, useState } from 'react'

import Layout from '../Layout'
import SEO from '../components/Seo'
import { graphql } from 'gatsby'
import { getNodes } from '../utils/utils'
import {
    Cards,
    Heading,
    LinkSection,
    PageHeader,
    Paragraph,
    Posts,
} from '../components'
import Container from '../Layout/Container'

const IndexPage = props => {
    const { data } = props
    const [posts, setPosts] = useState(null)
    const [cards, setCards] = useState(null)

    useEffect(() => {
        const postItems = getNodes(data, 'allDatoCmsPost')
        const cardItems = getNodes(data, 'allDatoCmsProject')

        console.log(data)
        console.log(postItems)

        setPosts(postItems)
        setCards(cardItems)
    }, [])

    return (
        <Layout>
            <SEO title="Home" />
            <Container>
                <LinkSection
                    label={'link label'}
                    slug={'/contact'}
                    positionStart
                >
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur.
                    </Paragraph>
                    <Heading variant={'h1'}>
                        Lorem ipsum dolor sit amet, consectetur.
                    </Heading>
                </LinkSection>
                <LinkSection label={'More projects'} slug={'/projects'}>
                    <Cards cards={cards} />
                </LinkSection>
                <LinkSection label={'More articles'} slug={'/categories'}>
                    <PageHeader>Latest Posts</PageHeader>
                    {posts && posts.length && <Posts items={posts} />}
                </LinkSection>
            </Container>
        </Layout>
    )
}

export const query = graphql`
    query {
        allDatoCmsProject(filter: { locale: { eq: "pl" } }, limit: 2) {
            nodes {
                title
                stack
                description
                fullDescription
                locale
                slug
                cover {
                    url
                    fluid(
                        maxWidth: 600
                        forceBlurhash: false
                        imgixParams: { auto: "compress" }
                    ) {
                        ...GatsbyDatoCmsFluid
                    }
                }
                themePrimary {
                    hex
                }
                themeSecondary {
                    hex
                }
            }
        }
        allDatoCmsPost(
            filter: { new: { eq: true }, locale: { eq: "pl" } }
            limit: 4
        ) {
            nodes {
                id
                new
                title
                author {
                    name
                    id
                    avatar {
                        url
                        alt
                    }
                }
                category {
                    title
                    slug
                    new
                }
                slug
                locale
                summary
                cover {
                    alt
                    url
                    fluid(
                        maxWidth: 600
                        forceBlurhash: false
                        imgixParams: { auto: "compress" }
                    ) {
                        ...GatsbyDatoCmsFluid
                    }
                }
            }
        }
    }
`

export default IndexPage
