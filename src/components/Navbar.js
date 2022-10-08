import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";


export default function Navbar(props) {
  return (
    <nav className={`navbar  navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/"> {props.title} </Link> */}
        <a className="navbar-brand" href="#"> {props.title} </a>
        <button  className="navbar-toggler"  type="button" data-bs-toggle="collapse"   data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"  aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              {/* <Link className="nav-link active" aria-current="page" to="/"> */}
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              {/* <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link> */}
            </li>
            
          </ul>
        </div>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
        <div className={`form-check form-switch mx-3 text-${props.mode === "light"? "dark": "light"}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox"  id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
      </div>
    </nav>
  );
}
Navbar.propTypes = { title: PropTypes.string.isRequired, 
    aboutText: PropTypes.string };

Navbar.defaulProps={
    title:"Set Title here",
    aboutText:"About"
}
