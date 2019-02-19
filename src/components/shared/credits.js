import React from 'react'
import { Container, Row, Col } from 'reactstrap';

const Credits = () => (
    <section className="credits" style={{backgroundColor:'#40474e '}}>
        <Container>
            <Row>
                <Col md={12}>
                    <div className="credits d-flex text-center justify-content-center pt-4 pb-4 text-white">
                        Copyright © {(new Date()).getFullYear()} Κωνσταντίνος Χ. Μπουκόνης. All rights reserved.
                    </div>
                </Col>
            </Row>
        </Container>
</section>
)
export default Credits