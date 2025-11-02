import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useNavigate } from "react-router-dom";
import PendingTickets from "./PendingTickets";
import ResolvedTickets from "./ResolvedTickets";

// Sidebar Component
function Sidebar({ activeLink, setActiveLink }) {
  return (
    <div
      className="bg-dark text-white p-4 d-flex flex-column justify-content-start sidebar"
      style={{ minHeight: "100vh", width: "250px", position: "sticky", top: 0 }}
    >
      <h5 className="fw-bold text-danger mb-4 text-center">Admin Panel</h5>
      <ul className="nav flex-column gap-3">
        {[
          { name: "Dashboard Overview", icon: "🏠", id: "overview" },
          { name: "Analytics", icon: "📊", id: "analytics" },
          { name: "View Tickets", icon: "🎫", id: "pending" },
        ].map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className={`nav-link text-white d-flex align-items-center gap-2 ${activeLink === link.id ? "active" : ""
                }`}
              onClick={() => setActiveLink(link.id)}
            >
              <span>{link.icon}</span>
              <span>{link.name}</span>
            </a>
          </li>
        ))}
      </ul>

      <style jsx="true">{`
        .nav-link {
          padding: 10px 15px;
          border-radius: 8px;
          transition: all 0.2s;
        }
        .nav-link:hover {
          background-color: #dc3545;
          color: white;
        }
        .nav-link.active {
          background-color: #b71c1c;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
}



// Main Dashboard Component
function Dashboard() {
  const navigate = useNavigate();
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [activeLink, setActiveLink] = useState("overview");

  // Dummy Data
  const tickets = [
    { id: "#A101", title: "Server Down", desc: "Main DB server offline", status: "In-progress", priority: "High" },
    { id: "#A102", title: "Login Timeout", desc: "Users unable to login", status: "In-progress", priority: "High" },
    { id: "#A103", title: "VPN Issue", desc: "VPN connection drops randomly", status: "In-progress", priority: "Medium" },
    { id: "#A104", title: "Slow Internet", desc: "Network latency detected", status: "In-progress", priority: "Medium" },
    { id: "#A105", title: "Printer Error", desc: "HP LaserJet offline", status: "In-progress", priority: "Low" },
    { id: "#A106", title: "Access Denied", desc: "User access revoked unexpectedly", status: "In-progress", priority: "High" },
    { id: "#A107", title: "Outlook Sync", desc: "Emails not syncing properly", status: "In-progress", priority: "Medium" },
    { id: "#A108", title: "WiFi Drop", desc: "Connection unstable in 2nd floor", status: "In-progress", priority: "Medium" },
  ];

  const resolvedTickets = [
    { id: "#R301", title: "Email Setup", desc: "New employee email configured", status: "Completed", priority: "Low" },
    { id: "#R302", title: "Software Patch", desc: "Deployed version 3.2 update", status: "Completed", priority: "Medium" },
    { id: "#R303", title: "Laptop Replacement", desc: "Issued new hardware", status: "Completed", priority: "High" },
    { id: "#R304", title: "Antivirus Update", desc: "All systems patched", status: "Completed", priority: "Medium" },
    { id: "#R305", title: "Network Fix", desc: "Router reconfigured", status: "Completed", priority: "High" },
    { id: "#R306", title: "Security Clearance", desc: "Access restored", status: "Completed", priority: "High" },
    { id: "#R307", title: "Database Backup", desc: "Backup verified", status: "Completed", priority: "Low" },
    { id: "#R308", title: "Power Issue", desc: "UPS system serviced", status: "Completed", priority: "Medium" },
    { id: "#R309", title: "System Optimization", desc: "Performance improved", status: "Completed", priority: "Low" },
  ];


  const monthlyTickets = [
    { month: "Jan", Open: 20, Resolved: 35 },
    { month: "Feb", Open: 25, Resolved: 40 },
    { month: "Mar", Open: 15, Resolved: 50 },
    { month: "Apr", Open: 30, Resolved: 55 },
    { month: "May", Open: 18, Resolved: 42 },
    { month: "Jun", Open: 10, Resolved: 60 },
  ];

  const pieData = [
    { name: "High Priority", value: 8 },
    { name: "Medium Priority", value: 4 },
    { name: "Low Priority", value: 2 },
  ];

  const COLORS = ["#dc3545", "#ffc107", "#0d6efd"];

  const handleLogout = () => {
    alert("🚪 Logged out successfully!");
    navigate("/");
  };

  const handleViewTicket = (ticket) => {
    setSelectedTicket(ticket);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar activeLink={activeLink} setActiveLink={setActiveLink} />

      {/* Main Content */}
      <div className="flex-grow-1 p-4">
        <div className="dashboard-container border rounded shadow p-4 w-100 bg-white">

          {/* Navbar */}
          <nav className="navbar-custom mb-4 d-flex bg-secondary justify-content-between align-items-center rounded p-3">
            <span className="fw-bold text-warning fs-4">Admin Dashboard</span>
            <button type="button" className="btn btn-outline-warning text-white fw-bold" onClick={handleLogout}>
              Logout
            </button>
          </nav>
          {/* 🌟 Dashboard Overview Section */}
          <section id="overview" className="text-center mb-5">
            <h3 className="fw-bold text-dark mb-2">Welcome, Admin 👋</h3>
            <p className="text-muted mb-4">
              Monitor IT tickets, track performance metrics, and analyze trends — all in one place.
            </p>

            <div className="row g-4 justify-content-center">
              {[
                {
                  title: "Open Tickets",
                  value: 28,
                  bg: "linear-gradient(135deg, #0d6efd, #66b2ff)",
                  icon: "🎫",
                },
                {
                  title: "Resolved Issues",
                  value: 134,
                  bg: "linear-gradient(135deg, #28a745, #8fd694)",
                  icon: "✅",
                },
                {
                  title: "Pending Approvals",
                  value: 8,
                  bg: "linear-gradient(135deg, #ffc107, #ffe082)",
                  icon: "⏳",
                },
                {
                  title: "High Priority",
                  value: 8,
                  bg: "linear-gradient(135deg, #dc3545, #ff6b6b)",
                  icon: "🚨",
                },
              ].map((card, idx) => (
                <div className="col-md-3 col-sm-6" key={idx}>
                  <div
                    className="overview-card shadow-lg p-4 rounded-4 text-white d-flex flex-column align-items-center justify-content-center"
                    style={{ background: card.bg }}
                  >
                    <div
                      className="icon-circle mb-3 d-flex align-items-center justify-content-center"
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.25)",
                        backdropFilter: "blur(6px)",
                        fontSize: "28px",
                      }}
                    >
                      {card.icon}
                    </div>
                    <h6 className="fw-bold mb-1">{card.title}</h6>
                    <p className="fs-3 fw-bolder mb-0">{card.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* ✨ Custom Styles */}
            <style jsx="true">{`
    .overview-card {
      transition: all 0.35s ease-in-out;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }

    .overview-card::after {
      content: "";
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(
        circle at center,
        rgba(255, 255, 255, 0.25) 0%,
        transparent 70%
      );
      transform: scale(0);
      transition: transform 0.5s ease-in-out;
      z-index: 0;
    }

    .overview-card:hover::after {
      transform: scale(1);
    }

    .overview-card:hover {
      transform: translateY(-6px) scale(1.02);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
    }

    .overview-card h6,
    .overview-card p {
      position: relative;
      z-index: 2;
    }
  `}</style>
          </section>


          {/* Analytics Section */}
          <section id="analytics" className="mb-5">
            <h4 className="fw-bold text-center mb-4">📊 System Analytics</h4>
            <div className="row g-4">
              {/* Line Chart */}
              <div className="col-lg-6 col-md-12">
                <div className="card p-3 shadow-sm">
                  <h6 className="text-center mb-3">Monthly Ticket Trends</h6>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={monthlyTickets}>
                      <Line type="monotone" dataKey="Open" stroke="#dc3545" strokeWidth={2} />
                      <Line type="monotone" dataKey="Resolved" stroke="#28a745" strokeWidth={2} />
                      <CartesianGrid stroke="#ccc" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Pie Chart */}
              <div className="col-lg-6 col-md-12">
                <div className="card p-3 shadow-sm">
                  <h6 className="text-center mb-3">Priority Distribution</h6>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie data={pieData} dataKey="value" outerRadius={100} label>
                        {pieData.map((entry, index) => (
                          <Cell key={index} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* 📊 Bar Chart Section - Enhanced */}
              <div className="col-lg-6 col-md-12">
                <div className="card chart-card shadow-lg border-0 p-4">
                  <h5 className="chart-title text-center mb-3 fw-bold text-primary">
                    📈 Tickets by Department
                  </h5>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                      data={[
                        { department: "IT Support", tickets: 40 },
                        { department: "Networking", tickets: 25 },
                        { department: "Software", tickets: 30 },
                        { department: "Hardware", tickets: 20 },
                      ]}
                      barSize={40}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
                      <XAxis dataKey="department" tick={{ fill: "#555", fontSize: 12 }} />
                      <YAxis tick={{ fill: "#555", fontSize: 12 }} />
                      <Tooltip cursor={{ fill: "rgba(0,0,0,0.05)" }} />
                      <Legend />
                      <Bar
                        dataKey="tickets"
                        radius={[10, 10, 0, 0]}
                        fill="url(#colorGradient)"
                      />
                      <defs>
                        <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#007bff" stopOpacity={0.9} />
                          <stop offset="100%" stopColor="#66b2ff" stopOpacity={0.8} />
                        </linearGradient>
                      </defs>
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* 🎨 Custom Styling */}
                <style jsx="true">{`
    .chart-card {
      background: #ffffff;
      border-radius: 16px;
      transition: all 0.3s ease-in-out;
    }
    .chart-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }
    .chart-title {
      letter-spacing: 0.5px;
      color: #0056b3;
    }
  `}</style>
              </div>


              {/* 🌟 Enhanced Summary Cards Section */}
              <div className="col-lg-6 col-md-12">
                <div className="row g-3">
                  {[
                    { title: "Total Tickets This Month", value: 85, color: "linear-gradient(135deg, #0d6efd, #1e90ff)" },
                    { title: "Avg Resolution Time", value: "2.5 Days", color: "linear-gradient(135deg, #20c997, #28a745)" },
                    { title: "High Priority Ratio", value: "25%", color: "linear-gradient(135deg, #ffc107, #ffca2c)" },
                    { title: "Pending Approvals", value: 8, color: "linear-gradient(135deg, #dc3545, #ff4b5c)" },
                  ].map((card, idx) => (
                    <div className="col-6" key={idx}>
                      <div
                        className="card summary-card text-white text-center shadow-lg p-4 border-0"
                        style={{ background: card.color }}
                      >
                        <h6 className="fw-semibold mb-2">{card.title}</h6>
                        <p className="fs-2 fw-bold mb-0">{card.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 💅 Custom Styling */}
                <style jsx="true">{`
    .summary-card {
      border-radius: 16px;
      transition: all 0.3s ease-in-out;
      transform: scale(1);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
      cursor: pointer;
    }
    .summary-card:hover {
      transform: scale(1.05);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.35);
      filter: brightness(1.1);
    }
    .summary-card h6 {
      font-size: 0.95rem;
      letter-spacing: 0.3px;
      text-transform: uppercase;
    }
    .summary-card p {
      font-size: 1.8rem;
      margin-bottom: 0;
    }
  `}</style>
              </div>

            </div>
          </section>

          {/* Ticket Tables */}
          <PendingTickets tickets={tickets} onView={handleViewTicket} />
          <ResolvedTickets tickets={resolvedTickets} onView={handleViewTicket} />
        </div>
      </div>

      {/* 🟢 Modern Glassmorphism Modal */}

      {showModal && selectedTicket && (
        <div className="custom-modal-backdrop" onClick={handleCloseModal}>
          <div
            className="custom-modal animate-popup"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="modal-header border-0 d-flex justify-content-between align-items-center">
              <div>
                <h4 className="fw-bold text-danger mb-1">
                  🎟 {selectedTicket.title}
                </h4>
                <small className="text-muted">Ticket ID: {selectedTicket.id}</small>
              </div>
              <button
                type="button"
                className="btn-close btn-close-dark"
                onClick={handleCloseModal}
              ></button>
            </div>

            {/* Modal Body */}
            <div className="modal-body px-4">
              <div className="d-flex flex-column gap-2">
                <p className="mb-2">
                  <strong>Issue Summary:</strong> {selectedTicket.desc}
                </p>
                <p className="text-secondary" style={{ fontSize: "15px", lineHeight: "1.6" }}>
                  It appears that the user is experiencing technical difficulties that are impacting
                  daily work operations. Our IT team is currently investigating the root cause
                  and will provide updates as soon as possible. Please ensure that all necessary
                  details and screenshots are included for faster resolution.
                </p>
                <div className="d-flex align-items-center gap-2">
                  <strong>Status:</strong>
                  <span className="badge bg-success px-3 py-2">
                    {selectedTicket.status}
                  </span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <strong>Priority:</strong>
                  <span
                    className={`badge fs-6 px-3 py-2 ${selectedTicket.priority === "High"
                      ? "bg-danger"
                      : selectedTicket.priority === "Medium"
                        ? "bg-warning text-dark"
                        : "bg-secondary"
                      }`}
                  >
                    {selectedTicket.priority}
                  </span>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="modal-footer border-0 justify-content-center">
              <button
                className="btn btn-danger px-4 rounded-pill shadow-sm"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>

          {/* ✨ Custom Styles */}
          <style jsx="true">{`
      .custom-modal-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.55);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1050;
        backdrop-filter: blur(6px);
        animation: fadeBackdrop 0.3s ease-in-out;
      }

      .custom-modal {
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(10px);
        border-radius: 18px;
        box-shadow: 0 8px 40px rgba(0, 0, 0, 0.35);
        width: 420px;
        max-width: 90%;
        transition: transform 0.3s ease, opacity 0.3s ease;
        border: 1px solid rgba(255, 255, 255, 0.3);
      }

      @keyframes fadeBackdrop {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      .animate-popup {
        animation: slideUp 0.35s ease-in-out;
      }

      @keyframes slideUp {
        0% {
          transform: translateY(30px);
          opacity: 0;
        }
        100% {
          transform: translateY(0);
          opacity: 1;
        }
      }

      .modal-body p {
        font-size: 15px;
      }

      .badge {
        font-size: 0.9rem;
      }

      @media (max-width: 576px) {
        .custom-modal {
          width: 90%;
          padding: 10px;
        }
      }
    `}</style>
        </div>
      )}


    </div>
  );
}

export default Dashboard;
