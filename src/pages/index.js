import React, { useEffect, useState } from 'react'

import Layout from '../Layout'
import SEO from '../components/Seo'
import { graphql } from 'gatsby'
import { getNodes } from '../utils/utils'
import { Cards, Heading, LinkSection, Paragraph } from '../components'
import Container from '../Layout/Container'

const IndexPage = ({ data }) => {
    const [posts, setPosts] = useState(null)
    const [cards, setCards] = useState(null)

    useEffect(() => {
        const postItems = getNodes(data, 'allDatoCmsPost')
        const cardItems = getNodes(data, 'allDatoCmsProject')

        setPosts(postItems)
        setCards(cardItems)

        console.log(posts)
    }, [])

    return (
        <Layout>
            <SEO title="Home" />
            <Container>
                <LinkSection label={'link label'} slug={'#'} positionStart>
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur.
                    </Paragraph>
                    <Heading variant={'h1'}>
                        Lorem ipsum dolor sit amet, consectetur.
                    </Heading>
                </LinkSection>
                <LinkSection label={'link label'} slug={'#'}>
                    <Cards cards={cards} />
                </LinkSection>
            </Container>
        </Layout>
    )
}

export const query = graphql`
    query {
        allDatoCmsProject {
            edges {
                node {
                    title
                    stack
                    description
                    fullDescription
                    locale
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
        }
        allDatoCmsPost {
            edges {
                node {
                    title
                    slug
                    locale
                }
            }
        }
    }
`

export default IndexPage
