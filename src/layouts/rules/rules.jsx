import React from "react";
import "./rules.scss";
import Lady from "../../assets/images/introduction/lady.svg";

const Rules = () => {
  return (
    <div className="rules">
      <div className="rules_blur1"></div>
      <div className="rules_blur2"></div>

      <div className="container_box">
        <div className="rules_container row">
          <div className="col-12 col-lg-6 rules_container_text">
            <h2>
              Rules and
              <br />
              <span>Guidelines</span>
            </h2>

            <p>
              Our tech hackathon is a melting pot of visionaries, and its
              purpose is as clear as day: to shape the future. Whether you're a
              coding genius, a design maverick, or a concept wizard, you'll have
              the chance to transform your ideas into reality. Solving
              real-world problems, pushing the boundaries of technology, and
              creating solutions that can change the world, that's what we're
              all about!
            </p>
          </div>
          <div className="col-12 col-lg-6 rules_container_image">
            <img src={Lady} alt="Lady" className="big_idea" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
