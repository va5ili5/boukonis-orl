import React from 'react';
import { Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import { Link as RRNavLink } from 'gatsby';
import SurgeriesData from '../../../data/indexPageData';
const { surgeries } = SurgeriesData;


const Surgeries = () => (
    <section className="mt-5 mb-5">
        <Container>
            <Row>
                <Col md={12}>
                    <h3>Χειρουργικές επεμβάσεις</h3>
                </Col> 
            </Row>    
            <Row>
                {surgeries.map((surgery, index) => {
                    return(
                        <Col key={index} lg={3} md={4} className="mb-4">
                            <Card className="h-100">
                                <CardImg top width="250px" height="250px" src={surgery.imagesrc} alt={surgery.imagealt}></CardImg>
                                <CardBody>
                                    <CardTitle>{surgery.surgeryname}</CardTitle>
                                    <CardText>{surgery.description}</CardText>
                                    <Button tag={RRNavLink} to={surgery.surgeryurl} color="success">Περισσότερα</Button>
                                </CardBody>
                            </Card>
                        </Col>
                )})}
            </Row>
            <Row>
                <Col md={12} className="mb-4 d-flex justify-content-center">
                    <Button tag={RRNavLink} to='/' color="success">Όλες οι χειρουργικές επεμβάσεις</Button>
                </Col>
            </Row>
        </Container>
    </section>
)

export default Surgeries