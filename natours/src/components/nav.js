import React from "react";

class Nav extends React.Component {
  render () {
    return (
      <div className="navigation">
        <NavButton />

        <div className="navigation__background">&nbsp;</div>

        <NavMenu />
      </div>
    );
  }
}

const NavButton = () => (
  <div>
    <input
      className="navigation__checkbox"
      id="navi-toggle"
      type="checkbox"
    />

    <label
      className="navigation__button"
      for="navi-toggle"
    >
      Menu
    </label>
  </div>
);

class NavMenu extends React.Component {
  render () {
    return (
      <nav className="navigation__nav">
        <ul className="navigation__list">
          {
            this.navItems.map((item, i) => (
              <li className="navigation__item">
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