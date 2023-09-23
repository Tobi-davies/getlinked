import React from "react";
import "./privacy.scss";
import Btn from "../../components/btn/btn";
import Bullet from "../../assets/images/privacy/bullet.svg";
import Lock from "../../assets/images/privacy/lock.svg";
import Key from "../../assets/images/privacy/man-key.svg";

const Privacy = () => {
  return (
    <div className="container_box priv">
      <div className="privacy row">
        <div className="col-12 col-lg-6 privacy_policy">
          <h2>
            Privacy Policy and
            <br />
            <span>Terms</span>
          </h2>
          <small>Last updated on September 12, 2023</small>
          <p>
            Below are our privacy & policy, which outline a lot of goodies. it’s
            our aim to always take of our participant
          </p>

          <div className="privacy_policy_card">
            <p>
              At getlinked tech Hackathon 1.0, we value your privacy and are
              committed to protecting your personal information. This Privacy
              Policy outlines how we collect, use, disclose, and safeguard your
              data when you participate in our tech hackathon event. By
              participating in our event, you consent to the practices described
              in this policy.
            </p>
            <span>Licensing Policy</span>
            <small>Here are terms of our Standard License:</small>
            <ul>
              <li>
                <img src={Bullet} alt="bullet" />
                <span>
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event
                </span>
              </li>
              <li>
                <img src={Bullet} alt="bullet" />
                <span>
                  The Standard License grants you a non-exclusive right to
                  navigate and register for our event
                </span>
              </li>
            </ul>
            <div className="btn">
              <Btn>Read More</Btn>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 privacy_images">
          {/* <div className="privacy_image"> */}
          <figure className="lock">
            <img src={Lock} alt="lock" />
          </figure>
          <figure>
            <img src={Key} alt="key" className="key" />
          </figure>
          {/* </div> */}
        </div>
      </div>
      <div className="privacy_blur1"></div>
    </div>
  );
};

export default Privacy;
