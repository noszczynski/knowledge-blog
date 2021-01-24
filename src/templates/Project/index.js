import React from 'react'
import { Heading, Layout, LinkSection, Paragraph, Seo } from '../../components'

const Project = ({ pageContext }) => {
    return (
        <Layout>
            <Seo title="Home" />
            <LinkSection slug={'#'}>
                <Heading variant={'h1'}>{pageContext.title}</Heading>
                <Paragraph>{pageContext.fullDescription}</Paragraph>
            </LinkSection>
        </Layout>
    )
}

export default Project
