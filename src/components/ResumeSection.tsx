import resume_link from "../assets/pdf/Resume-VisvamRajesh.pdf";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import resume from "../data/resume.json";
import publications from "../data/publications.json";

type SkillCategory = {
  category: string;
  items: string[];
};

type EducationItem = {
  institution: string;
  period: string;
  degree?: string;
  gpa?: string;
};

type ExperienceItem = {
  company: string;
  period: string;
  role: string;
  description: string | string[];
};

type Publication = {
  title?: string;
  author?: string;
  journal?: string;
  year?: string;
  link?: string;
};

type ResumeData = {
  skills: SkillCategory[];
  education?: EducationItem[];
  experience?: ExperienceItem[];
  publications?: Publication[] | string[];
};

const resumeData: ResumeData = {
  ...resume,
  publications,
};

const ResumeSection = () => {
  const [activeTab, setActiveTab] = useState<string>("skills");
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(null);
  const tabs = Object.keys(resumeData) as (keyof ResumeData)[];

  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  // Sync Swiper with activeTab safely
  useEffect(() => {
    if (!swiperInstance) return;
    const tabIndex = tabs.indexOf(activeTab as keyof ResumeData);
    if (tabIndex >= 0 && typeof swiperInstance.slideTo === "function") {
      swiperInstance.slideTo(tabIndex);
      setTimeout(() => AOS.refresh(), 300);
    }
  }, [activeTab, swiperInstance, tabs]);

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
              key={String(tab)}
              className={`btn ${
                activeTab === tab ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() => setActiveTab(String(tab))}
            >
              {String(tab).charAt(0).toUpperCase() + String(tab).slice(1)}
            </button>
          ))}
        </div>

        {/* Swiper Section */}
        <Swiper
          modules={[EffectFade]}
          effect="slide" // "fade" is also an option
          onSwiper={(s) => setSwiperInstance(s)}
          allowTouchMove={false}
          speed={500}
          className="resume-swiper"
          data-aos="fade-up"
        >
          <SwiperSlide>
            <div className="p-3" data-aos="fade-up">
              <SkillsSection items={resumeData.skills ?? []} />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="p-3" data-aos="fade-up">
              <ExperienceSection items={resumeData.experience ?? []} />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="p-3" data-aos="fade-up">
              <EducationSection items={resumeData.education ?? []} />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="p-3" data-aos="fade-up">
              <PublicationsSection items={resumeData.publications ?? []} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

const SkillsSection: React.FC<{ items: SkillCategory[] }> = ({ items }) => (
  <div>
    {items.map((category, idx) => (
      <div key={idx} className="mb-4">
        <h5 className="fw-bold">{category.category}</h5>
        <div className="d-flex flex-wrap gap-2">
          {category.items.map((skill, i) => (
            <span
              key={i}
              className="badge text-light p-2"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                border: "1px solid rgba(255, 255, 255, 0.25)",
                backdropFilter: "blur(4px)",
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const ExperienceSection: React.FC<{ items: ExperienceItem[] }> = ({ items }) => (
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

const EducationSection: React.FC<{ items: EducationItem[] }> = ({ items }) => (
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

const PublicationsSection: React.FC<{ items: Publication[] | string[] }> = ({ items }) => (
  <div className="row">
    {items.map((pub, i) => {
      // publications.json may contain strings or objects, handle both
      if (typeof pub === "string") {
        return (
          <div key={i} className="col-md-6 mb-4">
            <div className="p-3 rounded-3 shadow-sm bg-success h-100">
              <div>{pub}</div>
            </div>
          </div>
        );
      }
      return (
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
      );
    })}
  </div>
);

export default ResumeSection;

