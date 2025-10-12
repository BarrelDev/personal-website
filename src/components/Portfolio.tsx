import PortfolioCard from "./PortfolioCard";
import "./Portfolio.css"

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
    AOS.init({
      duration: 600,
      once: true,
      easing: "ease-out-cubic",
      offset: 100,
    });
  }, []);

  useEffect(() => {
    setFilteredProjects(
      filter === "All"
        ? projects
        : projects.filter(p => p.tags.includes(filter))
    );
    setTimeout(() => AOS.refresh(), 300);
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
              768: { slidesPerView: 2, slidesPerGroup: 2 },
              0: { slidesPerView: 1, slidesPerGroup: 1 },
            }}
            className="portfolio-swiper"
          >
            {filteredProjects.map((p, i) => (
              <SwiperSlide key={`${filter}-${i}`} >
                <div 
                  data-aos="fade-up"
                  data-aos-delay={(i % 6) * 100} // staggered 0,100,200...
                  data-aos-duration="600">
                <PortfolioCard {...p as any} /></div>
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

export default Portfolio;
