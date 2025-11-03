import React, { useState } from "react";
import bgImage from "../Images/home_background.jpg";

const Home = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    service: "",
  });

  // Correct handleChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value.trimStart(), // avoid leading spaces
    }));
  };

  const handleBook = () => {
    const { name, mobile, service } = formData;

    // Trim and validate
    if (name.trim() === "" || mobile.trim() === "" || service.trim() === "") {
      alert("⚠️ Please fill all fields before booking!");
      return;
    }

    // Replace with your WhatsApp number (country code + number, no plus sign)
    const phoneNumber = "918919859723"; // Example
    const message = `🧾 *New Service Booking Request*%0A
*Name:* ${name}%0A
*Mobile:* ${mobile}%0A
*service:* ${service}%0A
%0A📅 Please contact the client soon.`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

    // Confirmation
    alert("✅ Your service is booked! Our agent will contact you shortly.");

    // Reset form and close popup
    setShowForm(false);
    setFormData({ name: "", mobile: "", service: "" });
  };

  return (
    <>
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

          {/* Button to open popup */}
          <button
            className="btn btn-light btn-lg mt-4 shadow-sm"
            onClick={() => setShowForm(true)}
          >
            Book Your Service
          </button>
        </div>
      </section>

      {/* Popup form */}
      {showForm && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 1050,
          }}
        >
          <div
            className="bg-white p-4 rounded shadow-lg text-start"
            style={{ width: "90%", maxWidth: "400px" }}
          >
            <h4 className="text-center mb-3">Book Your Service</h4>

            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
              className="form-control mb-3"
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Enter Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              className="form-control mb-3"
            />
            <input
              type="text"
              name="service"
              placeholder="Service Required"
              value={formData.service}
              onChange={handleChange}
              className="form-control mb-3"
            />

            <div className="d-flex justify-content-between">
              <button
                className="btn btn-success w-50 me-2"
                onClick={handleBook}
              >
                Book
              </button>
              <button
                className="btn btn-secondary w-50"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
