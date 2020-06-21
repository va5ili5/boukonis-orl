import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Button,
} from 'reactstrap'
import AboutData from '../../data/aboutPageData'
import {
  FaMapMarkerAlt,
  FaPhone,
  FaMobileAlt,
  FaEnvelope,
} from 'react-icons/fa'
import { Link as RRNavLink } from 'gatsby'
import GMap from '../components/shared/gmap'
const { about } = AboutData
const Contact = () => (
  <Layout>
    <SEO title="Επικοινωνία" />
    <section className="contact mt-5">
      <Container>
        <Row>
          <Col md={12}>
            <h3>Επικοινωνία</h3>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={12}>
            <Button
              tag="a"
              target="_blank"
              href="https://www.appointfix.com/5ba81ac9a264"
              color="danger"
            >
              Ραντεβού On-line
            </Button>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={12}>
            <h4 style={{ color: '#00944D', fontWeight: '400' }}>
              Οδηγίες πρόσβασης στο Ιατρείο
            </h4>
          </Col>
        </Row>
        <Row>
          <Col md={8}>
            <GMap />
          </Col>
          <Col md={4}>
            <h4 style={{ color: '#00944D', fontWeight: '400' }}>Διεύθυνση</h4>
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
            </ListGroup>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={12}>
            <h4 style={{ color: '#00944D', fontWeight: '400' }}>
              Προγραμματίστε το Ραντεβού σας
            </h4>
            <p>Ο γιατρός δέχεται καθημερινά κατόπιν ραντεβού.</p>
            <p>
              Για να προγραμματίσετε το ραντεβού σας ή για επείγουσα ΩΡΛ εξέταση
              καλέστε στα παρακάτω τηλέφωνα
            </p>
            <ListGroup className="contactDetails">
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
            </ListGroup>
            <p>
              Επικοινωνήστε μαζί μας μέσω email για ραντεβού ή άλλες πληροφορίες
              στη διεύθυνση
            </p>
            <ListGroup className="contactDetails">
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
        <Row className="mt-5">
          <Col md={12}>
            <h4 style={{ color: '#00944D', fontWeight: '400' }}>
              Ωράριο λειτουργίας Ιατρείου
            </h4>
            <ListGroup className="contactDetails">
              <ListGroupItem className="border-0">
                Δευτέρα - Παρασκευή : 12:00 - 14:30 και 17:30 - 21:00
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </section>
  </Layout>
)

export default Contact
