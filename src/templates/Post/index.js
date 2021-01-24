import React from 'react'
import { Layout, Seo } from '../../components'

const Post = ({ pageContext }) => {
    return (
        <Layout>
            <Seo title={`Post | ${'[[ TITLE ]]'}`} />
        </Layout>
    )
}

Post.propTypes = {}

export default Post
