import React from  'react';
import { Container, Row, Col, Media } from 'reactstrap';
import AboutImg from '../../images/about/10.png';

const About = () => (
    <section className="mt-5">
    <Container>
        <Row>
            <Col md={6}>
                <h3>Κωνσταντίνος Χ. Μπουκόνης</h3>
                <h4>Ωτορινολαρυγγολόγος - Χειρουργός Κεφαλής & Τραχήλου</h4>
            </Col>
            <Col md={6}>
                <Media left>
                    <Media object src={AboutImg} alt="about image" className="img-fluid" />
                </Media>
            </Col>
        </Row>
    </Container>
    </section>
);

export default About