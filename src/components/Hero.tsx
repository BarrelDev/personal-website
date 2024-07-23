import logo from "../assets/images/profile1.png";
import { SocialIcon } from "react-social-icons";
import { ReactTyped } from "react-typed";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const titles = [
  "Developer",
  "Robotics Programmer",
  "Programming Captain",
  "Game Developer",
  "Student",
  "Researcher",
  "Innovator",
  "Engineer",
  "Teacher",
  "Software Engineer",
  "Educator",
];

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="container-fluid bg-dark" id="home">
        <div className="container col-xxl-8 px-4 py-5 ">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6 border border-3 rounded-5 shadow pt-3" data-aos="fade-left">
              <img
                src={logo}
                className="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width="400"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <div className="social-links">
                <ul className="list-group list-group-horizontal list-group-flush">
                  <li className="list-group-item" data-aos="fade-right">
                    <SocialIcon url="https://www.linkedin.com/in/visvam/" />
                  </li>
                  <li className="list-group-item" data-aos="fade-right">
                    <SocialIcon url="https://github.com/BarrelDev/" />
                  </li>
                  <li className="list-group-item" data-aos="fade-right">
                    <SocialIcon url="mailto:visvamrajesh@outlook.com" />
                  </li>
                </ul>
              </div>
              <h1 className="display-5 fw-bold text-white text-body-light lh-1 mb-3" data-aos="fade-up">
                Visvam Rajesh
              </h1>
              <h1 className="display-5 fw-light text-white fs-2 text-body-light lh-1 mb-3" data-aos="fade-up">
                I'm a <ReactTyped strings={titles} typeSpeed={50} />
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
