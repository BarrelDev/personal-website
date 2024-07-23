import { useEffect } from "react";

import AOS from 'aos';
import "aos/dist/aos.css";

interface PortfolioCardProps {
  img: string;
  name: string;
  description?: string;
  url: string;
}

const PortfolioCard = ({
  img,
  name,
  description = "",
  url,
}: PortfolioCardProps) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="card rounded-5" data-aos="fade-up">
      <a href={url} target="_blank">
        <img
          src={img}
          className="mx-lg-auto img-fluid rounded-5 card-img"
          alt={name}
          loading="lazy"
        ></img>
        <div className="card-img-overlay">
          <h3 className="text-center card-title">{name}</h3>
        </div>
        <div className="card-img-overlay d-flex flex-column justify-content-end">
          <p className="text-center text-wrap align-text-bottom card-text">
            <small>{description}</small>
          </p>
        </div>
      </a>
    </div>
  );
};

export default PortfolioCard;
