import React from 'react';
import { Container, Row, Col, Media } from 'reactstrap';
import ClinicImg from '../../images/about/3.png';
import ClinicData from '../../../data/indexPageData';
const { clinic } = ClinicData;

const Clinic = () => (
    <section className="mt-5">
        <Container>
            <Row>
                <Col md={6}>
                    <Media right>
                        <Media object src={ClinicImg} width='550' alt="clinic image" className="img-fluid" />
                    </Media>
                </Col>
                <Col md={6}>
                    <h3 style={{color : '#00944D', fontWeight : '400'}}>{clinic.title}</h3>
                    {clinic.text.map((textLine, index) => {
                        return <p key={index}>{textLine}</p>
                    })}
                </Col>
            </Row>
        </Container>
    </section>
)

export default Clinic