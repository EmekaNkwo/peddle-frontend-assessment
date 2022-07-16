import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function DarkNavbar() {
  return (
    <>
      <nav className="nav_container dark">
        <div className="dark_nav_logo">
          <Link to="/">
            <p>Metricks</p>
          </Link>
        </div>
        <div className="nav_item">
          <ul className="nav_links">
            <li>
              <Link to="about" className="nav_links active">
                About
              </Link>
            </li>
            <li>
              <Link to="blog" className="nav_links">
                Blog
              </Link>
            </li>
            <li>
              <Link to="github" className="nav_links">
                Github Stars
              </Link>
            </li>
          </ul>
          <div className="nav_button">
            <Link to="contact">
              <button className="circled">Contact Us</button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default DarkNavbar;
