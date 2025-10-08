import logo from "../assets/images/vr-logo-transparent.png";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <nav
      className="shadow navbar navbar-expand-lg navbar-dark fixed-top bg-dark navbar-nav-scroll border-bottom border-body border-3"
      data-aos="fade-down"
    >
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand" href="#">
          <img src={logo} alt="logo" width="64" />
        </a>

        {/* Hamburger toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible nav links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto nav-underline">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#resume">
                Resume 
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">
                Portfolio
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
