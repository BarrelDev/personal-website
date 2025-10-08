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
//const Skills = () => {
//  useEffect(() => {
//    AOS.init();
//  }, []);

//  return (
//    <>
//      <div className="container-fluid bg-success-subtle" id="skills">
//        <div className="container mt-3 pt-5 pb-3" data-aos="fade-up">
//          <h1 className="text-center fw-bold fs-1">Skills</h1>
//        </div>
//        <div className="container col-xxl-8 px-4 py-1">
//          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
//            <div className="col-md-4">
//              <SkillBar name="C++" progress={69} />
//            </div>
//            <div className="col-md-4">
//              <SkillBar name="Python" progress={80} />
//            </div>
//            <div className="col-md-4">
//              <SkillBar name="TypeScript" progress={34} />
//            </div>
//          </div>
//          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
//            <div className="col-md-4">
//              <SkillBar name="C#" progress={60} />
//            </div>
//            <div className="col-md-4">
//              <SkillBar name="Java" progress={50} />
//            </div>
//            <div className="col-md-4">
//              <SkillBar name="Rust" progress={12} />
//            </div>
//          </div>
//          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
//            <div className="col-md-4">
//              <SkillBar name="Git" progress={40} />
//            </div>
//            <div className="col-md-4">
//              <SkillBar name="Leadership" progress={80} />
//            </div>
//            <div className="col-md-4">
//              <SkillBar name="React" progress={35} />
//            </div>
//          </div>
//        </div>
//      </div>
//    </>
//  );
//};

export default Skills;
