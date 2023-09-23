import React from "react";
import "./hero.scss";
import Bulb from "../../assets/images/hero/bulb.svg";
import Fire from "../../assets/images/hero/fire.svg";
import Chain from "../../assets/images/hero/chain.svg";
import Curly from "../../assets/images/hero/curly.svg";
// import Lights from "../../assets/images/hero/vr-lights.png";
// import Man from "../../assets/images/hero/man-glasses.png";
import Btn from "../../components/btn/btn";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero_blur1"></div>
      <div className="hero_igniting">
        <p>
          Igniting a Revolution in
          <span>
            HR Innovation
            <img src={Curly} alt="Curly" />
          </span>
        </p>
        {/* <img src={Curly} alt="Curly line" /> */}
      </div>
      <div className="hero_flex ">
        <div className="hero_text  container_box">
          <div className="hero_text_heading">
            <h1>
              getlinked
              <span>
                Tech
                <img src={Bulb} alt="bulb" />
              </span>
            </h1>
          </div>
          <div className="hero_hackathon">
            <h1>
              Hackathon
              <span>1.0</span>{" "}
            </h1>
            <img src={Chain} alt="" className="hero_hackathon_chain" />
            <img src={Fire} alt="" />
          </div>
          <p>
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>

          <Btn>Register</Btn>

          <div className="hero_countdown">
            <div>
              00<span>H</span>
            </div>
            <div>
              00<span>M</span>
            </div>
            <div>
              00<span>S</span>
            </div>
          </div>
        </div>
        {/* <div className="hero_images">
          <figure>
            <img src={Lights} alt="" className="lights" />
            <img src={Man} alt="" className="man" />
          </figure>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
