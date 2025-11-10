import React, { useState } from "react";
import "./Resume.css";

const Resume = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const skills = [
    {
      title: "Frontend Development",
      subtitle: "React, JavaScript, HTML, CSS",
      year: "Expertise",
      description:
        "Experienced in building responsive UIs using React, modern JavaScript (ES6+), and CSS frameworks.",
    },
    {
      title: "Backend Development",
      subtitle: "Node.js, Express.js",
      year: "Proficiency",
      description:
        "Hands-on with RESTful APIs, authentication, and scalable backend logic.",
    },
    {
      title: "Database",
      subtitle: "MongoDB, MySQL",
      year: "Experience",
      description:
        "Designed efficient database schemas and optimized queries for performance.",
    },
  ];

  const internship = [
    {
      title: "CodezCart",
      subtitle: "Web Development Intern",
      year: "2023",
      description:
        "Worked on eCommerce modules, improving UI and backend API integration.",
      certificate: "/certificates/codezcart.jpg",
    },
    {
      title: "Navitvea",
      subtitle: "Frontend Developer Intern",
      year: "2024",
      description:
        "Developed dynamic React dashboards with responsive design principles.",
      certificate: "/certificates/navitvea.jpg",
    },
    {
      title: "MERN Stack",
      subtitle: "Full Stack Internship Project",
      year: "2024 - 2025",
      description:
        "Built full-stack applications using MongoDB, Express, React, and Node.js.",
      certificate: "/certificates/mernstack.jpg",
    },
  ];

  return (
    <section className="resume-section" id="resume">
      <h2 className="resume-title">Resume</h2>
      <p className="resume-subtitle">Skills & Internship</p>

      <div className="resume-container">
        {/* Skills Column */}
        <div className="column">
          <h3 className="column-title">Skills</h3>
          <div className="timeline">
            {skills.map((item, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-header">
                  <div>
                    <h4>{item.title}</h4>
                    <p className="subtitle">{item.subtitle}</p>
                    <span className="year">{item.year}</span>
                  </div>
                  <button
                    className="toggle-btn"
                    onClick={() => toggle(index)}
                  >
                    {activeIndex === index ? "−" : "+"}
                  </button>
                </div>

                {activeIndex === index && (
                  <div className="details">
                    <p>{item.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Internship Column */}
        <div className="column">
          <h3 className="column-title">Internship</h3>
          <div className="timeline">
            {internship.map((item, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-header">
                  <div>
                    <h4>{item.title}</h4>
                    <p className="subtitle">{item.subtitle}</p>
                    <span className="year">{item.year}</span>
                  </div>
                  <button
                    className="toggle-btn"
                    onClick={() => toggle(index + skills.length)}
                  >
                    {activeIndex === index + skills.length ? "−" : "+"}
                  </button>
                </div>

                {activeIndex === index + skills.length && (
                  <div className="details">
                    <p>{item.description}</p>
                    {item.certificate && (
                      <button
                        className="certificate-btn"
                        onClick={() =>
                          setSelectedCertificate(item.certificate)
                        }
                      >
                        🎓 View Certificate
                      </button>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedCertificate}
              alt="Certificate"
              className="modal-image"
            />
            <button
              className="close-btn"
              onClick={() => setSelectedCertificate(null)}
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Resume;
