import React from 'react'
import { Grid, Layout, PostTile, Search, Seo } from '../../components'
import { useFilter } from '../../hooks/useFilter'
import { graphql } from 'gatsby'

const Category = ({ data: { category } }) => {
    const [filteredItems, onFilter] = useFilter(category.posts)
    console.log(category)
    return (
        <Layout>
            <Seo title={`Category | ${category.slug}`} />
            {category && (
                <>
                    <Search title={category.title} field={'title'} onFilter={onFilter}>
                        {category.description}
                    </Search>
                    <Grid component={PostTile} items={category.posts} filteredItems={filteredItems} />
                    {/*<pre>{JSON.stringify(pageContext, null, 4)}</pre>*/}
                </>
            )}
        </Layout>
    )
}

export const query = graphql`
    query fetchCategory($slug: String) {
        category: datoCmsCategory(slug: { eq: $slug }) {
            title
            slug
            theme {
                hex
            }
            position
            new
            locale
            icon {
                url
                alt
                fluid(maxWidth: 600, forceBlurhash: false, imgixParams: { auto: "compress" }) {
                    aspectRatio
                    src
                    srcSet
                    sizes
                }
            }
            posts {
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
                    fluid(maxWidth: 600, forceBlurhash: false, imgixParams: { auto: "compress" }) {
                        aspectRatio
                        src
                        srcSet
                        sizes
                    }
                }
            }
            description
            id
        }
    }
`

export default Category
