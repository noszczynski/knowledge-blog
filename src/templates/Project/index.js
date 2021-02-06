import React from 'react'
import { Heading, Layout, LinkSection, Paragraph, Seo } from '../../components'
import { graphql } from 'gatsby'

const Project = ({ data: { project } }) => {
    return (
        <Layout>
            <Seo title="Home" />
            <LinkSection slug={'#'}>
                <Heading variant={'h1'}>{project.title}</Heading>
                <Paragraph>{project.fullDescription}</Paragraph>
            </LinkSection>
        </Layout>
    )
}

export const query = graphql`
    query fetchProject($slug: String) {
        project: datoCmsProject(slug: { eq: $slug }) {
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
            description
            fullDescription
            id
            locale
            position
            slug
            stack
            themePrimary {
                hex
            }
            themeSecondary {
                hex
            }
            title
        }
    }
`

export default Project
