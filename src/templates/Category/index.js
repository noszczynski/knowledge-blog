import React from 'react'
import { Grid, Layout, PostTile, Search, Seo } from '../../components'
import { useFilter } from '../../hooks/useFilter'

const Category = ({ pageContext }) => {
    const posts = pageContext ? pageContext.posts : []
    const [filteredItems, onFilter] = useFilter(posts)

    return (
        <Layout>
            <Seo title={`Category | ${pageContext.slug}`} />
            {pageContext && (
                <>
                    <Search title={pageContext.title} field={'title'} onFilter={onFilter}>
                        {pageContext.description}
                    </Search>
                    <Grid component={PostTile} items={posts} filteredItems={filteredItems} />
                    {/*<pre>{JSON.stringify(pageContext, null, 4)}</pre>*/}
                </>
            )}
        </Layout>
    )
}

Category.propTypes = {}

export default Category
