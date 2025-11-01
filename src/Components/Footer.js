import React from "react";
import footerlogo from '../Images/footerlogo.png';
import { Link } from "react-router-dom";
import './Style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-5 footer-custom">
      <div className="container">
        <div className="row">
          {/* Logo */}
          <div className="col-md-4 mb-4">
            <img
              src={footerlogo} alt="Rudra logo" className="logo" style={{ paddingLeft: '10px', width: '250px', height: 'auto' }} />
            
          </div>
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase fw-bold d-inline-block border-bottom pb-1 border-warning">Quick Links</h5>
            <ul className="list-unstyled mt-2">
              <li><Link to="/home" className="footer-link">Home</Link></li>
              <li><Link to="/services" className="footer-link">Services</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase fw-bold d-inline-block border-bottom pb-1 border-warning">Contact Us</h5>
            <ul className="list-unstyled mt-2">
              <li><FontAwesomeIcon icon={faEnvelope} className="me-3" />rudraacServices@gmail.com</li>
              <li><FontAwesomeIcon icon={faPhone} className="me-3" />+91 8919859723</li>
            </ul>
            
          </div>
        </div>
      </div>
      <div className="text-center mt-4 border-top border-warning pt-2">
        <small>© {new Date().getFullYear()} Rudra A/C & Electricals. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
