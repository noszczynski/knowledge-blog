import React from 'react'
import { Content, Heading, InnerContainer, Layout, LinkSection, Seo } from '../../components'
import { parseHTML } from '../../utils/utils'

const Post = ({ pageContext }) => {
    const { content, title } = pageContext

    return (
        <Layout>
            <Seo title={`Post | ${title}`} />
            <LinkSection>
                <InnerContainer>
                    <Heading variant={'h1'}>{pageContext.title}</Heading>
                </InnerContainer>
                <InnerContainer>
                    <Content>{parseHTML(content)}</Content>
                </InnerContainer>
            </LinkSection>
        </Layout>
    )
}

Post.propTypes = {}

export default Post
