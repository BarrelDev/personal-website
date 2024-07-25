import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import "./PortfolioCard.css";

interface PortfolioCardProps {
  img: string;
  name: string;
  description?: string;
  url: string;
  titleColor?:
    | "light"
    | "dark"
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "info"
    | "muted"
    | "warning";
  textColor?:
    | "light"
    | "dark"
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "info"
    | "muted"
    | "warning";
  borderColor?:
    | ""
    | "light"
    | "dark"
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "info"
    | "muted"
    | "warning";
}

const PortfolioCard = ({
  img,
  name,
  description = "",
  url,
  titleColor = "light",
  textColor = "light",
  borderColor = "",
}: PortfolioCardProps) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className={"card border border-3 rounded-5 zoom border-" + borderColor} data-aos="fade-up">
      <a href={url} role="button" target="_blank">
        <img
          src={img}
          className="mx-lg-auto img-fluid rounded-5 card-img"
          alt={name}
          loading="lazy"
        ></img>
        <div className={"card-img-overlay text-" + titleColor}>
          <h3 className="text-center card-title align-text-bottom">{name}</h3>
        </div>
        <div
          className={
            "card-img-overlay d-flex flex-column fw-bold justify-content-end text-" +
            textColor
          }
        >
          <p className="text-center text-wrap align-text-bottom card-text">
            <small>{description}</small>
          </p>
        </div>
      </a>
    </div>
  );
};

export default PortfolioCard;
