import React from "react";

import "./styles/header.css";

class Header extends React.Component {
  render () {
    return (
      <header className="header">
        <div className="logo-box">
          <img src={require("./img/logo-white.png")} alt="Logo" className="logo" />
        </div>
      </header>
    );
  }
}

export default Header;
