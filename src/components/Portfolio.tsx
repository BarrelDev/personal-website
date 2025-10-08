import PortfolioCard from "./PortfolioCard";
import "./Portfolio.css"

import logo from "../assets/images/vr-logo.png";
import { projects } from "../data/projects.tsx";

import { useState, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Grid, Pagination } from "swiper/modules";

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  useEffect(() => {
    setFilteredProjects(
      filter === "All"
        ? projects
        : projects.filter(p => p.tags.includes(filter))
    );
  }, [filter]);

  return (
    <section id="portfolio" className="bg-info-subtle py-5">
      <div className="container">
        <h1 className="text-center fw-bold fs-1 mb-4" data-aos="fade-up">
          My Work
        </h1>

        {/* Filter buttons */}
        <div className="d-flex justify-content-center gap-2 mb-4">
          {["All", "Robotics", "Research", "Games", "Utilities"].map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`btn ${filter === tag ? "btn-primary" : "btn-outline-primary"}`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Slider */}
        <div className="portfolio-swiper-wrapper position-relative" style={{ overflow: "visible" }}>
          <Swiper
            effect="slide"
            speed={600}
            key={filter}
            modules={[Navigation, Grid, Pagination]}
            navigation={{
              nextEl: ".portfolio-next",
              prevEl: ".portfolio-prev",
            }}
            spaceBetween={24}
            slidesPerView={3}
            slidesPerGroup={6}
            grid={{ rows: 2, fill: "row" }}
            breakpoints={{
              992: { slidesPerView: 3, slidesPerGroup: 6 },
              768: { slidesPerView: 2, slidesPerGroup: 4 },
              0: { slidesPerView: 1, slidesPerGroup: 1 },
            }}
            className="portfolio-swiper"
          >
            {filteredProjects.map((p, i) => (
              <SwiperSlide key={`${filter}-${i}`} >
                <PortfolioCard {...p} />
              </SwiperSlide>
            ))}

            
          </Swiper>
            {/* arrows now stay visible */}
            <div
              className="portfolio-prev swiper-button-prev"
              style={{
                left: "-50px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#1e90ff",
                zIndex: 10,
              }}
            ></div>
            <div
              className="portfolio-next swiper-button-next"
              style={{
                right: "-50px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#1e90ff",
                zIndex: 10,
              }}
            ></div>
        </div>
        
      </div>
    </section>
  );
};

//const Portfolio = () => {
//  useEffect(() => {
//    AOS.init();
//  }, []);
//  return (
//    <>
//      <div className="container-fluid bg-info-subtle" id="portfolio">
//        <div className="container mt-3 pt-5 pb-3" data-aos="fade-up">
//          <h1 className="text-center fw-bold fs-1">My Work</h1>
//        </div>
//        <div
//          id="portfolioCarousel"
//          className="carousel carousel-dark slide"
//          data-ride="carousel"
//        >
//          <div className="carousel-inner">
//            <div className="carousel-item active">
//              <div className="d-block container col-xxl-8 px-4 py-1">
//                <div className="row flex-lg-row align-items-center g-5 py-5">
//                  <div className="col-md-4">
//                    <PortfolioCard
//                      name="Hopper"
//                      description="The codebase behind Team 3637's 2024 world championship robot, Dalek Floyd."
//                      img={hopper}
//                      url="https://github.com/FRC-3637-Daleks/Hopper"
//                    />
//                  </div>
//                  <div className="col-md-4">
//                    <PortfolioCard
//                      name="Pathfinding Research"
//                      description="A research paper regarding pathfinding algorithms in 3D voxel space, done with Dr. Wu from NJIT."
//                      img={research_img}
//                      url={research_link}
//                    />
//                  </div>
//                  <div className="col-md-4">
//                    <PortfolioCard
//                      name="Random Potion Mod"
//                      description="A Minecraft mod that give the player random potion effects, using Fabric"
//                      img={potion_mod}
//                      url="https://github.com/BarrelDev/Random-Potion-Mod"
//                    />
//                  </div>
//                </div>
//                <div className="row flex-lg-row align-items-center g-5 py-5">
//                  <div className="col-md-4">
//                    <PortfolioCard
//                      name="Ichbiah"
//                      description="The codebase behind Team 3637's 2025 robot."
//                      img={ichbiah}
//                      url="https://github.com/FRC-3637-Daleks/Ichbiah"
//                    />
//                  </div>
//                  <div className="col-md-4">
//                    <PortfolioCard
//                      name="Pandemic Inc."
//                      description="My submission for the 2020 Congressional App Challenge."
//                      img={cac}
//                      url="https://github.com/BarrelDev/CongressionalAppChallenge2020"
//                    />
//                  </div>
//                  <div className="col-md-4">
//                    <PortfolioCard
//                      name="Food Game"
//                      description="A WIP game about crafting food for customers, using Raylib."
//                      img={food_game}
//                      url="https://github.com/BarrelDev/FoodGame"
//                      titleColor="warning"
//                      textColor="warning"
//                    />
//                  </div>
//                </div>
//                <div className="row flex-lg-row align-items-center g-5 py-5">
//                  <div className="col-md-4">
//                    <PortfolioCard
//                      name="Youtube Scraper"
//                      description="A youtube scraper that uses the Youtube Data API to get the latest videos from your subscription feed."
//                      img={yt_scraper}
//                      url="https://github.com/BarrelDev/youtubeScraper"
//                    />
//                  </div>
//                  <div className="col-md-4">
//                    <PortfolioCard
//                      name="Tilted"
//                      description="An endless plaformer game made using Unity."
//                      img={tilted}
//                      url="https://github.com/BarrelDev/Tilted"
//                      textColor="dark"
//                    />
//                  </div>
//                  <div className="col-md-4">
//                    <PortfolioCard
//                      name="My Resume"
//                      description="Check out my other experience here!"
//                      img={resume_img}
//                      url={resume_link}
//                      borderColor="warning"
//                    />
//                  </div>
//                </div>
//              </div>
//            </div>
//            <div className="carousel-item">
//              <div className="d-block container col-xxl-8 px-4 py-1">
//                <div className="row flex-lg-row align-items-center g-5 py-5">
//                  <div className="col-md-4">
//                    <PortfolioCard
//                      name="Hopper"
//                      description="The codebase behind Team 3637's 2024 world championship robot, Dalek Floyd."
//                      img={logo}
//                      url="https://github.com/FRC-3637-Daleks/Hopper"
//                    />
//                  </div>
//                  <div className="col-md-4">
//                    <PortfolioCard
//                      name="Pathfinding Research"
//                      description="A research paper regarding pathfinding algorithms in 3D voxel space, done with Dr. Wu from NJIT."
//                      img={research_img}
//                      url={research_link}
//                    />
//                  </div>
//                  <div className="col-md-4">
//                    <PortfolioCard
//                      name="Random Potion Mod"
//                      description="A Minecraft mod that give the player random potion effects, using Fabric"
//                      img={potion_mod}
//                      url="https://github.com/BarrelDev/Random-Potion-Mod"
//                    />
//                  </div>
//                </div>
//                <div className="row flex-lg-row align-items-center g-5 py-5">
//                  <div className="col-md-4">
//                    <PortfolioCard
//                      name="Ichbiah"
//                      description="The codebase behind Team 3637's 2025 robot."
//                      img={ichbiah}
//                      url="https://github.com/FRC-3637-Daleks/Gauss"
//                    />
//                  </div>
//                  <div className="col-md-4">
//                    <PortfolioCard
//                      name="Pandemic Inc."
//                      description="My submission for the 2020 Congressional App Challenge."
//                      img={cac}
//                      url="https://github.com/BarrelDev/CongressionalAppChallenge2020"
//                    />
//                  </div>
//                  <div className="col-md-4">
//                    <PortfolioCard
//                      name="Food Game"
//                      description="A WIP game about crafting food for customers, using Raylib."
//                      img={food_game}
//                      url="https://github.com/BarrelDev/FoodGame"
//                      titleColor="warning"
//                      textColor="warning"
//                    />
//                  </div>
//                </div>
//                <div className="row flex-lg-row align-items-center g-5 py-5">
//                  <div className="col-md-4">
//                    <PortfolioCard
//                      name="Youtube Scraper"
//                      description="A youtube scraper that uses the Youtube Data API to get the latest videos from your subscription feed."
//                      img={yt_scraper}
//                      url="https://github.com/BarrelDev/youtubeScraper"
//                    />
//                  </div>
//                  <div className="col-md-4">
//                    <PortfolioCard
//                      name="Tilted"
//                      description="An endless plaformer game made using Unity."
//                      img={tilted}
//                      url="https://github.com/BarrelDev/Tilted"
//                      textColor="dark"
//                    />
//                  </div>
//                  <div className="col-md-4">
//                    <PortfolioCard
//                      name="My Resume"
//                      description="Check out my other experience here!"
//                      img={resume_img}
//                      url={resume_link}
//                      borderColor="warning"
//                    />
//                  </div>
//                </div>
//              </div>
//            </div>
//            <div className="carousel-item">
//              <div className="d-block container col-xxl-8 px-4 py-1">
//                <div className="row flex-lg-row align-items-center g-5 py-5">
//                  <div className="col-md-4">
//                    <PortfolioCard
//                      name="Hopper"
//                      description="The codebase behind Team 3637's 2024 world championship robot, Dalek Floyd."
//                      img={hopper}
//                      url="https://github.com/FRC-3637-Daleks/Hopper"
//                    />
//                  </div>
//                  <div className="col-md-4">
//                    <PortfolioCard
//                      name="Pathfinding Research"
//                      description="A research paper regarding pathfinding algorithms in 3D voxel space, done with Dr. Wu from NJIT."
//                      img={research_img}
//                      url={research_link}
//                    />
//                  </div>
//                  <div className="col-md-4">
//                    <PortfolioCard
//                      name="Random Potion Mod"
//                      description="A Minecraft mod that give the player random potion effects, using Fabric"
//                      img={potion_mod}
//                      url="https://github.com/BarrelDev/Random-Potion-Mod"
//                    />
//                  </div>
//                </div>
//                <div className="row flex-lg-row align-items-center g-5 py-5">
//                  <div className="col-md-4">
//                    <PortfolioCard
//                      name="Ichbiah"
//                      description="The codebase behind Team 3637's 2025 robot."
//                      img={ichbiah}
//                      url="https://github.com/FRC-3637-Daleks/ichbiah"
//                    />
//                  </div>
//                  <div className="col-md-4">
//                    <PortfolioCard
//                      name="Pandemic Inc."
//                      description="My submission for the 2020 Congressional App Challenge."
//                      img={cac}
//                      url="https://github.com/BarrelDev/CongressionalAppChallenge2020"
//                    />
//                  </div>
//                  <div className="col-md-4">
//                    <PortfolioCard
//                      name="Food Game"
//                      description="A WIP game about crafting food for customers, using Raylib."
//                      img={food_game}
//                      url="https://github.com/BarrelDev/FoodGame"
//                      titleColor="warning"
//                      textColor="warning"
//                    />
//                  </div>
//                </div>
//                <div className="row flex-lg-row align-items-center g-5 py-5">
//                  <div className="col-md-4">
//                    <PortfolioCard
//                      name="Youtube Scraper"
//                      description="A youtube scraper that uses the Youtube Data API to get the latest videos from your subscription feed."
//                      img={yt_scraper}
//                      url="https://github.com/BarrelDev/youtubeScraper"
//                    />
//                  </div>
//                  <div className="col-md-4">
//                    <PortfolioCard
//                      name="Tilted"
//                      description="An endless plaformer game made using Unity."
//                      img={tilted}
//                      url="https://github.com/BarrelDev/Tilted"
//                      textColor="dark"
//                    />
//                  </div>
//                  <div className="col-md-4">
//                    <PortfolioCard
//                      name="My Resume"
//                      description="Check out my other experience here!"
//                      img={resume_img}
//                      url={resume_link}
//                      borderColor="warning"
//                    />
//                  </div>
//                </div>
//              </div>
//            </div>
//          </div>
//          <button
//            className="carousel-control-prev"
//            type="button"
//            data-bs-target="#portfolioCarousel"
//            data-bs-slide="prev"
//          >
//            <span
//              className="carousel-control-prev-icon"
//              aria-hidden="true"
//            ></span>
//            <span className="visually-hidden">Previous</span>
//          </button>
//          <button
//            className="carousel-control-next"
//            type="button"
//            data-bs-target="#portfolioCarousel"
//            data-bs-slide="next"
//          >
//            <span
//              className="carousel-control-next-icon"
//              aria-hidden="true"
//            ></span>
//            <span className="visually-hidden">Next</span>
//          </button>
//        </div>
//      </div>
//    </>
//  );
//};

export default Portfolio;
