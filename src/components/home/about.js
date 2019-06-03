import React from  'react';
import { Container, Row, Col, Media, Button } from 'reactstrap';
import AboutImg from '../../images/about/10.jpg';
import { Link as RRNavLink } from 'gatsby';
import AboutData from '../../../data/indexPageData';
const { about } = AboutData;

const About = () => (
    <section className="mt-5">
    <Container>
        <Row>
            <Col md={7}>
                <h3>{about.title}</h3>
                {about.tagline.map((tagline, index) => {
                    return <h5 key={index}>{tagline}</h5>
                })}
                {about.text.map((textLine, index) => {
                    return <p key={index}>{textLine}</p>
                })}
                {about.clinicinfo.map((info, index) => {
                    return <p key={index}>{info}</p>
                })}
                <Button tag={RRNavLink} to="/about" color="success">{about.buttonText}</Button>
            </Col>
            <Col md={5}>
                <Media left>
                    <Media object src={AboutImg} width='450px' alt="about image" className="img-fluid" />
                </Media>
            </Col>
        </Row>
    </Container>
    </section>
);

export default About