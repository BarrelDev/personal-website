import PortfolioCard from "./PortfolioCard";

import logo from "../assets/images/vr-logo.png";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const Portfolio = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="container-fluid bg-info-subtle" id="portfolio">
        <div className="container mt-3 pt-5 pb-3" data-aos="fade-up">
          <h1 className="text-center fw-bold fs-1">My Work</h1>
        </div>
        <div className="container col-xxl-8 px-4 py-1">
          <div className="row flex-lg-row align-items-center g-5 py-5">
            <div className="col-md-4">
              <PortfolioCard
                name="Hopper"
                description="The codebase behind Team 3637's 2024 world championship robot, Dalek Floyd."
                img={logo}
                url="https://github.com/FRC-3637-Daleks/Hopper"
              />
            </div>
            <div className="col-md-4">
              <PortfolioCard
                name="ReactGraphDisplay"
                description=""
                img={logo}
                url="https://github.com/BarrelDev/ReactGraphDisplay"
              />
            </div>
            <div className="col-md-4">
              <PortfolioCard
                name="Random Potion Mod"
                description=""
                img={logo}
                url="https://github.com/BarrelDev/Random-Potion-Mod"
              />
            </div>
          </div>
          <div className="row flex-lg-row align-items-center g-5 py-5">
            <div className="col-md-4">
              <PortfolioCard name="C#" img={logo} url="" />
            </div>
            <div className="col-md-4">
              <PortfolioCard name="Java" img={logo} url="" />
            </div>
            <div className="col-md-4">
              <PortfolioCard name="Rust" img={logo} url="" />
            </div>
          </div>
          <div className="row flex-lg-row align-items-center g-5 py-5">
            <div className="col-md-4">
              <PortfolioCard name="Git" img={logo} url="" />
            </div>
            <div className="col-md-4">
              <PortfolioCard name="Leadership" img={logo} url="" />
            </div>
            <div className="col-md-4">
              <PortfolioCard name="React" img={logo} url="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
