import React from 'react'

import Layout from '../Layout'
import { graphql } from 'gatsby'
import { Cards, Heading, LinkSection, PageHeader, GreatParagraph, Posts, Seo, InnerContainer, Distinction } from '../components'
import { useQuery } from '../hooks/useQuery'

const IndexPage = ({ data }) => {
    const [posts] = useQuery(data, 'allDatoCmsPost', 'pl')
    const [cards] = useQuery(data, 'allDatoCmsProject', 'pl')

    return (
        <Layout>
            <Seo title="Home" />
            <InnerContainer>
                <LinkSection label={'link label'} slug={'/contact'} positionStart>
                    <GreatParagraph>Lorem ipsum dolor sit amet, consectetur.</GreatParagraph>
                    <Heading variant={'h1'}>Lorem ipsum dolor sit amet, consectetur.</Heading>
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
