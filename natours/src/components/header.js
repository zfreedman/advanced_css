import React from "react";

import "./styles/header.css";

class Header extends React.Component {
  render () {
    return (
      <header className="header">
        <div className="logo-box">
          <img
            src={require("./img/logo-white.png")}
            alt="Logo"
            className="logo"
          />
        </div>

        <div className="text-box">
          <h1 className="heading-primary">
            <span className="heading-primary-main">Outdoors</span>

            <span className="heading-primary-sub">
              is where life happens
            </span>
          </h1>

          <a id="mybtn" href="#" className="btn btn-animated btn-white">
            Discover our tours
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
