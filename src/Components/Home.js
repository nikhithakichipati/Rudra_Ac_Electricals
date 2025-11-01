import React from "react";
import { Link } from "react-router-dom";
import bgImage from "../Images/home_background.jpg"; // replace with your image path

const Home = () => {
  return (
    <section
      id="home"
      className="hero-section d-flex align-items-center text-center text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <div className="container">
        <h1 className="display-3 fw-bold">
          Stay Cool with <span>Rudra</span> A/C & Electricals
        </h1>
        <p className="lead mt-3">
          Fast. Reliable. Professional. Your comfort is just a call away.
        </p>
        <Link to="/contact" className="btn btn-light btn-lg mt-4 shadow-sm">
          Book Your Service
        </Link>
      </div>
    </section>
  );
};

export default Home;
