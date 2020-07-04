import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import CardBox from '../../components/shared/cardbox'
import { Container, Row, Col } from 'reactstrap'
const IndexPage = ({ data }) => {
  const { allMarkdownRemark: articles } = data

  return (
    <Layout>
      <SEO title="Άρθρα" />
      <section className="about mt-5">
        <Container>
          <Row>
            <Col md={12}>
              <h3>'Αρθρα</h3>
            </Col>
          </Row>
          <Row>
            {articles.edges.map((carditem, i) => (
              <CardBox key={i} cardItem={carditem} category="articles" />
            ))}
          </Row>
        </Container>
      </section>
    </Layout>
  )
}
export const articlesQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/articles/" } }) {
      edges {
        node {
          id
          frontmatter {
            title
            slug
            excerpt
            image {
              publicURL
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 250) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`
export default IndexPage
