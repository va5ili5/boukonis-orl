import React from 'react'
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
import AboutData from '../../../data/aboutPageData'
const { about } = AboutData

const About = () => (
  <section className="about mt-5">
    <Container>
      <Row>
        <Col md={7}>
          <h3>{about.title}</h3>
          {about.tagline.map((tagline, index) => {
                    return <h5 style={{ fontWeight: '400' }} key={index}>{tagline}</h5>
                })}
          {about.text.map((textLine, index) => {
            return <p key={index}>{textLine}</p>
          })}
          <ListGroup className="contactDetails">
            <ListGroupItem tag={RRNavLink} to="./contact" className="border-0">
              <FaMapMarkerAlt
                size={12}
                style={{ marginRight: '10px', verticalAlign: 'unset' }}
              />
              {about.contactDetails.address}
            </ListGroupItem>
            <ListGroupItem tag="a" href="tel:2130575052" className="border-0">
              <FaPhone
                size={12}
                style={{ marginRight: '10px', verticalAlign: 'unset' }}
              />
              {about.contactDetails.phone}
            </ListGroupItem>
            <ListGroupItem tag="a" href="tel:6947556211" className="border-0">
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
      </Row>
    </Container>
  </section>
)

export default About
