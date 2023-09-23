import React from "react";
import "./partners.scss";
import LibertyAssured from "../../assets/images/partners/libertyassured.png";
import LibertyPay from "../../assets/images/partners/libertypay.png";
import Paybox from "../../assets/images/partners/paybox.png";
import Vuzualplus from "../../assets/images/partners/vuzualplus.png";
import Winwise from "../../assets/images/partners/winwise.png";
import Wispersms from "../../assets/images/partners/wispersms.png";

const Partners = () => {
  return (
    // <div>
    <div className="partners">
      <div className="partners_blur1"></div>
      <div className="partners_blur2"></div>
      <h3>Partners and Sponsors</h3>
      <p>
        Getlinked Hackathon 1.0 is honored to have the following major companies
        as its partners and sponsors
      </p>

      <div className="partner_lists container_box">
        <ul>
          <li>
            <img
              src={LibertyAssured}
              alt="LibertyAssured logo"
              //  width={100}
            />
          </li>
          <li>
            {/* <div> */}
            <img
              src={LibertyPay}
              alt="liberty pay logo"
              // width={175}
            />
            {/* </div> */}
          </li>
          <li>
            <img
              src={Winwise}
              alt="winwise logo"
              // width={100}
            />
          </li>
          <li>
            <img
              src={Wispersms}
              alt="Wisper logo"
              // width={110}
            />
          </li>
          <li>
            {/* <div> */}
            <img
              src={Paybox}
              alt="paybox logo"
              //  width={150}
            />
            {/* </div> */}
          </li>
          <li>
            <img
              src={Vuzualplus}
              alt="vuzual logo"
              // width={180}
            />
          </li>
        </ul>
      </div>
    </div>
    // </div>
  );
};

export default Partners;
