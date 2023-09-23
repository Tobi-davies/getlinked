import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BiLogoLinkedin } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";
import { MdPhoneInTalk } from "react-icons/md";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="col-12 col-sm-7 first">
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
          <p>
            Terms of Use <span>|</span> Privacy Policy
          </p>
        </div>
        <div className="col-12 col-sm-5 col-lg-3">
          <ul className="footer_links">
            <li>Useful Links</li>
            <li>Overview</li>
            <li>Timeline</li>
            <li>FAQs</li>
            <li>Register</li>
            <li>
              Follow us
              <div>
                <BsInstagram />
                <RiTwitterXFill />
                <FaFacebookF fontSize={15} />
                <BiLogoLinkedin fontSize={17} />
              </div>
            </li>
          </ul>
          <div></div>
        </div>
        <div className="col-12 col-lg-2 footer_contact">
          <ul>
            <li>Contact Us</li>

            <li>
              {" "}
              <MdPhoneInTalk /> <span>+234 679 81819</span>
            </li>
            <li>
              <HiLocationMarker />{" "}
              <span>27,Alara Street Yaba 100012 Lagos State</span>
            </li>
          </ul>
        </div>
      </div>

      <span className="footer_rights">
        All rights reserved. © getlinked Ltd.
      </span>
    </footer>
  );
};

export default Footer;
