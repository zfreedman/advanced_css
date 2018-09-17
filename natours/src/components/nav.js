import React from "react";

class Nav extends React.Component {
  render () {
    return (
      <div className="navigation">
        <input
          className="navigation__checkbox"
          id="navi-toggle"
          type="checkbox"
        />

        <label
          className="navigation__button"
          htmlFor="navi-toggle"
        >
          <span className="navigation__icon">&nbsp;</span>
        </label>
        
        <div className="navigation__background">&nbsp;</div>

        <NavMenu />
      </div>
    );
  }
}

class NavMenu extends React.Component {
  render () {
    return (
      <nav className="navigation__nav">
        <ul className="navigation__list">
          {
            this.navItems.map((item, i) => (
              <li className="navigation__item" key={item}>
                <a href="#" className="navigation__link">
                  <span>{`${i}`.padStart(2, "0")}</span>{item}
                </a>
              </li>
            ))
          }
        </ul>
      </nav>
    );
  }

  navItems = [
    "about natours",
    "your benefits",
    "popular tours",
    "stories",
    "book now",
  ];
}

export default Nav;
