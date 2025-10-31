import React from "react";
import "./Tickets.css"; // ✅ Import shared CSS

function PendingTickets({ tickets, onView }) {
  return (
    <section id="pending" className="ticket-section pending-theme">
      <h3 className="section-title text-danger">🔴 Pending Tickets</h3>

      <div className="table-responsive">
        <table className="table ticket-table align-middle">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
              <th>Priority</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <tr key={ticket.id}>
                <td className="fw-semibold">{ticket.id}</td>
                <td>{ticket.title}</td>
                <td>
                  {ticket.desc} — This issue is being analyzed by the IT
                  operations team to identify performance or software issues.
                </td>
                <td>
                  <span className="badge bg-warning text-dark">
                    {ticket.status}
                  </span>
                </td>
                <td>
                  <span
                    className={`badge ${
                      ticket.priority === "High"
                        ? "bg-danger"
                        : ticket.priority === "Medium"
                        ? "bg-warning text-dark"
                        : "bg-secondary"
                    }`}
                  >
                    {ticket.priority}
                  </span>
                </td>
                <td>
                  <button
                    className="btn btn-outline-danger btn-sm rounded-pill view-btn"
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
    </section>
  );
}

export default PendingTickets;
