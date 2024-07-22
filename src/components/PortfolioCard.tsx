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
  return (
    <div className="card rounded-5">
      <a href={url} target="_blank">
        <img
          src={img}
          className="d-block mx-lg-auto img-fluid rounded-5 card-img"
          alt={name}
          loading="lazy"
        ></img>
        <div className="card-img-overlay">
          <h3 className="text-center card-title">{name}</h3>
          <p className="text-center text-wrap card-text">
            <small>{description}</small>
          </p>
        </div>
      </a>
    </div>
  );
};

export default PortfolioCard;
