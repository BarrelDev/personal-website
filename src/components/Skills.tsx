import SkillBar from "./SkillBar";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="container-fluid bg-success-subtle" id="skills">
        <div className="container mt-3 pt-5 pb-3" data-aos="fade-up">
          <h1 className="text-center fw-bold fs-1">Skills</h1>
        </div>
        <div className="container col-xxl-8 px-4 py-1">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-md-4">
              <SkillBar name="C++" progress={69} />
            </div>
            <div className="col-md-4">
              <SkillBar name="Python" progress={80} />
            </div>
            <div className="col-md-4">
              <SkillBar name="TypeScript" progress={34} />
            </div>
          </div>
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-md-4">
              <SkillBar name="C#" progress={60} />
            </div>
            <div className="col-md-4">
              <SkillBar name="Java" progress={50} />
            </div>
            <div className="col-md-4">
              <SkillBar name="Rust" progress={12} />
            </div>
          </div>
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-md-4">
              <SkillBar name="Git" progress={40} />
            </div>
            <div className="col-md-4">
              <SkillBar name="Leadership" progress={80} />
            </div>
            <div className="col-md-4">
              <SkillBar name="React" progress={35} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
