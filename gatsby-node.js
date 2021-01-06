const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const projectTemplate = path.resolve(`src/templates/Project/index.js`)

    const query = await graphql(`
        {
            allDatoCmsProject {
                nodes {
                    slug
                    locale
                }
            }
        }
    `)

    const {
        data: {
            allDatoCmsProject: { nodes: projects },
        },
    } = query

    await projects.forEach(project => {
        if (project.locale === 'pl') {
            createPage({
                path: `${project.slug}`,
                component: projectTemplate,
                context: {
                    ...project,
                    lang: project.locale,
                },
            })
        }
    })
}
