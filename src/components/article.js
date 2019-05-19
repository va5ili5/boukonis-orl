import React from 'react'
import { Link as RRNavLink } from 'gatsby'
import kebabCase from "lodash/kebabCase"
import { Col, Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap'
const Article = (props) => (
  <Col lg={3} md={4} className="mb-4">
                            <Card className="h-100">
                            <CardImg top src={props.article.node.frontmatter.image.childImageSharp.resize.src}></CardImg>
                                <CardBody>
                                    <CardTitle>{props.article.node.frontmatter.title}</CardTitle>
                                    <CardText>{props.article.node.excerpt}</CardText>
                                    <Button tag={RRNavLink} to={`/articles/${kebabCase(props.article.node.frontmatter.slug)}`} color="success">Περισσότερα</Button>
                                </CardBody>
                            </Card>
                        </Col>
)
export default Article