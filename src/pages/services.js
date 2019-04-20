import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Container, Row, Col, Media, ListGroup, ListGroupItem } from 'reactstrap'

const Services = () => (
    <Layout>
        <SEO title="Υπηρεσίες"/>
        <section className="about mt-5">
            <Container>
                <Row>
                    <Col md={12}>
                    Services
                    </Col>
                </Row>
            </Container>
        </section>
    </Layout>
)

export default Services