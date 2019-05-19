import React from 'react'
import Layout from '../components/layout'
import ListGroupCollapse from '../components/shared/listgroupcollapse'
import SEO from '../components/seo'
import { Container, Row, Col } from 'reactstrap'
import SurgeriesData from '../../data/surgeriesPageData'
const { surgeries } = SurgeriesData;
const Surgeries = () => (
    <Layout>
        <SEO title="Χειρουργικές Επεμβάσεις" />
        <section className="services mt-5">
            <Container>
                <Row>
                    <Col md={12}>
                        <h3>{surgeries.title}</h3>
                            {surgeries.services.map((serviceItem, index) => {
                                return <ListGroupCollapse key={index} items={serviceItem}/>
                            })}
                    </Col>
                </Row>
            </Container>
        </section>
    </Layout>
)

export default Surgeries