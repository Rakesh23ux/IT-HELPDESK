import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Techmlogo from "../images/Techmlogo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-lg">
      <div className="container-fluid px-4 px-lg-5">
        {/* Logo & Brand */}
        <Link to="/" className="navbar-brand d-flex align-items-center text-decoration-none">
          <img
            src={Techmlogo}
            alt="Tech Mahindra"
            style={{ width: "160px", marginRight: "10px" }}
          />
          <span className="fw-bold text-danger">🛠 IT Helpdesk</span>
        </Link>

        {/* Toggler Button */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <Link to="/about" className="nav-link text-danger fw-semibold">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/contact" className="nav-link text-danger fw-semibold">
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/services" className="nav-link text-danger fw-semibold">
                Services
              </Link>
            </li>


            {/* Login Button */}
            <li className="nav-item mt-2 mt-lg-0 ms-lg-3">
              <Link to="/login" className="btn btn-outline-danger fw-bold px-3">
                Login
              </Link>
            </li>
            {/* Signup Button */}
            <li className="nav-item mt-2 mt-lg-0 ms-lg-3">
              <Link to="/login" className="btn btn-outline-danger fw-bold px-3">
                signup
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
