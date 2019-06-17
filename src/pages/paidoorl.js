import React from 'react'
import Layout from '../components/layout'
import ListGroupCollapse from '../components/shared/listgroupcollapse'
import SEO from '../components/seo'
import { Container, Row, Col } from 'reactstrap'
import PaidoOrlData from '../../data/paidoOrlPageData'
const { paidoOrl } = PaidoOrlData;
const PaidoOrl = (props) => {
    const anchor = props.location.state.anchor
    return(
        <Layout>
            <SEO title="Παιδο - ΩΡΛ" />
            <section className="services mt-5">
                <Container>
                    <Row>
                        <Col md={12}>
                            <h3>{paidoOrl.title}</h3>
                                {paidoOrl.services.map((serviceItem, index) => {
                                    return <ListGroupCollapse key={index} items={serviceItem} open={ anchor === serviceItem.anchor }/>
                                })}
                        </Col>
                    </Row>
                </Container>
            </section>
        </Layout>
    )
}
export default PaidoOrl