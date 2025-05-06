import logo from "../assets/images/profile1.png";
import { SocialIcon } from "react-social-icons";
import { ReactTyped } from "react-typed";

import { useEffect, useRef } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const titles = [
  "a Developer",
  "a Robotics Programmer",
  "a Programming Captain",
  "a Game Developer",
  "a Student",
  "a Researcher",
  "an Innovator",
  "an Engineer",
  "a Teacher",
  "a Software Engineer",
  "an Educator",
];

const Hero = () => {
  const main = useRef(null);

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(".box");
      boxes.forEach((box) => {
        // @ts-ignore
        gsap.to(box, {
          x: 150,
          scrollTrigger: {
            trigger: box,
            start: "bottom bottom",
            end: "top 20%",
            scrub: true,
            // markers: true,
          },
        });
      });
    },
    { scope: main }
  );

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="container-fluid bg-dark" id="home">
        <div className="container col-xxl-8 px-4 py-5 ">
          <div className="row flex-lg-row-reverse align-items-center g-5">
            <div
              className="col-10 col-sm-8 col-lg-6 pt-3"
              style={{ marginBottom: "-4.4vh" }}
              data-aos="fade-left"
            >
              <img
                src={logo}
                className="d-block mx-lg-auto img-fluid"
                alt="picture"
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
              <h1
                className="display-5 fw-bold text-white text-body-light lh-1 mb-3"
                data-aos="fade-up"
              >
                Visvam Rajesh
              </h1>
              <h1
                className="display-5 fw-light text-white fs-2 text-body-light lh-1 mb-3"
                data-aos="fade-up"
              >
                I'm <ReactTyped strings={titles} typeSpeed={50} />
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
