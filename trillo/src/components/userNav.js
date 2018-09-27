import React from "react";

const iconNotificationMap = {
  "bookmark": 7,
  "chat": 13,
};

export default () => (
  <nav className="user-nav">
    {
      Object.keys(iconNotificationMap).map(key =>
        renderIcon(key, iconNotificationMap[key])
      )
    }

    <div className="user-nav__user">
      <img
        alt="user photo"
        className="user-nav__user-photo"
        src="../../img/user.jpg"
      />

      <span className="user-nav__user-name">Jonas</span>
    </div>
  </nav>
);

const renderIcon = (iconName, notifCount) => (
  <div className="user-nav__icon-box">
    <svg className="user-nav__icon">
      <use xlinkHref={`../../img/sprite.svg#icon-${iconName}`} />
    </svg>
    <span className="user-nav__notification">{notifCount}</span>
  </div>
);
