import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Container, Row, Col, Media, ListGroup, ListGroupItem } from 'reactstrap'
import services from '../../data/menu'
import { Link as RRNavLink } from 'gatsby'
const Services = () => (
    <Layout>
        <SEO title="Υπηρεσίες"/>
        <section className="services mt-5">
            <Container>
                <Row>
                    <Col md={12}>
                    <h3 style={{color : '#00944D', fontWeight : '400'}}>{services[2].title}</h3>
                    <ListGroup>
                    {services[2].sublinks.map((service, index) => {
                    return (
                        <ListGroupItem tag={RRNavLink} to={service.url} key={index} className="border-0">
                            <u>{service.title}</u>
                        </ListGroupItem>
                    )
                    })}
          </ListGroup>
                    </Col>
                </Row>
            </Container>
        </section>
    </Layout>
)

export default Services