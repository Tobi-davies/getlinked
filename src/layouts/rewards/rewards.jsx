import React from "react";
import "./rewards.scss";
import Trophy from "../../assets/images/rewards/trophy.svg";
import Silver from "../../assets/images/rewards/silver.svg";
import Gold from "../../assets/images/rewards/gold.svg";
import Bronze from "../../assets/images/rewards/bronze.svg";

const Rewards = () => {
  return (
    <div className="rewards">
      <div className="rewards_blur1"></div>
      <div className="rewards_blur2"></div>
      <div className="rewards_container">
        <div className="row">
          <div className="col-12 col-xl-6"></div>
          <div className="prize col-12 col-xl-6">
            <h2>
              Prizes and
              <br />
              <span>Rewards</span>
            </h2>
            <p>
              Highlight of the prizes or rewards for winners and for
              participants.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-xl-5 rewards_container_images">
            <figure>
              <img src={Trophy} alt="Trophy" className="trophy" />
            </figure>
          </div>
          <div className="col-12 col-xl-7 rewards_container_text">
            <div className="medals">
              <div className="second_position">
                <img src={Silver} alt="" />
                <div className="second_position_card card">
                  {/* <img src={Silver} alt="" /> */}

                  <p>2nd</p>
                  <small>Runner</small>
                  <span>N300,000</span>
                </div>
              </div>
              <div className="first_position">
                <img src={Gold} alt="" />
                <div className="first_position_card card">
                  <p>1st</p>
                  <small>Runner</small>
                  <span>N400,000</span>
                </div>
              </div>

              <div className="third_position">
                <img src={Bronze} alt="" />
                <div className="third_position_card card">
                  <p>3rd</p>
                  <small>Runner</small>
                  <span>N150,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
