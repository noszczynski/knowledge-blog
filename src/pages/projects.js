import React from 'react'

import Layout from '../Layout'
import { Cards, GreatParagraph, Heading, InnerContainer, LinkSection, Section, Seo } from '../components'
import styled from 'styled-components'
import { useQuery } from '../hooks/useQuery'
import { graphql } from 'gatsby'

const StyledContent = styled(Section)`
    //
`

const Projects = ({ data }) => {
    const [cards] = useQuery(data, 'allDatoCmsProject', 'pl')

    return (
        <Layout>
            <Seo title={'Projekty'} />
            <LinkSection>
                <Heading variant={'h1'}>Projekty</Heading>
                <GreatParagraph>Zobacz realizacje stron internetowych i aplikacji wykonane prywatnie oraz dla klientów.</GreatParagraph>
            </LinkSection>
            <StyledContent>
                <Cards cards={cards} />
            </StyledContent>
        </Layout>
    )
}

export const query = graphql`
    query {
        allDatoCmsProject {
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
    }
`

export default Projects
