import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="col-7">
          <div>
            <div className="logo">
              <span>get</span>
              <span>linked</span>
            </div>
            <p>
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
          </div>
          <p>Terms of Use | Privacy Policy</p>
        </div>
        <div className="col-3">
          <ul>
            <li>Useful Links</li>
            <li>Overview</li>
            <li>Timeline</li>
            <li>FAQs</li>
            <li>Register</li>
          </ul>
          <div>Follow us</div>
        </div>
        <div className="col-2">
          {" "}
          <ul>
            <li>Contact Us</li>

            <li>+234 679 81819</li>
            <li>27,Alara Street Yaba 100012 Lagos State</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
