import logo from "../assets/images/vr-logo-transparent.png";

const goToHome = () => window.location.replace("./#home");
const goToAbout = () => window.location.replace("./#about");
const goToSkills = () => window.location.replace("./#skills");
const goToPortfolio = () => window.location.replace("./#portfolio");

const Navbar = () => {
  return (
    <>
      <nav className="shadow navbar navbar-expand-lg navbar-dark fixed-top bg-dark navbar-nav-scroll border-bottom border-body border-3">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="logo" width="64" />
          </a>
          <ul className="navbar-nav justify-content-end nav-underline">
            <li className="nav-item">
              <a
                className="nav-link"
                aria-current="page"
                href="#"
                onClick={goToHome}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={goToAbout}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={goToSkills}>
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={goToPortfolio}>
                Portfolio
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
