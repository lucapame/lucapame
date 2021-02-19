import React from "react";

const Footer = () => {
  return (
    <footer className="container text-center mt-auto">
      <div className="container mt-4">
        <nav className="navbar navbar-light ">
          <div className="links d-flex"></div>
          <div className="logo d-flex align-items-center link ">
            <a
              href="https://www.linkedin.com/in/luis-carlos-parra-7a9050171"
              className="m-0 pe-2 txt-xs link"
            >
              Find me on LinkedIn
            </a>
            <i className="fab fa-linkedin fa-2x"></i>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
