import React from 'react'
import { Container, Row, Col, NavbarBrand, Media, ListGroup, ListGroupItem } from 'reactstrap';
import {
    FaMapMarkerAlt,
    FaPhone,
    FaMobileAlt,
    FaEnvelope,
    FaFacebook,
    FaTwitter,
    FaLinkedin
  } from 'react-icons/fa'
import { Link as RRNavLink } from 'gatsby';
import logo from '../../images/logo-inverse.svg';
import footer from '../../../data/footer';

const { about, menu, timetable, socialMedia } = footer

const Footer = () => (
  <footer className="footer bg-dark text-white mt-5 pb-5">
    <Container>
      <Row>
        <Col md={4} className="pt-5">
        <h4>{about.title}</h4>
        <NavbarBrand tag={RRNavLink} to="/">
              <Media left>
                <Media object src={logo} alt="Logo" className="img-fluid" />
              </Media>
        </NavbarBrand>
        <ListGroup>
        <ListGroupItem className="bg-dark border-0" style={{color:'#999999'}}><FaMapMarkerAlt size={12} style={{marginRight:'10px', verticalAlign:'unset'}}/>{about.contactDetails.address}</ListGroupItem>
        <ListGroupItem tag="a" href="tel:2130575052" className="bg-dark border-0" style={{color:'#999999'}}><FaPhone size={12} style={{marginRight:'10px', verticalAlign:'unset'}}/>{about.contactDetails.phone}</ListGroupItem>
        <ListGroupItem tag="a" href="tel:6947556211" className="bg-dark border-0" style={{color:'#999999'}}><FaMobileAlt size={12} style={{marginRight:'10px', verticalAlign:'unset'}}/>{about.contactDetails.mobile}</ListGroupItem>
        <ListGroupItem tag="a" href="mailto:kostasboukonis@gmail.com" className="bg-dark border-0" style={{color:'#999999'}}><FaEnvelope size={14} style={{marginRight:'10px', verticalAlign:'unset'}}/>{about.contactDetails.email}</ListGroupItem>
        </ListGroup>
        </Col>
        <Col md={4} className="pt-5">
          <h4>{menu.title}</h4>
          <ListGroup>
            {menu.navmenu.map((menuitem, index) => {
              return (
                <ListGroupItem tag={RRNavLink} to={menuitem.url} key={index} className="bg-dark text-uppercase border-0" style={{color:'#999999'}}>
                    {menuitem.title}
                </ListGroupItem>
              )
            })}
          </ListGroup>
        </Col>
        <Col md={4} className="pt-5">
          <h4>{timetable.title}</h4>
          <ListGroup>
            {timetable.workingDays.map((workingDay, index) => {
              return (
                <ListGroupItem key={index} className="bg-dark border-0" style={{color:'#999999'}}>
                    <span className="font-weight-bold">{workingDay.day}</span>: {workingDay.hours}
                </ListGroupItem>
              )
            })}
          </ListGroup>
          <hr style={{borderTop: '1px solid white'}}></hr>
          <ListGroup className="list-inline flex-row">
            <ListGroupItem tag="a" href={socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="list-inline-item bg-dark border-0 footer-facebook">
              <FaFacebook size={21} style={{marginRight:'5px'}}/>
            </ListGroupItem>
            <ListGroupItem tag="a" href={socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="list-inline-item bg-dark border-0 footer-twitter">
              <FaTwitter size={21} style={{marginRight:'5px'}}/>
            </ListGroupItem>
            <ListGroupItem tag="a" href={socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="list-inline-item bg-dark border-0 footer-linkedin">
              <FaLinkedin size={21} style={{marginRight:'5px'}}/>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  </footer>
)

export default Footer
