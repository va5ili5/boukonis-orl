/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;

    const articleTemplate = path.resolve(`src/templates/article.js`);

    return graphql(`{
        allMarkdownRemark(limit: 1000)
        {
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
    }`)
        .then(res => {
            if (res.errors) {
                return Promise.reject(res.errors);
            }

            const articles = res.data.allMarkdownRemark.edges

            articles.forEach(({ node }) => {
                createPage({
                    path: `/articles/` + node.frontmatter.slug,
                    component: articleTemplate,
                    context: {
                        slug: node.frontmatter.slug
                    }
                })
            })
        })
}