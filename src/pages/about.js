import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {
  Container,
  Row,
  Col,
  Media,
  ListGroup,
  ListGroupItem,
} from 'reactstrap'
import {
  FaMapMarkerAlt,
  FaPhone,
  FaMobileAlt,
  FaEnvelope,
} from 'react-icons/fa'
import { Link as RRNavLink } from 'gatsby'
import AboutData from '../../data/aboutPageData'
const { about } = AboutData
const About = ({ data }) => {
  const { markdownRemark } = data
  const { html } = markdownRemark
  return (
    <Layout>
      <SEO title="Βιογραφικό" />
      <section className="about mt-5">
        <Container>
          <Row>
            <Col md={5}>
              <Media left>
                <Media
                  object
                  src={about.imageSrc}
                  alt={about.imageAlt}
                  className="img-fluid"
                />
              </Media>
            </Col>
            <Col md={7}>
              <h3>{about.title}</h3>
              {about.tagline.map((tagline, index) => {
                    return <h5 style={{ fontWeight: '400' }} key={index}>{tagline}</h5>
                })}
              {about.text.map((textLine, index) => {
                return <p key={index}>{textLine}</p>
              })}
              <ListGroup className="contactDetails">
                <ListGroupItem
                  tag={RRNavLink}
                  to="./contact"
                  className="border-0"
                >
                  <FaMapMarkerAlt
                    size={12}
                    style={{ marginRight: '10px', verticalAlign: 'unset' }}
                  />
                  {about.contactDetails.address}
                </ListGroupItem>
                <ListGroupItem
                  tag="a"
                  href="tel:2130575052"
                  className="border-0"
                >
                  <FaPhone
                    size={12}
                    style={{ marginRight: '10px', verticalAlign: 'unset' }}
                  />
                  {about.contactDetails.phone}
                </ListGroupItem>
                <ListGroupItem
                  tag="a"
                  href="tel:6947556211"
                  className="border-0"
                >
                  <FaMobileAlt
                    size={12}
                    style={{ marginRight: '10px', verticalAlign: 'unset' }}
                  />
                  {about.contactDetails.mobile}
                </ListGroupItem>
                <ListGroupItem
                  tag="a"
                  href="mailto:kostasboukonis@gmail.com"
                  className="border-0"
                >
                  <FaEnvelope size={14} style={{ marginRight: '10px' }} />
                  {about.contactDetails.email}
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
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
export const query = graphql`
  query AboutQuery {
    markdownRemark(frontmatter: { slug: { eq: "bio" } }) {
      html
      frontmatter {
        slug
      }
    }
  }
`
export default About
