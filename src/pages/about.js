import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Container, Row, Col, Media, ListGroup, ListGroupItem } from 'reactstrap'
import { FaMapMarkerAlt, FaPhone, FaMobileAlt, FaEnvelope } from 'react-icons/fa'
import { Link as RRNavLink } from 'gatsby';
import AboutData from '../../data/aboutPageData';
const { about, education } = AboutData;

const About = () => (
        <Layout>
            <SEO title="Βιογραφικό"/>
            <section className="about mt-5">
            <Container>
                <Row>
                    <Col md={4}>
                        <Media left>
                            <Media object src={about.imageSrc} width='550px' height='550px' alt={about.imageAlt} className="img-fluid" />
                        </Media>
                    </Col>
                    <Col md={8}>
                        <h3 style={{color : '#00944D', fontWeight : '400'}}>{about.title}</h3>
                        <h4 style={{fontWeight : '400'}}>{about.tagline}</h4>
                        {about.text.map((textLine, index) => {
                            return <p key={index}>{textLine}</p>
                        })}
                        <ListGroup className="contactDetails">
                            <ListGroupItem tag={RRNavLink} to='./contact' className="border-0"><FaMapMarkerAlt size={12} style={{marginRight:'10px', verticalAlign:'unset'}}/>{about.contactDetails.address}</ListGroupItem>
                            <ListGroupItem tag="a" href="tel:2130575052" className="border-0"><FaPhone size={12} style={{marginRight:'10px', verticalAlign:'unset'}}/>{about.contactDetails.phone}</ListGroupItem>
                            <ListGroupItem tag="a" href="tel:6947556211" className="border-0"><FaMobileAlt size={12} style={{marginRight:'10px', verticalAlign:'unset'}}/>{about.contactDetails.mobile}</ListGroupItem>
                            <ListGroupItem tag="a" href="mailto:kostasboukonis@gmail.com" className="border-0"><FaEnvelope size={14} style={{marginRight:'10px'}}/>{about.contactDetails.email}</ListGroupItem>
                        </ListGroup>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col md={8}>
                        <h5 style={{fontWeight : '400', textDecoration:'underline', textTransform:'uppercase'}}>{education.title}</h5>
                        <ListGroup>
                            {education.details.map((item, index) => {
                                     return <ListGroupItem key={index} style={{listStyleType:'decimal', listStylePosition:'inside', display:'list-item'}} className="border-0" dangerouslySetInnerHTML={{ __html: item.item }}></ListGroupItem>
                                     
                                })}
                        </ListGroup>
                    </Col>
                    <Col md={4}>
                    <Media left>
                            <Media object src={education.imageSrc} width='550px' height='550px' alt={education.imageAlt} className="img-fluid" />
                        </Media>
                    </Col>
                </Row>
            </Container>
            </section>
        </Layout>
    
);

export default About;
