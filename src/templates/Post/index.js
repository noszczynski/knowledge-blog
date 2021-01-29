import React from 'react'
import { Code, Heading, InnerContainer, Layout, LinkSection, Seo } from '../../components'
import { parseHTML } from '../../utils/utils'
import styled from 'styled-components'

const StyledContent = styled.article`
    p {
        font-size: 1.25rem;
    }
`

const Post = ({ pageContext }) => {
    // console.log(pageContext)
    const { content, title } = pageContext

    return (
        <Layout>
            <Seo title={`Post | ${title}`} />
            <LinkSection>
                <InnerContainer>
                    <Heading variant={'h1'}>{pageContext.title}</Heading>
                </InnerContainer>
                <InnerContainer>
                    <Code>
                        <StyledContent>{parseHTML(content)}</StyledContent>
                    </Code>
                </InnerContainer>
                {/*<pre>{JSON.stringify(pageContext, null, 4)}</pre>*/}
            </LinkSection>
        </Layout>
    )
}

Post.propTypes = {}

export default Post
