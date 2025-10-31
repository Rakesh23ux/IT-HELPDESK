import React from "react";
import "./Tickets.css"; // ✅ Import shared CSS

function ResolvedTickets({ tickets, onView }) {
  return (
    <section id="resolved" className="ticket-section resolved-theme">
      <h3 className="section-title text-success">✅ Resolved Tickets</h3>

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
                  {ticket.desc} — The issue was successfully fixed and verified
                  by QA. Continuous monitoring ensures system stability.
                </td>
                <td>
                  <span className="badge bg-success">{ticket.status}</span>
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
                    className="btn btn-outline-success btn-sm rounded-pill view-btn"
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

export default ResolvedTickets;
