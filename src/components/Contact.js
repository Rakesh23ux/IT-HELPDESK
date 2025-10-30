import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Techmlogo from "../images/Techmlogo.svg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "✅ Thank you for contacting Tech Mahindra Helpdesk! We’ll get back to you soon."
    );
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section
      className="contact-section py-5"
      style={{
        background: "linear-gradient(185deg, #ecf3efc4, #000000ff )",
        animation: "gradientShift 8s ease infinite",
        backgroundSize: "400% 400%",
        color: "#fff",
        minHeight: "100vh",
        position: "relative",
        marginTop: "30px",
      }}
    >
      <div
        className="overlay"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      ></div>

      <div className="container position-relative" >
        <div className="text-center p-5 mb-5">
          <img
            src={Techmlogo}
            alt="Tech Mahindra Logo"
            style={{ width: "300px", marginBottom: "20px" }}
          />
          <p className="fw-bold lead text-danger mb-0">We’re Here to Support You 24/7</p>
        </div>

        <div className="row g-4 align-items-start">
          {/* Left Info Card */}
          <div className="col-lg-5">
            <div
              className="info-card p-4 h-100 shadow-lg rounded-4 bg-white "
              style={{
                color: "#212529",
              }}
            >
              <h3 className="fw-bold text-danger mb-3">Contact Information</h3>
              <p className="text-muted">
                At Tech Mahindra Helpdesk, we’re committed to ensuring your IT
                systems run efficiently. Whether you need assistance, guidance,
                or issue resolution — we’re here to help.
              </p>

              <ul className="list-unstyled mt-4">
                <li className="mb-3 d-flex align-items-center">
                  <FaEnvelope className="text-danger me-3 fs-5" />
                  <span>support@techmahindrahelpdesk.com</span>
                </li>
                <li className="mb-3 d-flex align-items-center">
                  <FaPhoneAlt className="text-danger me-3 fs-5" />
                  <span>+91 8222 2222 220</span>
                </li>
                <li className="d-flex align-items-start">
                  <FaMapMarkerAlt className="text-danger me-3 fs-5 mt-1" />
                  <span>Near MDP Junction, Vizag, Andhra Pradesh, India</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7">
            <div
              className="form-card p-4 h-100 shadow-lg rounded-4 bg-light"
              style={{
                color: "#212529",
                borderTop: "5px solid #b71c1c",
              }}
            >
              <h3 className="fw-bold text-danger mb-4">Send Us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-semibold">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-3 shadow-sm"
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    className="form-control rounded-3 shadow-sm"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="subject" className="form-label fw-semibold">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="form-control rounded-3 shadow-sm"
                    id="subject"
                    name="subject"
                    placeholder="What’s this about?"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label fw-semibold">
                    Message *
                  </label>
                  <textarea
                    className="form-control rounded-3 shadow-sm"
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Write your message here..."
                    required
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-danger w-100 py-1 rounded-3 fw-semibold shadow-sm"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="text-warning mb-3">
          © {new Date().getFullYear()} Tech Mahindra Helpdesk | All rights
          reserved
        </div>
      </div>

      <style jsx="true">{`
        .form-card:hover,
        .info-card:hover {
          transform: translateY(-5px);
          transition: 0.3s ease-in-out;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
        }
          @keyframes gradientShift {
         0% {
           background-position: 0% 50%;
        }
         50% {
           background-position: 100% 50%;
        }
         100% {
           background-position: 0% 50%;
     }
   }
   `}</style>
    </section>
  );
};

export default Contact;
