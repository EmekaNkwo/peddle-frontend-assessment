import React from "react";
import DarkNavbar from "../../components/Navbar/DarkNavbar";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaYoutube,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import "./ComingSoon.css";

function ComingSoon() {
  return (
    <>
      <div className="coming_soon">
        <DarkNavbar />
        <div className="coming_container"></div>

        <h1 className="coming_title">SOMETHING AWESOME IS</h1>
        <h1 className="coming_title">COMING SOON</h1>
        <p className="coming_subtitle">
          Your all-in-one affiliate marketing tracking software{" "}
          <strong>track</strong> ,<strong>automate</strong> and <br />
          <strong>optimize</strong> your campaigns.
        </p>

        <div className="countdown">
          <div className="number_box">
            <h4>7</h4> <span>Days</span>
          </div>
          <div className="number_box">
            <h4>24</h4> <span>Hours</span>
          </div>
          <div className="number_box">
            <h4>54</h4> <span>Minutes</span>
          </div>
          <div className="number_box">
            <h4>11</h4> <span>Second</span>
          </div>
        </div>
        <div className="details">
          <input type="text" className="names" placeholder="First Name.." />
          <input type="text" className="names" placeholder="Last Name.." />
        </div>
        <div className="newsletter">
          <input
            type="text"
            className="email"
            placeholder="Enter your email address.."
          />
          <button>JOIN OUT WAITING LIST</button>
        </div>

        <div className="footer">
          <div className="icons">
            <FaYoutube className="bright" />
            <FaFacebookSquare />
            <FaLinkedin />
            <FaInstagram />
            <FaTwitter />
          </div>

          <div className="terms">
            <span>Terms of services</span>
            <span>Privacy policy</span>
          </div>

          <div className="bottom">
            <span>
              Copyright 2021 @ Peddle Technologies. All Right Reserved
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ComingSoon;
