import React from  'react';
import { Container, Row, Col, Media, Button } from 'reactstrap';
import AboutImg from '../../images/about/10.png';
import { Link as RRNavLink } from 'gatsby';
import AboutData from '../../../data/indexPageData';
const { about } = AboutData;

const About = () => (
    <section className="mt-5">
    <Container>
        <Row>
            <Col md={6}>
                <h3 style={{color : '#00944D', fontWeight : '400'}}>{about.title}</h3>
                <h4 style={{fontWeight : '400'}}>{about.tagline}</h4>
                {about.text.map((textLine, index) => {
                    return <p key={index}>{textLine}</p>
                })}
                <Button tag={RRNavLink} to="/about" color="success">{about.buttonText}</Button>
            </Col>
            <Col md={6}>
                <Media left>
                    <Media object src={AboutImg} width='550px' height='550px' alt="about image" className="img-fluid" />
                </Media>
            </Col>
        </Row>
    </Container>
    </section>
);

export default About