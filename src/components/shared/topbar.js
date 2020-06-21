import React from 'react'
import data from '../../../data/topbar'
import { Container, ListGroupItem, Button } from 'reactstrap'
import {
  FaMapMarkerAlt,
  FaPhone,
  FaMobileAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa'
import { Link as RRNavLink } from 'gatsby'

const Topbar = () => (
  <div className="top-bar sticky-top">
    <Container className="d-flex justify-content-lg-between align-items-center h-100">
      <ul className="d-flex list-inline p-2">
        <li className="d-none d-lg-inline-flex list-inline-item">
          <ListGroupItem
            className="d-flex align-items-center p-1 contact-link border-0"
            tag={RRNavLink}
            to="./contact"
          >
            <FaMapMarkerAlt size={12} style={{ marginRight: '5px' }} />
            <span>{data.contact.address}</span>
          </ListGroupItem>
        </li>
        <li className="list-inline-item">
          <a
            className="d-flex align-items-center p-1 contact-link"
            href="tel:2130575052"
          >
            <FaPhone size={12} style={{ marginRight: '5px' }} />
            <span>{data.contact.phone}</span>
          </a>
        </li>
        <li className="d-none d-lg-inline-flex list-inline-item">
          <a
            className="d-flex align-items-center p-1 contact-link"
            href="tel:6947556211"
          >
            <FaMobileAlt size={12} style={{ marginRight: '5px' }} />
            <span>{data.contact.mobile}</span>
          </a>
        </li>
        <li className="d-none d-lg-inline-flex list-inline-item">
          <a
            className="d-flex align-items-center p-1 contact-link"
            href="mailto:kostasboukonis@gmail.com"
          >
            <FaEnvelope size={14} style={{ marginRight: '5px' }} />
            {data.contact.email}
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <Button
            tag="a"
            target="_blank"
            href="https://www.appointfix.com/5ba81ac9a264"
            color="danger"
          >
            Ραντεβού On-line
          </Button>
        </li>
      </ul>
      <ul className="list-inline p-2 d-none d-lg-block">
        <li className="list-inline-item">
          <a
            className="d-flex align-items-center p-1 facebook"
            href={data.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={21} style={{ marginRight: '5px' }} />
          </a>
        </li>
        <li className="list-inline-item">
          <a
            className="d-flex align-items-center p-1 twitter"
            href={data.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={21} style={{ marginRight: '5px' }} />
          </a>
        </li>
        <li className="list-inline-item">
          <a
            className="d-flex align-items-center p-1 linkedin"
            href={data.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={21} style={{ marginRight: '5px' }} />
          </a>
        </li>
      </ul>
    </Container>
  </div>
)

export default Topbar
