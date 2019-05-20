import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Slider from '../components/home/slider';
import About from '../components/home/about';
import Clinic from '../components/home/clinic';
import Coops from '../components/home/coops';
import Surgeries from '../components/home/surgeries';
import Article from '../components/article'
import GMap from '../components/home/gmap';
import { Container, Row, Col } from 'reactstrap'
const IndexPage = ({ data }) => {
  const { allMarkdownRemark: articles } = data
  return(
    <Layout>
      <SEO title="Αρχική" />
      <Slider/>
      <About/>
      <Clinic/>
      <Coops/>
      <Surgeries/>
      <section className="about mt-5">
        <Container>
          <Row>
            <Col md={12}>
              <h3>'Αρθρα</h3>
            </Col>
          </Row>
          <Row>
            {articles.edges.map((article, i) => (
              <Article key={i} article={article} />
            ))}
          </Row>
        </Container>
      </section>
      <GMap/>
    </Layout>
  )
}
export const articlesQuery = graphql`
  query IndexPageQuery {
    allMarkdownRemark(limit: 1000) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            slug
            image {
              childImageSharp {
                resize {
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
