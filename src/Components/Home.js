import React from "react";
import { Link } from "react-router-dom";

const Home=()=>{
    return(
    <section id="home" className="hero-section d-flex align-items-center">
      <div className="container text-center text-white">
        <h1 className="display-3 fw-bold">Stay Cool with <span> Rudra</span> A/C & Electricals</h1>
        <p className="lead mt-3">
          Fast. Reliable. Professional. Your comfort is just a call away.
        </p>
        <Link to="/contact" className="btn btn-light btn-lg mt-4 shadow-sm">
          Book Your Service
        </Link>
      </div>
    </section>

    )
}
export default Home;
