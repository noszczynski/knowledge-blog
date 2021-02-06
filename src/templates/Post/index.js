import React from 'react'
import { Content, Heading, InnerContainer, Layout, LinkSection, Seo } from '../../components'
import { parseHTML } from '../../utils/utils'
import { graphql } from 'gatsby'

const Post = ({ data: { post } }) => {
    const { content, title } = post

    console.log(post)

    return (
        <Layout>
            <Seo title={`Post | ${title}`} />
            <LinkSection>
                <InnerContainer>
                    <Heading variant={'h1'}>{title}</Heading>
                </InnerContainer>
            </LinkSection>
            <Content>{parseHTML(content)}</Content>
        </Layout>
    )
}

export const query = graphql`
    query fetchPost($slug: String) {
        post: datoCmsPost(slug: { eq: $slug }) {
            content
            summary
            category {
                slug
                title
                id
                description
            }
            author {
                id
                name
                theme {
                    hex
                }
                locale
                description
            }
            id
            locale
            new
            position
            slug
            title
            cover {
                url
                alt
                fluid(maxWidth: 1280, forceBlurhash: false, imgixParams: { auto: "compress" }) {
                    aspectRatio
                    src
                    srcSet
                    sizes
                }
            }
        }
    }
`

export default Post
