import React from "react";
import { Link } from "react-router-dom";
import LOGO from "../../assets/logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="nav_container">
        <div className="nav_logo">
          <Link to="/">
            <img src={LOGO} alt="logo" />
            <h2>METRICKS</h2>
          </Link>
        </div>
        <div className="nav_item">
          <ul className="nav_links">
            <li>
              <Link to="/about" className="nav_links active">
                About
              </Link>
            </li>
            <li>
              <Link to="/blog" className="nav_links">
                Blog
              </Link>
            </li>
          </ul>
          <div className="nav_button">
            <Link to="/contact">
              <button className="circled">Contact Us</button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
