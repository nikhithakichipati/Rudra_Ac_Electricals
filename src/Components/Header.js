import React, { useState, useEffect } from "react";
import logo from "../Images/logo.png";
import footerlogo from "../Images/footerlogo.png";
import { HashLink as Link } from "react-router-hash-link";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Style.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`header-main fixed-top ${
          scrolled ? "bg-white shadow-sm" : "bg-transparent"
        }`}
        style={{
          transition: "background-color 0.4s ease, box-shadow 0.4s ease",
          zIndex: 1000,
        }}
      >
        <div className="container d-flex justify-content-between align-items-center py-3">
          {/* Logo */}
          <img
            src={scrolled ? logo : footerlogo}
            alt="Rudra logo"
            className="logo"
            style={{
              paddingLeft: "10px",
              width: "100px",
              height: "auto",
              transform: "scale(1.3)",
              transformOrigin: "left center",
              transition: "all 0.4s ease",
            }}
          />

          {/* Hamburger Menu (Mobile) */}
          <div className="d-md-none">
            <button
              className="btn border-0"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <FaTimes size={26} color={scrolled ? "black" : "white"} />
              ) : (
                <FaBars size={26} color={scrolled ? "black" : "white"} />
              )}
            </button>
          </div>

          {/* Desktop Nav */}
          <nav
            className={`d-none d-md-flex gap-4 fs-5 ${
              scrolled ? "text-dark" : "text-white"
            }`}
          >
            <Link smooth to="/#home" className={`nav-link ${scrolled ? "text-dark" : "text-white"}`}>
              Home
            </Link>
            <Link smooth to="/#services" className={`nav-link ${scrolled ? "text-dark" : "text-white"}`}>
              Services
            </Link>
            <Link smooth to="/#team" className={`nav-link ${scrolled ? "text-dark" : "text-white"}`}>
              Team
            </Link>
            <Link smooth to="/#testimonials" className={`nav-link ${scrolled ? "text-dark" : "text-white"}`}>
              Testimonials
            </Link>

            {/* Contact Button opens popup */}
            <button
              className={`nav-link border-0 bg-transparent ${
                scrolled ? "text-dark" : "text-white"
              }`}
              onClick={() => setShowContact(true)}
              style={{ cursor: "pointer" }}
            >
              Contact
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className={`d-md-none position-absolute top-100 start-0 w-100 ${
              scrolled ? "bg-white" : "bg-transparent"
            }`}
            style={{
              backdropFilter: scrolled ? "none" : "blur(8px)",
              transition: "all 0.4s ease",
            }}
          >
            <div className="d-flex flex-column align-items-center py-3 fs-5">
              <Link smooth to="/#home" className={`nav-link mb-2 ${scrolled ? "text-dark" : "text-white"}`} onClick={() => setMenuOpen(false)}>
                Home
              </Link>
              <Link smooth to="/#services" className={`nav-link mb-2 ${scrolled ? "text-dark" : "text-white"}`} onClick={() => setMenuOpen(false)}>
                Services
              </Link>
              <Link smooth to="/#team" className={`nav-link mb-2 ${scrolled ? "text-dark" : "text-white"}`} onClick={() => setMenuOpen(false)}>
                Team
              </Link>
              <Link smooth to="/#testimonials" className={`nav-link mb-2 ${scrolled ? "text-dark" : "text-white"}`} onClick={() => setMenuOpen(false)}>
                Testimonials
              </Link>

              <button
                className={`nav-link border-0 bg-transparent ${
                  scrolled ? "text-dark" : "text-white"
                }`}
                onClick={() => {
                  setShowContact(true);
                  setMenuOpen(false);
                }}
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Contact Popup */}
      {showContact && (
        <div
          className="contact-modal position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(6px)",
            zIndex: 2000,
          }}
        >
          <div
            className="bg-white p-4 rounded-4 shadow-lg text-center"
            style={{ width: "90%", maxWidth: "400px" }}
          >
            <h4 className="mb-3 text-primary">Contact Us</h4>
            <p className="mb-1">📍 Beside Srichaitanya college,Annamaiah circle,Nellore,AndhraPradhesh</p>
            <p className="mb-1">📞 +91 8919859723</p>
            <p className="mb-3">📧 rudra.ac.elec.services@gmail.com</p>
            <button className="btn btn-primary px-4" onClick={() => setShowContact(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
