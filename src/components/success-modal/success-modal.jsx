import React from "react";
import Congratulations from "../../assets/images/register/congratulation.svg";
import Btn from "../btn/btn";
import "../../styles/components/success-modal.scss";

const SuccessModal = ({ closeModal }) => {
  return (
    <div className="success_modal">
      <div className="success_card">
        <img src={Congratulations} alt="Congratulations" />
        <h3>
          Congratulations <br /> you have successfully Registered!
        </h3>
        <p>Yes, it was easy and you did it!</p>
        <p> check your mail box for next step</p>
        <div className="btn">
          <Btn width="100%" onClick={closeModal}>
            Back
          </Btn>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
