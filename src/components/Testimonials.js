import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Testimonials() {
  const testimonials = [
    {
      name: "Kate Wilson",
      role: "IT Support Engineer, Tech Mahindra",
      feedback:
        "The new IT Helpdesk system has made our ticket tracking and response times so much smoother. The interface is intuitive and efficient.",
      avatar: "https://i.pravatar.cc/100?img=11",
      rating: 5,
    },
    {
      name: "Jhona D'Souza",
      role: "HR Coordinator, Tech Mahindra",
      feedback:
        "I appreciate how the revamped Helpdesk handles internal requests. It's faster and saves us so much time every day!",
      avatar: "https://i.pravatar.cc/100?img=12",
      rating: 4,
    },
    {
      name: "Samuel Lee",
      role: "Team Lead - Infrastructure",
      feedback:
        "The integration of the new IT Helpdesk system with our existing tools is seamless. Kudos to the team for delivering a well-designed solution.",
      avatar: "https://i.pravatar.cc/100?img=13",
      rating: 5,
    },
    {
        name: "Anni marie",
        role: "Software Developer, Tech Mahindra",
        feedback:
            "The IT Helpdesk platform has significantly improved our ability to report and resolve technical issues quickly. The user experience is top-notch!",
        avatar: "https://i.pravatar.cc/100?img=21",
        rating: 5,
    },
    {
        name: "Rakesh D'souza",
        role: "Network Administrator, Tech Mahindra",
        feedback:
            "Managing IT tickets has never been easier. The new system's features and responsiveness have greatly enhanced our workflow.",
        avatar: "https://i.pravatar.cc/100?img=1",
        rating: 4,
    },
    {
        name: "Linda Gomez",
        role: "Customer Support Specialist",
        feedback:
            "The revamped IT Helpdesk has transformed how we handle support requests. The efficiency and clarity it provides are outstanding.",
        avatar: "https://i.pravatar.cc/100?img=5",
        rating: 5,
    }
  ];

  return (
    <section className="testimonial-section   py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-warning text-uppercase">
            What Our Team Says
          </h2>
          <p className="text-white fw-bold lead">
            Real feedback from Tech Mahindra employees using our new IT Helpdesk
            platform.
          </p>
          <div className="divider mx-auto my-3"></div>
        </div>

        <div className="row gy-4">
          {testimonials.map((t, idx) => (
            <div className="col-lg-4 col-md-6" key={idx}>
              <div className="card border-0 shadow-sm testimonial-card h-100">
                <div className="card-body text-center p-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="rounded-circle mb-3"
                    width="80"
                    height="80"
                  />
                  <h5 className="fw-bold text-dark mb-1">{t.name}</h5>
                  <p className="text-muted small mb-2">{t.role}</p>
                  <div className="text-warning mb-3">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <i key={i} className="fa-solid fa-star"></i>
                    ))}
                  </div>
                  <p className="text-muted fst-italic">{t.feedback}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .testimonial-section {
          background: linear-gradient(137deg, #b71c1c, #4a0000, #43ffefff 100%);
        }

        .divider {
          width: 80px;
          height: 3px;
          background-color: #dc3545;
          border-radius: 3px;
        }

        .testimonial-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 15px;
        }

        .testimonial-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 6px 18px rgba(220, 53, 69, 0.2);
        }

        @media (max-width: 576px) {
          .testimonial-card {
            margin-bottom: 20px;
          }
        }
      `}</style>
    </section>
  );
}

export default Testimonials;
