import React from "react";
import logo from "./logo.jpg";
import { Radio } from "react-loader-spinner";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div id="fix">
        <div className="header">
          <a href="/">
            <img src={logo} alt="logo" width="80" height="90%" />
          </a>
          <div className="pad">
            <Radio
              visible={true}
              height="80"
              width="80"
              ariaLabel="radio-loading"
              wrapperStyle={{}}
              wrapperClass="radio-wrapper"
            />
          </div>
          <h1 style={{ marginTop: "10px" }}>
            <span style={{ color: "blue" }}>Tech</span>🧑‍🔧
            <span style={{ color: "red" }}>ME</span>
          </h1>
          <div>
            <Radio
              visible={true}
              height="80"
              width="80"
              ariaLabel="radio-loading"
              wrapperStyle={{}}
              wrapperClass="radio-wrapper"
            />
          </div>
        </div>
        <div className="menu">
          <NavLink activeclassname="active" to="/">
            Services
          </NavLink>
          <NavLink activeclassname="active" to="./Gallery">
            Gallery
          </NavLink>
          <NavLink activeclassname="active" to="./Shop">
            Shop
          </NavLink>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Header;
