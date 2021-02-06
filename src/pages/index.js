import React from 'react'

import Layout from '../Layout'
import { graphql } from 'gatsby'
import { Cards, Heading, LinkSection, PageHeader, GreatParagraph, Posts, Seo, InnerContainer, Distinction, Paragraph } from '../components'
import { useQuery } from '../hooks/useQuery'

const IndexPage = ({ data }) => {
    const [posts] = useQuery(data, 'allDatoCmsPost', 'pl')
    const [cards] = useQuery(data, 'allDatoCmsProject', 'pl')

    return (
        <Layout>
            <Seo title="Home" />
            <InnerContainer>
                <LinkSection label={'Więcej o mnie'} slug={'/about'} positionStart>
                    <Heading variant={'h1'}>
                        Cześć ✋🏻
                        <br />
                        Mam na imię Adam i jestem programistą Javascript z Krakowa.
                    </Heading>
                    <GreatParagraph>
                        Znajdujesz się na mojej stronie osobistej, którą spokojnie mogę nazwać blogiem
                        <br />z powodu umieszczenia tutaj mojej bazy wiedzy i doświadczenia w formie postów podzielonych na kategorie.
                    </GreatParagraph>
                </LinkSection>
            </InnerContainer>
            <LinkSection label={'Więcej projektów'} slug={'/projekty'}>
                <Cards cards={cards} />
            </LinkSection>
            <LinkSection label={'Więcej artykułów'} slug={'/blog'}>
                <PageHeader>Latest Posts</PageHeader>
                {posts && posts.length > 0 && <Posts items={posts} />}
            </LinkSection>
            <LinkSection>
                <a href={'mailto:adam.noszczynski@gmail.com'}>
                    <Heading variant={'h2'}>
                        <Distinction>adam.noszczynski@gmail.com</Distinction>
                    </Heading>
                </a>
            </LinkSection>
        </Layout>
    )
}

export const query = graphql`
    query {
        allDatoCmsProject(limit: 4) {
            nodes {
                title
                stack
                description
                fullDescription
                locale
                slug
                cover {
                    url
                    alt
                    fluid(maxWidth: 600, forceBlurhash: false, imgixParams: { auto: "compress" }) {
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
        allDatoCmsPost(filter: { new: { eq: true } }, limit: 8) {
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
                    fluid(maxWidth: 600, forceBlurhash: false, imgixParams: { auto: "compress" }) {
                        ...GatsbyDatoCmsFluid
                    }
                }
            }
        }
    }
`

export default IndexPage
