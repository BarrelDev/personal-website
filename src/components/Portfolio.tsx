import PortfolioCard from "./PortfolioCard";

import logo from "../assets/images/vr-logo.png";

const Portfolio = () => {
  return (
    <>
      <div className="container-fluid bg-info-subtle" id="portfolio">
        <div className="container mt-3 pt-5 pb-3">
          <h1 className="text-center fw-bold fs-1">My Work</h1>
        </div>
        <div className="container col-xxl-8 px-4 py-1">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-md-4">
              <PortfolioCard name="C++" img={logo} url="" />
            </div>
            <div className="col-md-4">
              <PortfolioCard name="Python" img={logo} url="" />
            </div>
            <div className="col-md-4">
              <PortfolioCard name="TypeScript" img={logo} url="" />
            </div>
          </div>
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
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
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
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
