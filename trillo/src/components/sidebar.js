import React from "react";

export default () => {
  const navItems = {
    "hotel": "home",
    "flight": "aircraft",
    "car rental": "key",
    "tours": "map"
  };

  return (
    <nav className="sidebar">
      <ul className="sidebar-nav">
        {renderListItems(navItems)}
      </ul>

      <div className="legal">
        &copy; 2017 by trillo. All rights reserved.
      </div>
    </nav>
  );
};

const renderListItems = itemMap => {
  return Object.keys(itemMap).map(key => {
    let val = itemMap[key];

    return (
      <li className="sidebar-nav__item">
        <a href="#" className="sidebar-nav__link">
          <svg className="sidebar-nav__icon">
            <use xlinkHref={`../../img/sprite.svg#icon-${val}`}></use>
          </svg>
          <span>{key[0].toUpperCase() + key.substr(1)}</span>
        </a>
      </li>
    );
  })
};
