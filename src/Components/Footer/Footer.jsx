import React from "react";
import "./Footer.css";

import user_icon from "../../assets/user_icon.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <p>
            I am a Full Stack Developer from, USA with 10 years of experience in
            Banking, HealthCare, Insurance and Retail domains
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>

      <hr />
      <div className="footer-bottom">
        <p className="footeer-bottom-left">
          {" "}
          © 2020 Donesh Kalluri. All rights reserved.{" "}
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
