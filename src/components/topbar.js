import React from 'react'
import data from '../../data/topbar.yml';

import {
  FaMapMarkerAlt,
  FaPhone,
  FaMobileAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaGooglePlusG,
} from 'react-icons/fa'

const Topbar = () => (
  <div className="top-bar sticky-top">
    <div className="d-flex justify-content-lg-between align-items-center h-100 container">
      <ul className="d-flex list-inline p-2">
        <li className="d-none d-lg-inline-flex list-inline-item">
          <a className="d-flex align-items-center p-1 text-white contact-link" href="#google-map">
            <FaMapMarkerAlt size={12} style={{marginRight:'5px'}}/>
            <span>{data.contact.address}</span>
          </a>
        </li>
        <li className="list-inline-item">
          <a className="d-flex align-items-center p-1 text-white contact-link" href="tel:2130575052">
            <FaPhone size={12} style={{marginRight:'5px'}}/>
            <span>{data.contact.phone}</span>
          </a>
        </li>
        <li className="list-inline-item">
          <a className="d-flex align-items-center p-1 text-white contact-link" href="tel:6947556211">
            <FaMobileAlt size={12} style={{marginRight:'5px'}}/>
            <span>{data.contact.mobile}</span>
          </a>
        </li>
        <li className="d-none d-lg-inline-flex list-inline-item">
          <a
            className="d-flex align-items-center p-1 text-white contact-link"
            href="mailto:kostasboukonis@gmail.com"
          >
            <FaEnvelope size={14} style={{marginRight:'5px'}}/>
            {data.contact.email}
          </a>
        </li>
      </ul>
      <ul className="list-inline p-2 d-none d-lg-block">
        <li className="list-inline-item">
          <a
            className="d-flex align-items-center p-1 text-white"
            href={data.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={20} style={{marginRight:'5px'}}/>
          </a>
        </li>
        <li className="list-inline-item">
          <a
            className="d-flex align-items-center p-1 text-white"
            href={data.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={20} style={{marginRight:'5px'}}/>
          </a>
        </li>
        <li className="list-inline-item">
          <a
            className="d-flex align-items-center p-1 text-white"
            href={data.google}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGooglePlusG size={20} style={{marginRight:'5px'}}/>
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default Topbar
