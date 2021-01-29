const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const projectTemplate = path.resolve(`src/templates/Project/index.js`)
    const categoryTemplate = path.resolve(`src/templates/Category/index.js`)
    const postTemplate = path.resolve(`src/templates/Post/index.js`)

    const query = await graphql(`
        {
            allDatoCmsPost {
                nodes {
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
                        fluid(maxWidth: 1280, forceBlurhash: false, imgixParams: { auto: "compress" }) {
                            aspectRatio
                            src
                            srcSet
                            sizes
                        }
                    }
                }
            }
            allDatoCmsProject {
                nodes {
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
            allDatoCmsCategory {
                nodes {
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
        }
    `)

    const { data } = query
    const {
        allDatoCmsCategory: { nodes: categories },
        allDatoCmsPost: { nodes: posts },
        allDatoCmsProject: { nodes: projects },
    } = data

    await projects.forEach(project => {
        if (project.locale === 'pl') {
            createPage({
                path: `projects/${project.slug}`,
                component: projectTemplate,
                context: {
                    ...project,
                    lang: project.locale,
                },
            })
        }
    })

    await posts.forEach(post => {
        if (post.locale === 'pl') {
            createPage({
                path: `blog/${post.category.slug}/${post.slug}`,
                component: postTemplate,
                context: {
                    ...post,
                    lang: post.locale,
                },
            })
        }
    })

    await categories.forEach(category => {
        if (category.locale === 'pl') {
            createPage({
                path: `blog/${category.slug}`,
                component: categoryTemplate,
                context: {
                    ...category,
                    lang: category.locale,
                },
            })
        }
    })
}
