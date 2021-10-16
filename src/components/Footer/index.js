import React from "react";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <div className="footer">
      <div className="contact">
        <button className="contact-btn" id="contact-button">Contact Me</button>
      </div>
      <div className="icon-logos">
        <SocialIcon url="https://github.com/mbrianna1170" style={{ height: 35, width: 35 }} />
        <SocialIcon url="https://www.linkedin.com/in/brianna-miller-a05800154/"  style={{ height: 35, width: 35 }} />
      </div>
    </div>
  );
}

export default Footer;
