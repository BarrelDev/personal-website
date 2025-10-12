import logo from "../assets/images/profile-img.jpg";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="container-fluid bg-primary-subtle" id="about">
        <div className="container mt-3 pt-5 pb-3" data-aos="fade-up">
          <h1 className="text-center fw-bold fs-1">About</h1>
        </div>
        <div className="container col-xxl-8 px-4 py-1">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-lg-6">
              <p
                className="fw-light text-white text-body-light text-wrap fs-5"
                data-aos="fade-up"
              >
                I'm a{" "}
                <span className="text-warning fw-bold">
                  Computer Science & Robotics
                </span>{" "}
                student at{" "}
                <span className="fw-semibold">Carnegie Mellon University</span>, passionate
                about{" "}
                <span className="text-primary-emphasis fw-bold">
                  building technology that helps people and solves real-world problems
                </span>
                . I love working across disciplines to design intelligent systems—from
                robotics algorithms to web infrastructure and open-source tools.
              </p>

              <h3
                className="display-5 fw-bold text-white text-body-light fs-4 lh-1 mb-3 text-capitalized"
                data-aos="fade-up"
              >
                Robotics.
              </h3>
              <p
                className="fw-light text-white text-body-light text-wrap fs-5"
                data-aos="fade-up"
              >
                At{" "}
                <a href="https://carnegiemellonracing.org/" className="text-light" target="_blank">
                  Carnegie Mellon Racing
                </a>
                , I work on the{" "}
                <span className="fw-semibold">driverless path-planning team</span>,
                developing SLAM and trajectory algorithms for an autonomous electric race car
                using <span className="fst-italic">C++, Python, and ROS 2</span>.  
                I also served as the{" "}
                <span className="fw-semibold">president of FRC Team 3637, The Daleks</span>,
                where I led my team to win{" "}
                <span className="fw-semibold">District Events</span> and the{" "}
                <span className="fst-italic">FIRST Impact Award</span>, earning a spot at the{" "}
                <span className="fw-semibold">World Championship</span>.  
                Over the summer, I led a{" "}
                <span className="fw-semibold">holonomic drivetrain project at Nokia Bell Labs</span>,
                collaborating across disciplines to design and test new motion control systems.
                I also co-authored a research paper with Dr. Wu of NJIT, extending
                pathfinding algorithms for 3D terrain navigation.
              </p>

              <h3
                className="display-5 fw-bold text-white text-body-light fs-4 lh-1 mb-3 text-capitalized"
                data-aos="fade-up"
              >
                Software & Collaboration.
              </h3>
              <p
                className="fw-light text-white text-body-light text-wrap fs-5"
                data-aos="fade-up"
              >
                Beyond robotics, I’m part of{" "}
                <a href="https://scottylabs.org/" className="text-light" target="_blank">
                  ScottyLabs
                </a>
                , a student-run organization building platforms used by thousands of CMU
                students. I contribute to the{" "}
                <a href="https://cmucourses.com/" className="text-light" target="_blank">
                  CMU Courses
                </a>{" "}
                website backend—developing scheduling heuristics and data pipelines in
                <span className="fw-semibold"> Rust and TypeScript</span>.  
                I enjoy working on software that’s both technically challenging and directly
                impacts the student community.
              </p>
            </div>
            <div className="col-10 col-sm-8 col-lg-6" data-aos="fade-up">
              <img
                src={logo}
                className="d-block mx-lg-auto img-fluid border border-3 rounded-5 shadow"
                alt="Bootstrap Themes"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
