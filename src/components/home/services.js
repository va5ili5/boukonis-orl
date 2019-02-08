import React from 'react';
import { Container, Row, Col, CardDeck, Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Link as RRNavLink } from 'gatsby';
import ServicesData from '../../../data/indexPageData';
const { services } = ServicesData;


const Services = () => (
    <section className="mt-5">
        <Container>
            <Row>
            <CardDeck>
                {services.map((service, index) => {
                    return( 
                        <Card key={index}>
                            <CardImg top width="100%" src={service.imagesrc} alt={service.imagealt}></CardImg>
                            <CardBody>
                                <CardTitle>{service.servicename}</CardTitle>
                                <CardText>{service.description}</CardText>
                                <Button tag={RRNavLink} to={service.serviceurl} color="success">Περισσότερα</Button>
                            </CardBody>
                        </Card>
                )})}
            </CardDeck>
            </Row>
        </Container>
    </section>
)

export default Services