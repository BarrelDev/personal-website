import resume_link from "../assets/pdf/Resume-VisvamRajesh.pdf";

const ResumeSection = ({ resumeData }) => {
  return (
    <div>
      {/* Download Resume Button */}
      <div className="mb-4 text-center">
        <a
          href={resume_link}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Download Resume
        </a>
      </div>

      {/* Accordion for Resume Sections */}
      <div className="accordion" id="resumeAccordion">
        {Object.entries(resumeData).map(([section, items], idx) => (
          <div key={idx} className="accordion-item">
            <h2 className="accordion-header" id={`heading-${idx}`}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse-${idx}`}
                aria-expanded="false"
                aria-controls={`collapse-${idx}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </h2>

            <div
              id={`collapse-${idx}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading-${idx}`}
              data-bs-parent="#resumeAccordion"
            >
              <div className="accordion-body">
                <ul className="list-group list-group-flush">
                  {items.map((item, i) => {
                    // Adaptive rendering based on your JSON structure
                    if (section === "skills") {
                      return (
                        <li key={i} className="list-group-item">
                          <strong>{item.category}:</strong> {item.items.join(", ")}
                        </li>
                      );
                    }

                    if (section === "education") {
                      return (
                        <li key={i} className="list-group-item">
                          <h6>{item.institution}</h6>
                          <small className="text-muted">{item.period}</small>
                          {item.gpa && <div>GPA: {item.gpa}</div>}
                        </li>
                      );
                    }

                    if (section === "experience") {
                      return (
                        <li key={i} className="list-group-item">
                          <h6>{item.role}</h6>
                          <small className="text-muted">{item.period}</small>
                          <div><strong>{item.company}</strong></div>
                          {Array.isArray(item.description) ? (
                            <ul>
                              {item.description.map((d, j) => (
                                <li key={j}>{d}</li>
                              ))}
                            </ul>
                          ) : (
                            <div>{item.description}</div>
                          )}
                        </li>
                      );
                    }

                    if (section === "publications") {
                      return (
                        <li key={i} className="list-group-item">
                          {item.title && <h6>{item.title}</h6>}
                          {item.author && <div><em>{item.author}</em></div>}
                          {item.year && <small className="text-muted">{item.year}</small>}
                          {item.journal && <div>{item.journal}</div>}
                          {item.link && (
                            <a href={item.link} target="_blank" rel="noreferrer">
                              View
                            </a>
                          )}
                        </li>
                      );
                    }

                    return null;
                  })}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeSection;
