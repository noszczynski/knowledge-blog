import React from 'react'
import { Content, Heading, Layout, LinkSection, Seo } from '../../components'
import { graphql } from 'gatsby'
import { parseHTML } from '../../utils/utils'

const Project = ({ data: { project } }) => {
    return (
        <Layout>
            <Seo title="Home" />
            <LinkSection slug={'#'}>
                <Heading variant={'h1'}>{project.title}</Heading>
                <Content>{parseHTML(project.fullDescription)}</Content>
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
