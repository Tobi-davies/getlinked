import React from "react";
import Btn from "../../components/btn/btn";
import "./header.scss";
import Hamburger from "../../assets/images/header/hamburger.svg";
import Close from "../../assets/images/header/close.svg";
import { NavLink, useNavigate } from "react-router-dom";

const PRIMARY_NAV_ITEMS = [
  {
    title: "Timeline",
    path: "/",
  },
  {
    title: "Overview",
    path: "/",
  },
  {
    title: "FAQs",
    path: "/",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Header = () => {
  const navigate = useNavigate();
  const [isMobile, setMobile] = React.useState(false);

  const styles = {
    extra: {
      transform: `translateX(${isMobile ? "0" : "-100vw"})`,
    },
  };
  return (
    <>
      <header className="header">
        <div className="container_box">
          <div className="logo" onClick={() => navigate("/")}>
            <span>get</span>
            <span>linked</span>
          </div>

          <div className="nav">
            <ul>
              {PRIMARY_NAV_ITEMS.map((navLink, i) => {
                return (
                  <NavLink
                    to={navLink.path && navLink.path}
                    key={i}
                    className={({ isActive }) =>
                      isActive ? "active" : "inactive"
                    }
                    style={
                      {
                        // display: "inline-block",
                        // padding: "8px 0",
                        // color: "#000",
                        // marginRight: "40px",
                      }
                    }
                    // onClick={() => setCurrentView(i + 1)}
                  >
                    {/* <a href="#"> */}
                    {navLink.title}
                    {/* </a> */}
                  </NavLink>
                );
              })}
            </ul>

            <Btn onClick={() => navigate("/register")}>Register</Btn>
          </div>

          <div className="hamburger" onClick={() => setMobile(true)}>
            <img src={Hamburger} alt="Hamburger" />
          </div>
        </div>
      </header>
      <div className="sidebar" style={styles.extra}>
        <div onClick={() => setMobile(false)} className="close">
          <img src={Close} alt="Close" />
        </div>

        <ul>
          {PRIMARY_NAV_ITEMS.map((navLink, i) => {
            return (
              <li key={i}>
                <NavLink
                  to={navLink.path && navLink.path}
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                  style={
                    {
                      // display: "inline-block",
                      // padding: "8px 0",
                      // color: "#000",
                      // marginRight: "40px",
                    }
                  }
                  onClick={() => setMobile(false)}
                >
                  {navLink.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <Btn
          onClick={() => {
            navigate("/register");
            setMobile(false);
          }}
        >
          Register
        </Btn>
      </div>
    </>
  );
};

export default Header;
