const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const projectTemplate = path.resolve(`src/templates/Project/index.js`)
    const categoryTemplate = path.resolve(`src/templates/Category/index.js`)
    const postTemplate = path.resolve(`src/templates/Post/index.js`)

    const query = await graphql(`
        {
            allDatoCmsPost(filter: { locale: { eq: "pl" } }) {
                edges {
                    node {
                        id
                        slug
                        category {
                            slug
                        }
                    }
                }
            }
            allDatoCmsProject(filter: { locale: { eq: "pl" } }) {
                edges {
                    node {
                        id
                        slug
                    }
                }
            }
            allDatoCmsCategory(filter: { locale: { eq: "pl" } }) {
                edges {
                    node {
                        id
                        slug
                    }
                }
            }
        }
    `)

    const categories = query.data.allDatoCmsCategory.edges
    const posts = query.data.allDatoCmsPost.edges
    const projects = query.data.allDatoCmsProject.edges

    await projects.forEach(({ node }) => {
        createPage({
            path: `projekty/${node.slug}`,
            component: projectTemplate,
            context: {
                slug: node.slug,
            },
        })
    })

    await posts.forEach(({ node }) => {
        createPage({
            path: `blog/${node.category.slug}/${node.slug}`,
            component: postTemplate,
            context: {
                slug: node.slug,
            },
        })
    })

    await categories.forEach(({ node }) => {
        createPage({
            path: `blog/${node.slug}`,
            component: categoryTemplate,
            context: {
                slug: node.slug,
            },
        })
    })
}
