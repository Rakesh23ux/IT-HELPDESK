import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {BrowserRouter as Router,Routes,Route,useLocation,} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

// Layout wrapper to hide header/footer on specific pages
function Layout() {
  const location = useLocation();
  const hideHeaderFooter =
    location.pathname === "/login" || location.pathname === "/dashboard";

  return (
    <>
      {!hideHeaderFooter && <Header />}

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Services />
              <About />
              <Contact />
            </>
          }
        />

        {/*  Individual Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />

        {/*  Auth & Admin Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      {!hideHeaderFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
