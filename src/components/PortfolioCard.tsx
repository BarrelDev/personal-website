import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import "./PortfolioCard.css";

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
    <div className="card rounded-5 zoom" data-aos="fade-up">
      <a href={url} role="button" target="_blank">
        <img
          src={img}
          className="mx-lg-auto img-fluid rounded-5 card-img"
          alt={name}
          loading="lazy"
        ></img>
        <div className="card-img-overlay text-light">
          <h3 className="text-center card-title align-text-bottom">{name}</h3>
        </div>
        <div className="card-img-overlay text-light d-flex flex-column justify-content-end">
          <p className="text-center text-wrap align-text-bottom card-text">
            <small>{description}</small>
          </p>
        </div>
      </a>
    </div>
  );
};

export default PortfolioCard;
