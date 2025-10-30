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
          { name: "Pending Tickets", icon: "🔴", id: "pending" },
          { name: "Resolved Tickets", icon: "✅", id: "resolved" },
          { name: "Users", icon: "👥", id: "users" },
        ].map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className={`nav-link text-white d-flex align-items-center gap-2 ${
                activeLink === link.id ? "active" : ""
              }`}
              onClick={() => setActiveLink(link.id)}
            >
              <span>{link.icon}</span>
              <span>{link.name}</span>
            </a>
          </li>
        ))}
      </ul>

      <button
        className="btn btn-danger mt-auto"
        onClick={() =>
          document.querySelector(".sidebar").classList.toggle("collapsed")
        }
      >
        Toggle Sidebar
      </button>

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
        .sidebar.collapsed {
          width: 80px;
        }
        .sidebar.collapsed .nav-link span:nth-child(2) {
          display: none;
        }
      `}</style>
    </div>
  );
}

// Ticket Table Component
function TicketTable({ tickets, title, onView }) {
  return (
    <div className="mb-5">
      <h3 className="fw-bold text-center mb-3">{title}</h3>
      <div className="table-responsive">
        <table className="table table-striped align-middle">
          <thead>
            <tr>
              <th className="bg-black text-success">ID</th>
              <th className="bg-black text-warning">Title</th>
              <th className="bg-black text-warning">Description</th>
              <th className="bg-black text-white">🟢 Status</th>
              <th className="bg-black text-white">📊 Priority</th>
              <th className="bg-black text-white">❗ Actions</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.id}>
                <td>{ticket.id}</td>
                <td className="text-danger fw-semibold">{ticket.title}</td>
                <td>{ticket.desc}</td>
                <td>
                  <span className="badge bg-success">{ticket.status}</span>
                </td>
                <td>
                  <span className="badge bg-primary">{ticket.priority}</span>
                </td>
                <td>
                  <button
                    className="btn btn-light border shadow-sm"
                    style={{ cursor: "pointer" }}
                    onClick={() => onView(ticket)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Main Dashboard Component
function Dashboard() {
  const navigate = useNavigate();
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [activeLink, setActiveLink] = useState("overview");

  const tickets = [
    { id: "#73f5", title: "System Crash", desc: "Server downtime issue", status: "In-progress", priority: "High" },
    { id: "#8ece", title: "Login Error", desc: "Error on login page", status: "In-progress", priority: "Medium" },
    { id: "#d795", title: "Node.js Issue", desc: "Installation problem", status: "In-progress", priority: "High" },
    { id: "#y458", title: "Clipboard Bug", desc: "Copy not working", status: "In-progress", priority: "High" },
    { id: "#u546", title: "Network", desc: "Internet issue", status: "In-progress", priority: "High" },
  ];

  const resolvedTickets = [
    { id: "#p3f5", title: "Access Reset", desc: "Password reset", status: "Completed", priority: "High" },
    { id: "#b5f8", title: "Login Fix", desc: "Fixed login page error", status: "Completed", priority: "Medium" },
    { id: "#xc76", title: "Node Installation", desc: "Setup completed", status: "Completed", priority: "High" },
    { id: "#e570", title: "Clipboard", desc: "Clipboard issue resolved", status: "Completed", priority: "High" },
    { id: "#e897", title: "Internet", desc: "Network restored", status: "Completed", priority: "High" },
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

          {/* Overview Cards */}
          <section id="overview" className="text-center mb-5">
            <h3 className="fw-bold text-dark">Welcome, Admin 👋</h3>
            <p className="text-muted mb-4">
              Track IT performance, open tickets, and resolution metrics in one glance.
            </p>
            <div className="row g-4 justify-content-center">
              {[
                { title: "Open Tickets", value: 28, bg: "bg-primary", text: "text-white" },
                { title: "Resolved Issues", value: 134, bg: "bg-success", text: "text-white" },
                { title: "Pending Approvals", value: 5, bg: "bg-warning", text: "text-dark" },
                { title: "High Priority", value: 8, bg: "bg-danger", text: "text-white" },
              ].map((card, idx) => (
                <div className="col-md-3" key={idx}>
                  <div className={`card ${card.bg} ${card.text}`}>
                    <div className="card-body">
                      <h5>{card.title}</h5>
                      <p className="fs-3 fw-semibold">{card.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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

              {/* Bar Chart */}
              <div className="col-lg-6 col-md-12">
                <div className="card p-3 shadow-sm">
                  <h6 className="text-center mb-3">Tickets by Department</h6>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={[
                      { department: "IT Support", tickets: 40 },
                      { department: "Networking", tickets: 25 },
                      { department: "Software", tickets: 30 },
                      { department: "Hardware", tickets: 20 },
                    ]}>
                      <CartesianGrid stroke="#ccc" />
                      <XAxis dataKey="department" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="tickets" fill="#0d6efd" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Summary Cards */}
              <div className="col-lg-6 col-md-12">
                <div className="row g-3">
                  {[
                    { title: "Total Tickets This Month", value: 85 },
                    { title: "Avg Resolution Time", value: "2.5 Days" },
                    { title: "High Priority Ratio", value: "25%" },
                    { title: "Pending Approvals", value: 5 },
                  ].map((card, idx) => (
                    <div className="col-6" key={idx}>
                      <div className="card bg-light shadow-sm p-3 text-center">
                        <h6>{card.title}</h6>
                        <p className="fs-3 fw-bold">{card.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>

          {/* Tickets */}
          <TicketTable tickets={tickets} title="🔴 Pending 🎟️ Tickets" onView={handleViewTicket} />
          <TicketTable tickets={resolvedTickets} title="✅ Resolved 🎟️ Tickets" onView={handleViewTicket} />

        </div>
      </div>

      {/* Modal */}
      {showModal && selectedTicket && (
        <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header bg-dark text-white">
                <h5 className="modal-title">{selectedTicket.title}</h5>
                <button type="button" className="btn-close btn-close-white" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <p><strong>ID:</strong> {selectedTicket.id}</p>
                <p><strong>Description:</strong> {selectedTicket.desc}</p>
                <p><strong>Status:</strong> {selectedTicket.status}</p>
                <p><strong>Priority:</strong> {selectedTicket.priority}</p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default Dashboard;
