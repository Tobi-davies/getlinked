import React from "react";
import "./hero.scss";
import Bulb from "../../assets/images/hero/bulb.svg";
import Fire from "../../assets/images/hero/fire.svg";
import Chain from "../../assets/images/hero/chain.svg";
import Curly from "../../assets/images/hero/curly.svg";
import Btn from "../../components/btn/btn";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero_igniting">
        <span>Igniting a Revolution in HR Innovation</span>
        <img src={Curly} alt="Curly line" />
      </div>
      <div className="hero_flex">
        <div className="container">
          <h1> getlinked Tech </h1>
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
      </div>
    </div>
  );
};

export default Hero;
