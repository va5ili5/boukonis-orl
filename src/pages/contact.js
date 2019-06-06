import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import AboutData from '../../data/aboutPageData';
import { FaMapMarkerAlt, FaPhone, FaMobileAlt, FaEnvelope } from 'react-icons/fa'
import { Link as RRNavLink } from 'gatsby';
const { about } = AboutData;
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
                        <h4 style={{ color: '#00944D', fontWeight: '400' }}>Οδηγίες πρόσβασης στο Ιατρείο</h4>
                    </Col>
                </Row>
                <Row>
                    <Col md={8}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d660.8297891866558!2d23.70572295962422!3d38.0131953543677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1a32482bc191b%3A0x283ab8233a8b8f00!2zzprPic69z4PPhM6xzr3PhM6vzr3Ov8-CIM6nLiDOnM-Azr_Phc66z4zOvc63z4IsIM6pzqHOmyDOoM61z4HOuc-Dz4TOrc-BzrkgLCDOp861zrnPgc6_z4XPgc6zz4zPgiDOqc-Ezr_Pgc65zr3Ov867zrHPgc-FzrPOs86_zrvPjM6zzr_Pgg!5e0!3m2!1sen!2sgr!4v1519078611982" title="office location" width="100%" height="500" frameBorder="0" allowFullScreen></iframe>
                    </Col>
                    <Col md={4}>
                        <h4 style={{ color: '#00944D', fontWeight: '400' }}>Διεύθυνση</h4>
                        <ListGroup className="contactDetails">
                            <ListGroupItem tag={RRNavLink} to='./contact' className="border-0"><FaMapMarkerAlt size={12} style={{ marginRight: '10px', verticalAlign: 'unset' }} />{about.contactDetails.address}</ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col md={12}>
                        <h4 style={{ color: '#00944D', fontWeight: '400' }}>Προγραμματίστε το Ραντεβού σας</h4>
                        <p>Ο γιατρός δέχεται καθημερινά κατόπιν ραντεβού.</p>
                        <p>Για να προγραμματίσετε το ραντεβού σας ή για επείγουσα ΩΡΛ εξέταση καλέστε στα παρακάτω τηλέφωνα</p>
                        <ListGroup className="contactDetails">
                            <ListGroupItem tag="a" href="tel:2130575052" className="border-0"><FaPhone size={12} style={{ marginRight: '10px', verticalAlign: 'unset' }} />{about.contactDetails.phone}</ListGroupItem>
                            <ListGroupItem tag="a" href="tel:6947556211" className="border-0"><FaMobileAlt size={12} style={{ marginRight: '10px', verticalAlign: 'unset' }} />{about.contactDetails.mobile}</ListGroupItem>
                        </ListGroup>
                        <p>Επικοινωνήστε μαζί μας μέσω email για ραντεβού ή άλλες πληροφορίες στη διεύθυνση</p>
                        <ListGroup className="contactDetails">
                        <ListGroupItem tag="a" href="mailto:kostasboukonis@gmail.com" className="border-0"><FaEnvelope size={14} style={{ marginRight: '10px' }} />{about.contactDetails.email}</ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col md={12}>
                        <h4 style={{ color: '#00944D', fontWeight: '400' }}>Ωράριο λειτουργίας Ιατρείου</h4>
                        <ListGroup className="contactDetails">
                            <ListGroupItem className="border-0">Δευτέρα - Παρασκευή : 12:00 - 14:30 και 17:30 - 21:00</ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </section>
    </Layout>
)

export default Contact