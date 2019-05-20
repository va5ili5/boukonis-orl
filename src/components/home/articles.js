import React from 'react';
import { Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import { Link as RRNavLink } from 'gatsby';
import ArticlesData from '../../../data/indexPageData';
const { articles } = ArticlesData;

const Articles = () => (
    <section className="mt-5">
        <Container>
            <Row>
                <Col md={12}>
                    <h3>Άρθρα</h3>
                </Col> 
            </Row>
            <Row>
                {articles.map((article, index) => {
                    return( 
                        <Col key={index} lg={3} md={4} className="mb-4">
                            <Card className="h-100">
                                <CardImg top src={article.imagesrc} alt={article.imagealt}></CardImg>
                                <CardBody>
                                    <CardTitle>{article.articlename}</CardTitle>
                                    <CardText>{article.description}</CardText>
                                    <Button tag={RRNavLink} to={article.articleurl} color="success">Περισσότερα</Button>
                                </CardBody>
                            </Card>
                        </Col>
                )})}
            </Row>
        </Container>
    </section>
)

export default Articles;