import resume_link from "../assets/pdf/Resume-VisvamRajesh.pdf";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import resume from "../data/resume.json";
import publications from "../data/publications.json";

const resumeData = {
  ...resume,
  publications
};

const ResumeSection = () => {
  const [activeTab, setActiveTab] = useState("skills");
  const [swiperInstance, setSwiperInstance] = useState(null);
  const tabs = Object.keys(resumeData);

  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  // Sync Swiper with activeTab
  useEffect(() => {
    if (swiperInstance) {
      const tabIndex = tabs.indexOf(activeTab);
      swiperInstance.slideTo(tabIndex);
      setTimeout(() => AOS.refresh(), 300);
    }
  }, [activeTab, swiperInstance]);

  return (
    <section id="resume" className="container-fluid bg-success-subtle py-5">
      <div className="container" data-aos="fade-up">
        <h1 className="text-center fw-bold fs-1 mb-5" data-aos="fade-up">
          Resume
        </h1>

        {/* Download Button */}
        <div className="text-center mb-4">
          <a
            href={resume_link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Download Resume
          </a>
        </div>

        {/* Tabs */}
        <div
          className="d-flex justify-content-center flex-wrap gap-2 mb-4"
          data-aos="fade-up"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`btn ${
                activeTab === tab ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Swiper Section */}
        <Swiper
          modules={[EffectFade]}
          effect="slide" // can switch to "fade" if you prefer
          onSwiper={setSwiperInstance}
          allowTouchMove={false}
          speed={500}
          className="resume-swiper"
          data-aos="fade-up"
        >
          <SwiperSlide>
            <div className="p-3" data-aos="fade-up">
              <SkillsSection items={resumeData.skills} />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="p-3" data-aos="fade-up">
              <EducationSection items={resumeData.education} />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="p-3" data-aos="fade-up">
              <ExperienceSection items={resumeData.experience} />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="p-3" data-aos="fade-up">
              <PublicationsSection items={resumeData.publications} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

const SkillsSection = ({ items }) => (
  <div>
    {items.map((category, idx) => (
      <div key={idx} className="mb-4">
        <h5 className="fw-bold">{category.category}</h5>
        <div className="d-flex flex-wrap gap-2">
          {category.items.map((skill, i) => (
            <span key={i} className="badge bg-success text-light p-2">
              {skill}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const ExperienceSection = ({ items }) => (
  <div className="row">
    {items.map((exp, i) => (
      <div key={i} className="col-md-6 mb-4">
        <div className="p-3 rounded-3 shadow-sm bg-success h-100">
          <h5 className="fw-bold mb-1">{exp.role}</h5>
          <div className="text-white mb-1">{exp.company}</div>
          <small className="text-white">{exp.period}</small>
          {Array.isArray(exp.description) ? (
            <ul className="mt-2 mb-0">
              {exp.description.map((d, j) => (
                <li key={j}>{d}</li>
              ))}
            </ul>
          ) : (
            <p className="mt-2 mb-0">{exp.description}</p>
          )}
        </div>
      </div>
    ))}
  </div>
);

const EducationSection = ({ items }) => (
  <div className="row">
    {items.map((edu, i) => (
      <div key={i} className="col-md-6 mb-4">
        <div className="p-3 rounded-3 shadow-sm bg-success h-100">
          <h5 className="fw-bold mb-1">{edu.institution}</h5>
          <small className="text-white">{edu.period}</small>
          {edu.degree && <div>{edu.degree}</div>}
          {edu.gpa && <div>GPA: {edu.gpa}</div>}
        </div>
      </div>
    ))}
  </div>
);

const PublicationsSection = ({ items }) => (
  <div className="row">
    {items.map((pub, i) => (
      <div key={i} className="col-md-6 mb-4">
        <div className="p-3 rounded-3 shadow-sm bg-success h-100">
          <h5 className="fw-bold mb-1">{pub.title}</h5>
          {pub.author && <div><em>{pub.author}</em></div>}
          {pub.journal && <div>{pub.journal}</div>}
          {pub.year && <small className="text-white">{pub.year}</small>}
          {pub.link && (
            <div className="mt-2">
              <a href={pub.link} target="_blank" rel="noreferrer">
                View Publication
              </a>
            </div>
          )}
        </div>
      </div>
    ))}
  </div>
);
//const ResumeSection = ({ resumeData }) => {
//  return (
//    <div>
//      {/* Download Resume Button */}
//      <div className="mb-4 text-center">
//        <a
//          href={resume_link}
//          target="_blank"
//          rel="noopener noreferrer"
//          className="btn btn-primary"
//        >
//          Download Resume
//        </a>
//      </div>

//      {/* Accordion for Resume Sections */}
//      <div className="accordion" id="resumeAccordion">
//        {Object.entries(resumeData).map(([section, items], idx) => (
//          <div key={idx} className="accordion-item">
//            <h2 className="accordion-header" id={`heading-${idx}`}>
//              <button
//                className="accordion-button collapsed"
//                type="button"
//                data-bs-toggle="collapse"
//                data-bs-target={`#collapse-${idx}`}
//                aria-expanded="false"
//                aria-controls={`collapse-${idx}`}
//              >
//                {section.charAt(0).toUpperCase() + section.slice(1)}
//              </button>
//            </h2>

//            <div
//              id={`collapse-${idx}`}
//              className="accordion-collapse collapse"
//              aria-labelledby={`heading-${idx}`}
//              data-bs-parent="#resumeAccordion"
//            >
//              <div className="accordion-body">
//                <ul className="list-group list-group-flush">
//                  {items.map((item, i) => {
//                    // Adaptive rendering based on your JSON structure
//                    if (section === "skills") {
//                      return (
//                        <li key={i} className="list-group-item">
//                          <strong>{item.category}:</strong> {item.items.join(", ")}
//                        </li>
//                      );
//                    }

//                    if (section === "education") {
//                      return (
//                        <li key={i} className="list-group-item">
//                          <h6>{item.institution}</h6>
//                          <small className="text-muted">{item.period}</small>
//                          {item.gpa && <div>GPA: {item.gpa}</div>}
//                        </li>
//                      );
//                    }

//                    if (section === "experience") {
//                      return (
//                        <li key={i} className="list-group-item">
//                          <h6>{item.role}</h6>
//                          <small className="text-muted">{item.period}</small>
//                          <div><strong>{item.company}</strong></div>
//                          {Array.isArray(item.description) ? (
//                            <ul>
//                              {item.description.map((d, j) => (
//                                <li key={j}>{d}</li>
//                              ))}
//                            </ul>
//                          ) : (
//                            <div>{item.description}</div>
//                          )}
//                        </li>
//                      );
//                    }

//                    if (section === "publications") {
//                      return (
//                        <li key={i} className="list-group-item">
//                          {item.title && <h6>{item.title}</h6>}
//                          {item.author && <div><em>{item.author}</em></div>}
//                          {item.year && <small className="text-muted">{item.year}</small>}
//                          {item.journal && <div>{item.journal}</div>}
//                          {item.link && (
//                            <a href={item.link} target="_blank" rel="noreferrer">
//                              View
//                            </a>
//                          )}
//                        </li>
//                      );
//                    }

//                    return null;
//                  })}
//                </ul>
//              </div>
//            </div>
//          </div>
//        ))}
//      </div>
//    </div>
//  );
//};

export default ResumeSection;
