import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Slider from '../components/home/slider'
import About from '../components/home/about'
import Clinic from '../components/home/clinic'
import Coops from '../components/home/coops'
import GMap from '../components/home/gmap'
import { Container, Row, Col } from 'reactstrap'
import CardBox from '../components/shared/cardbox';
const IndexPage = ({ data }) => {
  const articles = data.articles
  const surgeries = data.surgeries
  return (
    <Layout>
      <SEO title="Αρχική" />
      <Slider />
      <About />
      <Clinic />
      <Coops />
      <section className="about mt-5">
        <Container>
          <Row>
            <Col md={12}>
              <h3>Χειρουργικές επεμβάσεις</h3>
            </Col>
          </Row>
          <Row>
            {surgeries.edges.map((carditem, i) => (
              <CardBox key={i} cardItem={carditem} category="surgeries"/>
            ))}
          </Row>
        </Container>
      </section>
      <section className="about mt-5">
        <Container>
          <Row>
            <Col md={12}>
              <h3>'Αρθρα</h3>
            </Col>
          </Row>
          <Row>
            {articles.edges.map((carditem, i) => (
              <CardBox key={i} cardItem={carditem} category="articles"/>
            ))}
          </Row>
        </Container>
      </section>
      <GMap />
    </Layout>
  )
}
export const allQuery = graphql`
  query IndexPageQuery {
    articles: allMarkdownRemark(filter: {fileAbsolutePath: {regex : "\/articles/"}}) {
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
    surgeries: allMarkdownRemark(filter: {fileAbsolutePath: {regex : "\/surgeries/"}}) {
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
