import SkillBar from "./SkillBar";
import SkillTabs from "./SkillTabs.tsx";
import ResumeSection from "./ResumeSection.tsx";
import { useEffect, useState } from "react";
import resume from "../data/resume.json";
import publications from "../data/publications.json";
import AOS from "aos";
import "aos/dist/aos.css";

const resumeData = {
  ...resume,
  publications
};

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  const allSkills = [
    { name: "C++", progress: 69, category: "Technical" },
    { name: "Python", progress: 80, category: "Technical" },
    { name: "TypeScript", progress: 34, category: "Technical" },
    { name: "C#", progress: 60, category: "Technical" },
    { name: "Java", progress: 50, category: "Technical" },
    { name: "Rust", progress: 12, category: "Technical" },
    { name: "Git", progress: 40, category: "Technical" },
    { name: "React", progress: 35, category: "Technical" },
    { name: "Leadership", progress: 80, category: "Leadership" },
    { name: "Communication", progress: 75, category: "Soft" },
    { name: "Collaboration", progress: 70, category: "Soft" },
  ];

  return (
    <section id="skills" className="container-fluid bg-success-subtle py-5">
      <div className="container" data-aos="fade-up">
        <h1 className="text-center fw-bold fs-1 mb-5">Resume & Skills</h1>

        <div className="row g-5">
          <div className="col-lg-6">
            <h3>Skills</h3>
            <SkillTabs skills={allSkills} />
          </div>

          <div className="col-lg-6">
            <h3>Resume</h3>
            <ResumeSection resumeData={resumeData} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
