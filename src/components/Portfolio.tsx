import PortfolioCard from "./PortfolioCard";

import hopper from "../assets/images/Hopper.jpeg";
import gauss from "../assets/images/gauss.jpg";
import potion_mod from "../assets/images/random-potion-mod.png";
import cac from "../assets/images/Congressional-App-Challenge-Submission.png";
import tilted from "../assets/images/tilted.png";
import food_game from "../assets/images/food-game.png";
import yt_scraper from "../assets/images/ytscraper.png";

import resume_link from "../assets/pdf/Resume-VisvamRajesh.pdf";
import resume_img from "../assets/images/resume.jpg";

import research_link from "../assets/pdf/An_Extension_of_Pathfinding_Algorithms_for_Randomly_Determined_Speeds.pdf";
import research_img from "../assets/images/research_img.png";

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
                img={hopper}
                url="https://github.com/FRC-3637-Daleks/Hopper"
              />
            </div>
            <div className="col-md-4">
              <PortfolioCard
                name="Pathfinding Research"
                description="A research paper regarding pathfinding algorithms in 3D voxel space, done with Dr. Wu from NJIT."
                img={research_img}
                url={research_link}
              />
            </div>
            <div className="col-md-4">
              <PortfolioCard
                name="Random Potion Mod"
                description="A Minecraft mod that give the player random potion effects, using Fabric"
                img={potion_mod}
                url="https://github.com/BarrelDev/Random-Potion-Mod"
              />
            </div>
          </div>
          <div className="row flex-lg-row align-items-center g-5 py-5">
            <div className="col-md-4">
              <PortfolioCard
                name="Gauss"
                description="The codebase behind Team 3637's 2023 robot."
                img={gauss}
                url="https://github.com/FRC-3637-Daleks/Gauss"
              />
            </div>
            <div className="col-md-4">
              <PortfolioCard
                name="Pandemic Inc."
                description="My submission for the 2020 Congressional App Challenge."
                img={cac}
                url="https://github.com/BarrelDev/CongressionalAppChallenge2020"
              />
            </div>
            <div className="col-md-4">
              <PortfolioCard
                name="Food Game"
                description="A WIP game about crafting food for customers, using Raylib."
                img={food_game}
                url="https://github.com/BarrelDev/FoodGame"
                titleColor="warning"
                textColor="warning"
              />
            </div>
          </div>
          <div className="row flex-lg-row align-items-center g-5 py-5">
            <div className="col-md-4">
              <PortfolioCard
                name="Youtube Scraper"
                description="A youtube scraper that uses the Youtube Data API to get the latest videos from your subscription feed."
                img={yt_scraper}
                url="https://github.com/BarrelDev/youtubeScraper"
              />
            </div>
            <div className="col-md-4">
              <PortfolioCard
                name="Tilted"
                description="An endless plaformer game made using Unity."
                img={tilted}
                url="https://github.com/BarrelDev/Tilted"
                textColor="dark"
              />
            </div>
            <div className="col-md-4">
              <PortfolioCard
                name="My Resume"
                description="Check out my other experience here!"
                img={resume_img}
                url={resume_link}
                borderColor="warning"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
