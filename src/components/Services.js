import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaTicketAlt,
  FaClock,
  FaCloud,
  FaRobot,
  FaGlobe,
  FaShieldAlt,
  FaHeadset,
  FaChartLine,
} from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import Techmlogo from "../images/Techmlogo.svg";

function Services() {
  return (
    <section
      id="services"
      style={{
        background: "linear-gradient(185deg, #ecf3efc4, #000000ff )",
        padding: "4rem 0 ",
        fontFamily: "'Poppins', Arial, sans-serif",
        color: "#212529",
      }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <img
            src={Techmlogo}
            alt="Tech Mahindra Logo"
            style={{ width: "300px", marginTop: "10rem" }}
          />
        </div>

        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="fw-bold text-danger text-uppercase">
            IT Helpdesk Services
          </h1>
          <h3 className="fw-bold text-secondary text-uppercase">
            Our Core Services
          </h3>
          <p className="text-muted fs-5">
            Powering efficient IT operations with intelligent systems for
            ticket management, automation, and enterprise support.
          </p>
        </div>

        {/* ====== Row 1 ====== */}
        <div className="row g-4">
          {/* Ticket Management */}
          <div className="col-lg-4 col-md-6">
            <div className="card shadow-lg service-card">
              <div className="card-body text-center">
                <div className="icon-circle bg-danger bg-opacity-25 text-danger mb-3">
                  <FaTicketAlt size={32} />
                </div>
                <h5 className="fw-bold">Ticket Management</h5>
                <p className="text-muted mb-3">
                  Centralized system for creating, assigning, and tracking IT
                  tickets in real time.
                </p>

                <div className="text-start">
                  <div className="d-flex justify-content-between">
                    <span>Open Tickets</span>
                    <span className="fw-bold text-danger"></span>
                  </div>
                  <div className="progress mb-2">
                    <div
                      className="progress-bar bg-danger"
                      style={{ width: "40%" }}
                    ></div>
                  </div>

                  <div className="d-flex justify-content-between">
                    <span>In Progress</span>
                    <span className="fw-bold text-warning"></span>
                  </div>
                  <div className="progress mb-2">
                    <div
                      className="progress-bar bg-warning"
                      style={{ width: "65%" }}
                    ></div>
                  </div>

                  <div className="d-flex justify-content-between">
                    <span>Resolved</span>
                    <span className="fw-bold text-success"></span>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar bg-success"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>

                <ul className="text-start mt-3 small text-muted">
                  <li>Real-time SLA tracking and automated status updates.</li>
                  <li>Integrated user feedback after ticket closure.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Approvals & Resolutions */}
          <div className="col-lg-4 col-md-6">
            <div className="card shadow-lg service-card">
              <div className="card-body text-center">
                <div className="icon-circle bg-success bg-opacity-25 text-success mb-3">
                  <FaCircleCheck size={32} />
                </div>
                <h5 className="fw-bold">Approvals & Resolutions</h5>
                <p className="text-muted mb-3">
                  Streamlined workflow for quicker approvals, automated
                  resolutions, and consistent service quality.
                </p>
                <div className="table-responsive">
                  <table className="table table-sm text-center align-middle">
                    <thead className="table-success text-dark">
                      <tr>
                        <th>Type</th>
                        <th>Count</th>
                        <th>Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Auto-Resolved</td>
                        <td>58</td>
                        <td>89%</td>
                      </tr>
                      <tr>
                        <td>Manually Approved</td>
                        <td>24</td>
                        <td>72%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <ul className="text-start mt-3 small text-muted">
                  <li>AI-powered resolution suggestions for support engineers.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pending & Monitoring */}
          <div className="col-lg-4 col-md-12">
            <div className="card shadow-lg service-card">
              <div className="card-body text-center">
                <div className="icon-circle bg-warning bg-opacity-25 text-warning mb-3">
                  <FaClock size={32} />
                </div>
                <h5 className="fw-bold">Pending & Monitoring</h5>
                <p className="text-muted mb-3">
                  Real-time insight into pending tickets and priority levels,
                  enabling timely escalation.
                </p>
                <ul className="list-group text-start shadow-sm rounded">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    High Priority
                    <span className="badge bg-danger rounded-pill">🔴</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Medium Priority
                    <span className="badge bg-warning text-dark rounded-pill">
                      🟡
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Low Priority
                    <span className="badge bg-success rounded-pill">🔵</span>
                  </li>
                </ul>

                <ul className="text-start mt-3 small text-muted">
                  <li>Custom alerts for ticket aging and missed SLAs.</li>
                  <li>Interactive dashboards with trend analytics.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ====== Row 2 ====== */}
        <div className="row g-4 mt-4">
          {/* Digital Transformation */}
          <div className="col-lg-4 col-md-6">
            <div className="card shadow-lg service-card">
              <div className="card-body text-center">
                <div className="icon-circle bg-primary bg-opacity-25 text-primary mb-3">
                  <FaGlobe size={32} />
                </div>
                <h5 className="fw-bold">Digital Transformation</h5>
                <p className="text-muted">
                  Enabling enterprise modernization through automation and
                  next-gen tools for better performance and innovation.
                </p>
                <ul className="text-start mt-3 small text-muted">
                  <li>Business process optimization powered by data insights.</li>
                  <li>Cloud-native integrations to reduce infrastructure costs.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Cloud Infrastructure */}
          <div className="col-lg-4 col-md-6">
            <div className="card shadow-lg service-card">
              <div className="card-body text-center">
                <div className="icon-circle bg-info bg-opacity-25 text-info mb-3">
                  <FaCloud size={32} />
                </div>
                <h5 className="fw-bold">Cloud Infrastructure</h5>
                <p className="text-muted">
                  Scalable and secure cloud environments optimized for TechM
                  clients, ensuring uptime and efficiency.
                </p>
                <ul className="text-start mt-3 small text-muted">
                  <li>Multi-cloud support with advanced disaster recovery.</li>
                  <li>Zero-downtime deployment strategies.</li>
                  <li>End-to-end compliance with cloud standards.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* IT Automation */}
          <div className="col-lg-4 col-md-12">
            <div className="card shadow-lg service-card">
              <div className="card-body text-center">
                <div className="icon-circle bg-secondary bg-opacity-25 text-secondary mb-3">
                  <FaRobot size={32} />
                </div>
                <h5 className="fw-bold">IT Support Automation</h5>
                <p className="text-muted">
                  AI-based chatbots, predictive maintenance, and automated issue
                  detection reduce downtime and enhance experience.
                </p>
                <ul className="text-start mt-3 small text-muted">
                  <li>Machine learning for anomaly detection.</li>
                  <li>Automated ticket triage and intelligent routing.</li>

                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ====== Row 3: Additional Services ====== */}
        <div className="row g-4 mt-4">
          {/* Cybersecurity Management */}
          <div className="col-lg-4 col-md-6">
            <div className="card shadow-lg service-card">
              <div className="card-body text-center">
                <div className="icon-circle bg-dark bg-opacity-25 text-dark mb-3">
                  <FaShieldAlt size={32} />
                </div>
                <h5 className="fw-bold">Cybersecurity Management</h5>
                <p className="text-muted">
                  Comprehensive monitoring, threat detection, and response
                  mechanisms to safeguard enterprise data and IT assets.
                </p>
                <ul className="text-start mt-3 small text-muted">
                  <li>24/7 SOC and real-time incident response.</li>
                  <li>Advanced threat analytics and vulnerability scanning.</li>
                  <li>Data encryption and compliance enforcement.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Analytics & Reporting */}
          <div className="col-lg-4 col-md-6">
            <div className="card shadow-lg service-card">
              <div className="card-body text-center">
                <div className="icon-circle bg-warning bg-opacity-25 text-warning mb-3">
                  <FaChartLine size={32} />
                </div>
                <h5 className="fw-bold">Analytics & Reporting</h5>
                <p className="text-muted">
                  Visualized performance insights through interactive dashboards
                  for decision-makers and IT administrators.
                </p>
                <ul className="text-start mt-3 small text-muted">
                  <li>Custom KPI tracking and SLA compliance reports.</li>
                  <li>Integration with Power BI and Tableau.</li>
                  <li>Predictive analytics for proactive support.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* End-User Support */}
          <div className="col-lg-4 col-md-12">
            <div className="card shadow-lg service-card">
              <div className="card-body text-center">
                <div className="icon-circle bg-danger bg-opacity-25 text-danger mb-3">
                  <FaHeadset size={32} />
                </div>
                <h5 className="fw-bold">End-User Support</h5>
                <p className="text-muted">
                  Providing responsive and empathetic IT assistance to employees
                  for smooth daily operations and minimal disruptions.
                </p>
                <ul className="text-start mt-3 small text-muted">
                  <li>24/7 helpdesk with chat, voice, and email support.</li>
                  <li>Remote troubleshooting and self-service portals.</li>
                  <li>Knowledge base with guided workflows and FAQs.</li>

                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Inline CSS */}
        <style jsx="true">{`
          .icon-circle {
            width: 70px;
            height: 70px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            margin: 0 auto;
          }

          .service-card {
            border: none;
            border-radius: 1rem;
            transition: all 0.35s ease;
            background-color: #fff;
          }

          .service-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          }

          .progress {
            height: 8px;
            border-radius: 5px;
          }

          .list-group-item {
            font-size: 0.95rem;
          }
        `}</style>
      </div>
    </section>
  );
}

export default Services;
