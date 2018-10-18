import React from 'react'

import "../img/sprite.svg";

class Home {
  constructor (title, location, roomCount, sqMeters, priceUSD) {
    this.title = title;
    this.location = location;
    this.roomCount = roomCount;
    this.sqMeters = sqMeters;
    this.priceUSD = priceUSD;
  }
}

const homes = [
  new Home(
    "Beautiful Family House",
    "USA",
    5,
    325,
    1200000
  ),
  new Home(
    "Modern Glass Villa",
    "Canada",
    6,
    450,
    2750000
  ),
  new Home(
    "Cozy Country House",
    "UK",
    4,
    250,
    850000
  ),
  new Home(
    "Large Rustical Villa",
    "Portugal",
    6,
    480,
    1950000
  ),
  new Home(
    "Majestic Palace House",
    "Germany",
    18,
    4230,
    9500000
  ),
  new Home(
    "Modern Family Apartment",
    "Italy",
    3,
    180,
    600000
  ),
];

// https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
const formatNumber = num => (
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
);

export default function Homes() {
  return (
    <section className="homes">
      {
        homes.map((e, i) => (
          <div className="home" key={`home ${i + 1}`}>
            <img
              alt={`House ${i + 1}`}
              className="home__img"
              src={require(`../img/house-${i + 1}.jpeg`)}
            />

            <svg className="home__like">
              <use xlinkHref={`#sprite_icon-heart-full`} />
            </svg>

            <h5 className="home__name">{e.title}</h5>

            <div className="home__location">
              <svg>
                <use xlinkHref={`#sprite_icon-map-pin`} />
              </svg>

              <p>{e.location}</p>
            </div>

            <div className="home__rooms">
              <svg>
                <use xlinkHref={`#sprite_icon-profile-male`} />
              </svg>

              <p>{e.roomCount}</p>
            </div>

            <div className="home__area">
              <svg>
                <use xlinkHref={`#sprite_icon-expand`} />
              </svg>

              <p>{formatNumber(e.sqMeters)} m<sup>2</sup></p>
            </div>

            <div className="home__price">
              <svg>
                <use xlinkHref={`#sprite_icon-key`} />
              </svg>

              <p>${formatNumber(e.priceUSD)}</p>
            </div>

            <button className="btn home__btn">Contact realtor</button>
          </div>
        ))
      }
    </section>
  );
};
