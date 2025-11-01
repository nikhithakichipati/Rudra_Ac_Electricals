import React from "react";
import user1 from "../Images/user.webp";
import user2 from "../Images/user.webp";
import user3 from "../Images/user.webp";

const Testimonials = () => {
  const testimonials = [
    {
      img: user1,
      name: "User 1",
      role: "Client",
      feedback:
        "The team delivered beyond expectations! Truly impressed with their professionalism."
    },
    {
      img: user2,
      name: "User 2",
      role: "Customer",
      feedback:
        "Exceptional service and friendly communication. Will work again!"
    },
    {
      img: user3,
      name: "User 3",
      role: "Partner",
      feedback:
        "Working with them was smooth and rewarding. Highly recommended!"
    }
  ];

  return (
    <section id="testimonials" className="py-5 bg-white">
      <div className="container">
        <h2 className="text-center mb-5">What Our Clients Say</h2>
        <div className="row g-4">
          {testimonials.map((t, index) => (
            <div className="col-md-4" key={index}>
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-start">
                  {/* Profile Image */}
                  
                    <img
                      src={t.img}
                      alt={t.name}
                      className="rounded-circle"
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover"
                      }}
                    />
                  

                  {/* Name, Role, Feedback */}
                  <div>
                    <h5 className="fw-bold mb-1">{t.name}</h5>
                    <p className="text-primary fw-semibold mb-2">{t.role}</p>
                    <p className="fst-italic text-muted mb-0">"{t.feedback}"</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
