import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";


function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
  <a className="navbar-brand" href="#"><FontAwesomeIcon icon={faHome}></FontAwesomeIcon></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <Link to="/react-portfolio" className="nav-link">About Me <span className="sr-only"></span></Link>
      </li>
      <li className="nav-item">
      <Link to="/portfolio" className="nav-link">Portfolio <span className="sr-only"></span></Link>
      </li>
      <li className="nav-item">
      <Link to="/contact" className="nav-link">Contact<span className="sr-only"></span></Link>
      </li>
      <li className="nav-item">
      <Link to="/resume" className="nav-link">Resume <span className="sr-only"></span></Link>
      </li>
    </ul>
  </div>
</nav>
    </div>
  );
}

export default Nav;
