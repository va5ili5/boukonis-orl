import React, { Component } from 'react'
import { Container, Row, Col, NavbarBrand, Media, ListGroup, ListGroupItem } from 'reactstrap';
import {
    FaMapMarkerAlt,
    FaPhone,
    FaMobileAlt,
    FaEnvelope,
  } from 'react-icons/fa'
import { Link as RRNavLink } from 'gatsby';
import logo from '../../images/logo-inverse.svg';
import footer from '../../../data/footer';

const { about, menu, timetable } = footer

const Footer = () => (
  <footer className="footer bg-dark text-white mt-5">
    <Container>
      <Row>
        <Col md={4}>
        <h4>{about.title}</h4>
        <NavbarBrand tag={RRNavLink} to="/">
              <Media left>
                <Media object src={logo} alt="Logo" className="img-fluid" />
              </Media>
        </NavbarBrand>
        <ListGroup>
        <ListGroupItem className="bg-dark border-0" style={{color:'#999999'}}><FaMapMarkerAlt size={12} style={{marginRight:'5px'}}/>{about.contactDetails.address}</ListGroupItem>
        <ListGroupItem className="bg-dark border-0" style={{color:'#999999'}}><FaPhone size={12} style={{marginRight:'5px'}}/>{about.contactDetails.phone}</ListGroupItem>
        <ListGroupItem className="bg-dark border-0" style={{color:'#999999'}}><FaMobileAlt size={12} style={{marginRight:'5px'}}/>{about.contactDetails.mobile}</ListGroupItem>
        <ListGroupItem className="bg-dark border-0" style={{color:'#999999'}}><FaEnvelope size={14} style={{marginRight:'5px'}}/>{about.contactDetails.email}</ListGroupItem>
        </ListGroup>
        </Col>
        <Col md={4}>
        <h4>{menu.title}</h4>
        </Col>
        <Col md={4}>
        <h4>{timetable.title}</h4>
        </Col>
      </Row>
    </Container>
  </footer>
)

export default Footer
