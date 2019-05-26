import React from 'react'
import { graphql } from 'gatsby'
import { Container, Row, Col } from 'reactstrap'
import Layout from '../components/layout'
import SEO from '../components/seo'
const Article = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title={`Άρθρα - ` + frontmatter.title} />
      <section className="article mt-5">
        <Container>
          <Row>
            <Col md={12}>
              <h3>{frontmatter.title}</h3>

              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  )
}

export const articleQuery = graphql`
  query ArticleByPath($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        slug
      }
    }
  }
`

export default Article
