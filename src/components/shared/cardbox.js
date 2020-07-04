import React from 'react'
import { Link as RRNavLink } from 'gatsby'
import kebabCase from 'lodash/kebabCase'
import {
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from 'reactstrap'
const CardBox = props => (
  <Col lg={4} md={6} sm={6} xs={12} className="mb-4">
    <Card className="h-100">
      <CardImg
        top
        className="img-fluid"
        alt={props.cardItem.node.frontmatter.title}
        src={props.cardItem.node.frontmatter.image.childImageSharp.fluid.src}
      />
      <CardBody>
        <CardTitle
          tag={RRNavLink}
          to={
            `/` +
            props.category +
            `/${kebabCase(props.cardItem.node.frontmatter.slug)}`
          }
          dangerouslySetInnerHTML={{
            __html: props.cardItem.node.frontmatter.title,
          }}
          style={{ color: '#00944d', fontWeight: 'bold' }}
        ></CardTitle>
        <CardText>{props.cardItem.node.frontmatter.excerpt}</CardText>
        <Button
          tag={RRNavLink}
          to={
            `/` +
            props.category +
            `/${kebabCase(props.cardItem.node.frontmatter.slug)}`
          }
          color="success"
        >
          Περισσότερα
        </Button>
      </CardBody>
    </Card>
  </Col>
)
export default CardBox
