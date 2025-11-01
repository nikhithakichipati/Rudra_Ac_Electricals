import React from "react";
import footerlogo from "../Images/footerlogo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row text-center text-md-start align-items-start">
          {/* Logo Section */}
          <div className="col-12 col-md-4 mb-4 d-flex flex-column align-items-center align-items-md-start">
            <img
              src={footerlogo}
              alt="Rudra logo"
              style={{ width: "200px", height: "auto" }}
              className="mb-3"
            />
            <p className="small text-secondary">
              Reliable A/C & Electrical services you can trust.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-12 col-md-4 mb-4">
            <h5 className="text-uppercase fw-bold border-bottom border-warning d-inline-block pb-1">
              Quick Links
            </h5>
            <ul className="list-unstyled mt-3">
              <li>
                <Link to="/home" className="text-white text-decoration-none d-block mb-2">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white text-decoration-none d-block mb-2">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white text-decoration-none d-block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-12 col-md-4 mb-4">
            <h5 className="text-uppercase fw-bold border-bottom border-warning d-inline-block pb-1">
              Contact Us
            </h5>
            <ul className="list-unstyled mt-3">
              <li className="mb-2">
                <FontAwesomeIcon icon={faEnvelope} className="me-2 text-warning" />
                rudraacServices@gmail.com
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} className="me-2 text-warning" />
                +91 8919859723
              </li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="text-center border-top border-warning pt-3 mt-3">
          <small className="text-secondary">
            © {new Date().getFullYear()} Rudra A/C & Electricals. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
