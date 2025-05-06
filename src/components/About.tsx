import logo from "../assets/images/profile-img.jpg";
import { useEffect, useRef } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const About = () => {
  const main = useRef(null);

  useEffect(() => {
    AOS.init();
  }, []);

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
                A high school senior at Hunterdon Central Regional High School
                with a passion for{" "}
                <span className="text-warning fw-bold">
                  computer science and engineering
                </span>
                . Looking forward to{" "}
                <span className="text-primary-emphasis fw-bold">
                  helping people using technology
                </span>
                . In my free time, I love playing video games and coding small
                projects.
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
                I'm a huge fan of robotics, and the robots I've programmed
                participate in the
                <span className="fst-italic">
                  {" "}
                  FIRST Robotics Competition
                </span>{" "}
                and have competed at the world championship as part of my
                team,&nbsp;
                <a
                  href="https://www.team3637.com/"
                  className="text-light"
                  target="_blank"
                >
                  The Daleks
                </a>
                . Outside of competing, I work to research new path planning
                algorithms to make robots more efficient in autonomous terrain
                navigation.
              </p>
              <h3
                className="display-5 fw-bold text-white text-body-light fs-4 lh-1 mb-3 text-capitalized"
                data-aos="fade-up"
              >
                Mentoring Younger Kids.
              </h3>
              <p
                className="fw-light text-white text-body-light text-wrap fs-5"
                data-aos="fade-up"
              >
                I'm always looking to help younger kids get introduced to STEM,
                and I do so via mentorships. My favorite way to get kids working
                with robots is LEGO EV3 and LEGO SPIKE Prime. I also work to
                spread awareness of data science via my{" "}
                <a
                  href="https://www.dogoodwithdata.net/"
                  target="_blank"
                  className="text-light"
                >
                  non-profit
                </a>
                , and tutor students K through 9 in mathematics at my part-time
                job.
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
