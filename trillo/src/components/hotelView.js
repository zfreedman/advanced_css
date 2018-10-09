import React from "react";

import CallToAction from "./callToAction";

export default () => {
  return (
    <main className="hotel-view">
      <PhotoGallery />
      <Overview />
      <Detail />
      <CallToAction />
    </main>
  );
};

const Detail = () => {
  const pTexts = [
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.",
    "Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam.",
  ];
  const reviews = [
    [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.",
      "Nick Smith",
      "Feb 23rd, 2018",
      7.8,
    ],
    [
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.",
      "Mary Thomas",
      "Sep 13th, 2017",
      9.3,
    ]
  ];
  const ulItems = [
    "close to the beach",
    "breakfast included",
    "free airport shuttle",
    "free wifi in all rooms",
    "air conditioning and heating",
    "pets allowed",
    "we speak all languages",
    "perfect for families",
  ];

  const listItemBeforeStyle = {
    // backgroundImage: `url("../img/chevron-thin-right.svg")`,

    // for future browsers
    maskImage: `url("../img/chevron-thin-right.svg")`,
    maskSize: "cover",

    // for current browsers
    WebkitMaskImage: `url("../img/chevron-thin-right.svg")`,
    WebkitMaskSize: "cover",
  };

  return (
    <div className="detail">
      <div className="description">
        {
          pTexts.map((e, i) => (
            <p className="paragraph" key={`ptext-${i}`}>{e}</p>
          ))
        }

        <ul className="list">
          {
            ulItems.map((e, i) => (
              <li
                className="list__item"
                key={`ulItem-${i}`}
              >
                {/* <img
                  alt={`List icon`}
                  className="list__item-before"
                  src="../../img/chevron-thin-right.svg"
                /> */}
                <span
                  className="list__item-before"
                  style={listItemBeforeStyle}>
                </span>
                {e[0].toUpperCase() + e.substr(1)}
              </li>
            ))
          }
        </ul>

        <div className="recommend">
          <p className="recommend__count">
            Lucy and 3 other friends recommend this hotel
          </p>

          <div className="recommend__friends">
            {
              " ".repeat(4).split("").map((e, i) => (
                <img
                  alt={`Friend ${i}`}
                  className="recommend__photo"
                  key={`friend-${i}`}
                  src={`../../img/user-${i + 3}.jpg`}
                />
              ))
            }
          </div>
        </div>
      </div>
      
      <div className="user-reviews">
        {
          reviews.map((e, i) => (
            <figure className="review" key={`review-${i}`}>
                <blockquote className="review__text">
                  {e[0]}
                </blockquote>

                <figcaption className="review__user">
                  <img
                    alt={`User ${i + 1}`}
                    className="review__photo"
                    src={`../../img/user-${i + 1}.jpg`}
                  />

                  <div className="review__user-box">
                    <p className="review__user-name">{e[1]}</p>

                    <p className="review__user-date">{e[2]}</p>
                  </div>

                  <div className="review__rating">{e[3]}</div>
                </figcaption>
            </figure>
          ))
        }

        <button className="btn-inline">
          Show all <span>&rarr;</span>
        </button>
      </div>
    </div>
  );
};

const Overview = () => {
  return (
    <div className="overview">
      <h1 className="overview__heading">Hotel Las Palmas</h1>

      <div className="overview__stars">
        {
          " ".repeat(5).split("").map((e, i) => (
            <svg className="overview__icon-star" key={`star-${i}`}>
              <use xlinkHref={`../../img/sprite.svg#icon-star`} />
            </svg>
          ))
        }
      </div>

      <div className="overview__location">
        <svg className="overview__icon-location">
          <use xlinkHref={`../../img/sprite.svg#icon-location-pin`} />
        </svg>

        <button className="btn-inline">Albufeira, Portugal</button>
      </div>

      <div className="overview__rating">
        <div className="overview__rating-average">8.6</div>

        <div className="overview__rating-count">429 votes</div>
      </div>
    </div>
  );
};

const PhotoGallery = () => {
  return (
    <div className="gallery">
      {
        [1,2,3].map(e => 
          (
            <figure className="gallery__item" key={`galleryPhoto-${e}`}>
              <img
                alt="Photo of hotel"
                className="gallery__photo"
                src={`../img/hotel-${e}.jpg`}
              />
            </figure>
          )
        )
      }
    </div>
  );
};
