import React from 'react'
import Layout from '../components/layout'
import ListGroupCollapse from '../components/shared/listgroupcollapse'
import SEO from '../components/seo'
import { Container, Row, Col } from 'reactstrap'
import ServiceData from '../../data/servicesPageData'
const { service } = ServiceData;
const Services = () => (
    <Layout>
        <SEO title="Υπηρεσίες" />
        <section className="services mt-5">
            <Container>
                <Row>
                    <Col md={12}>
                        <h3>{service.title}</h3>
                            {service.services.map((serviceItem, index) => {
                                return <ListGroupCollapse key={index} items={serviceItem}/>
                            })}
                    </Col>
                </Row>
            </Container>
        </section>
    </Layout>
)

export default Services