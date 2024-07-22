import logo from "../assets/images/vr-logo-transparent.png";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a
              href="/"
              className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
            >
              <img src={logo} alt="logo" width="64" />
            </a>
            <span className="mb-3 mb-md-0 text-body-secondary">
              © 2024 Visvam Rajesh
            </span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <SocialIcon
                className="text-body-secondary"
                url="https://www.linkedin.com/in/visvam/"
              />
            </li>
            <li className="ms-3">
              <SocialIcon
                className="text-body-secondary"
                url="https://github.com/BarrelDev/"
              />
            </li>
            <li className="ms-3">
              <SocialIcon
                className="text-body-secondary"
                url="mailto:visvamrajesh@outlook.com"
              />
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
