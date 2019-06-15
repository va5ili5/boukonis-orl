/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

exports.createPages = ({ actions, graphql }) => {
    const { createPage, createRedirect } = actions;

    createRedirect({ fromPath: 'https://www.boukonis-orl.gr/*', toPath: 'https://www.boukonis-orl.gr/:splat', isPermanent: true, force: true })
    createRedirect({ fromPath: 'https://boukonis-orl.gr/*', toPath: 'https://www.boukonis-orl.gr/:splat', isPermanent: true, force: true })

    const articleTemplate = path.resolve(`src/templates/article.js`);
    const surgeryTemplate = path.resolve(`src/templates/surgery.js`);

    return graphql(`
    {
        articles: allMarkdownRemark(
            filter: { fileAbsolutePath: {regex : "\/articles/"} }
        ){
            edges
            {
                node
                {
                    html
                    id
                    frontmatter
                    {
                        title
                        slug
                    }
                }
            }
        },
        surgeries: allMarkdownRemark(
            filter: { fileAbsolutePath: {regex : "\/surgeries/"} }
        ){
            edges
            {
                node
                {
                    html
                    id
                    frontmatter
                    {
                        title
                        slug
                    }
                }
            }
        }
    }
    `).then(result => {
            if (result.errors) {
                return Promise.reject(result.errors);
            }
            result.data.articles.edges.forEach(({ node }) => {
                createPage({
                    path: `/articles/` + node.frontmatter.slug,
                    component: articleTemplate,
                    context: {
                        slug: node.frontmatter.slug
                    }
                })
            });

            result.data.surgeries.edges.forEach(({ node }) => {
                createPage({
                    path: `/surgeries/` + node.frontmatter.slug,
                    component: surgeryTemplate,
                    context: {
                        slug: node.frontmatter.slug
                    }
                });
            });
        })
}