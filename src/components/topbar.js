import React from 'react'
import Link from 'gatsby'
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
    <div className="d-flex justify-content-lg-between justify-content-md-center align-items-center h-100 container-fluid">
      <ul className="list-inline p-2">
        <li className="list-inline-item">
          <Link className="d-flex align-items-center p-1 text-white" href="#google-map">
            <FaMapMarkerAlt size={12} style={{marginRight:'5px'}}/>
            <span>Λεωφόρος Κωνσταντινουπόλεως 63, Περιστέρι</span>
          </Link>
        </li>
        <li className="list-inline-item">
          <a className="d-flex align-items-center p-1 text-white" href="tel:2130 575052">
            <FaPhone size={12} style={{marginRight:'5px'}}/>
            <span>2130 575052</span>
          </a>
        </li>
        <li className="list-inline-item">
          <a className="d-flex align-items-center p-1 text-white" href="tel:6947 556211">
            <FaMobileAlt size={12} style={{marginRight:'5px'}}/>
            <span>6947 556211</span>
          </a>
        </li>
        <li className="list-inline-item">
          <a
            className="d-flex align-items-center p-1 text-white"
            href="mailto:kostasboukonis@gmail.com"
          >
            <FaEnvelope size={14} style={{marginRight:'5px'}}/>
            kostasboukonis@gmail.com
          </a>
        </li>
      </ul>
      <ul className="list-inline p-2 d-none d-lg-block">
        <li className="list-inline-item">
          <a
            className="d-flex align-items-center p-1 text-white"
            href="https://www.facebook.com/ConsultantENTSurgeonRhinologist"
            target="_blank"
          >
            <FaFacebook size={20} style={{marginRight:'5px'}}/>
          </a>
        </li>
        <li className="list-inline-item">
          <a
            className="d-flex align-items-center p-1 text-white"
            href="https://twitter.com/Cons_ENTSurgeon"
            target="_blank"
          >
            <FaTwitter size={20} style={{marginRight:'5px'}}/>
          </a>
        </li>
        <li className="list-inline-item">
          <a
            className="d-flex align-items-center p-1 text-white"
            href="https://plus.google.com/u/0/106223965710849406721"
            target="_blank"
          >
            <FaGooglePlusG size={20} style={{marginRight:'5px'}}/>
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default Topbar
