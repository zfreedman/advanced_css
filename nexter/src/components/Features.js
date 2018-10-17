import React, { Component } from 'react'
import "../img/sprite.svg";

class Feature {
  constructor (icon, heading, text) {
    this.heading = heading;
    this.icon = icon;
    this.text = text;
  }
}

const features = [
  new Feature(
    "global",
    "World's best luxury homes",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus."
  ),
  new Feature(
    "trophy",
    "Only the best properties",
    "Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut quia."
  ),
  new Feature(
    "map-pin",
    "All homes in top locations",
    "Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum."
  ),
  new Feature(
    "key",
    "New home in one week",
    "Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  ),
  new Feature(
    "presentation",
    "Top 1% realtors",
    "Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus pariatur voluptatibus."
  ),
  new Feature(
    "lock",
    "Secure payments on Nexter",
    "Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae."
  ),
];

export default () => {
  return (
    <section className="features">
      {
        features.map((e, i) => {
          const { heading, icon, text } = e;

          return (
            <div className="feature" key={`feature ${i}`}>
              <svg className="feature__icon">
                <use xlinkHref={`#sprite_icon-${icon}`} />
              </svg>

              <h4 className="heading-4 heading-4--dark">{heading}</h4>

              <p className="feature__text">{text}</p>
            </div>
          );
        })
      }
    </section>
  );
};
