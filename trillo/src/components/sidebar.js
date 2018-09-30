import React from "react";

export default () => {
  const navItems = {
    "hotel": { active: true, icon: "home" },
    "flight": { active: false, icon: "aircraft" },
    "car rental": { active: false, icon: "key" },
    "tours": { active: false, icon: "map" },
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
    let icon = itemMap[key].icon;
    let active = itemMap[key].active;

    return (
      <li
        className={
          `sidebar-nav__item ${active
            ? "sidebar-nav__item--active"
            : ""}`
        }
        key={key}
      >
        <a href="#" className="sidebar-nav__link">
          <svg className="sidebar-nav__icon">
            <use xlinkHref={`../../img/sprite.svg#icon-${icon}`}></use>
          </svg>
          <span>{key[0].toUpperCase() + key.substr(1)}</span>
        </a>
      </li>
    );
  })
};
