import logo from "../assets/images/vr-logo-transparent.png";

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
                href="#home"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio" >
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
