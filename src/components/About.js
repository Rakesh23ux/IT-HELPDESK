import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Techmlogo from "../images/Techmlogo.svg";
import Techmlogo1 from "../images/Techmlogo1.svg";

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(185deg, #ecf3efc4, #000000ff )",
        color: "#fff",
        fontFamily: "'Poppins', sans-serif",
        padding: "5rem 0",
        marginTop: "30px",
      }}
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5" data-aos="fade-down">
          <img
            src={Techmlogo}
            alt="Tech Mahindra Logo"
            style={{ width: "220px", marginBottom: "15px" }}
          />
          <h2 className="fw-bold text-danger text-uppercase mt-2">
            About Tech Mahindra IT Helpdesk System
          </h2>
          <p className="text-light mt-3 fs-5">
            Simplifying enterprise IT with automation, analytics, and innovation.
          </p>
        </div>

        {/* About Content */}
        <div className="row align-items-center g-5">
          {/* Left Image */}
          <div className="col-lg-6" data-aos="fade-right">
            <div
              className="rounded-4 overflow-hidden shadow-lg"
              style={{
                border: "3px solid rgba(226, 20, 20, 0.48)",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              <img
                src={Techmlogo1}
                alt="About Tech Mahindra"
                className="img-fluid"
                style={{
                  width: "100%",
                  height: "auto",
                  transition: "transform 0.5s ease",
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            </div>
          </div>

          {/* Right Text */}
          <div className="col-lg-6" data-aos="fade-left">
            <h3 className="fw-bold text-warning mb-3">
              Empowering Smart IT Operations
            </h3>
            <p className="text-white-50 fs-5 mb-4">
              Tech Mahindra’s IT Helpdesk System brings automation and agility to
              enterprise service management, ensuring faster resolutions and
              transparent communication.
            </p>

            <ul className="list-unstyled text-white-50 fs-6">
              <li className="mb-2">
                ✅ <strong>Automation First:</strong> AI-powered ticket routing for
                rapid issue resolution.
              </li>
              <li className="mb-2">
                ⚙️ <strong>Collaboration Ready:</strong> Streamlined cross-team
                communication.
              </li>
              <li className="mb-2">
                📊 <strong>Insight Driven:</strong> Analytics for smarter IT
                decisions.
              </li>
              <li>
                🔒 <strong>Secure & Scalable:</strong> Enterprise-grade protection
                and reliability.
              </li>
            </ul>

            <button
              className="btn btn-warning btn-lg rounded-pill px-4 mt-3 fw-semibold"
              style={{
                color: "#212121",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.background = "#ffc107d9")}
              onMouseOut={(e) => (e.currentTarget.style.background = "#ffc107")}
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Mission/Vision/Values */}
        <div className="row mt-5 text-center" data-aos="fade-up">
          {[
            {
              title: "Our Mission",
              text: "To merge technology and human intelligence for seamless IT experiences.",
            },
            {
              title: "Our Vision",
              text: "To lead digital transformation through innovation and reliability.",
            },
            {
              title: "Our Values",
              text: "Integrity, Collaboration, and Continuous Improvement define us.",
            },
          ].map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div
                className="p-4 rounded-4 shadow-sm h-100"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  transition: "transform 0.3s ease, background 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                }}
              >
                <h4 className="text-warning fw-bold mb-2">{item.title}</h4>
                <p className="text-white-50 mb-0">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center text-white-50 mt-5 pt-3">
          <hr className="border-light opacity-25" />
          <small>© 2025 Tech Mahindra Foundation | Empowering Futures with Technology</small>
        </div>
      </div>
    </section>
  );
}

export default About;
