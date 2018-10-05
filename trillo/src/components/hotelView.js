import React from "react";

export default () => {
  return (
    <main className="hotel-view">
      <PhotoGallery />
      <Overview />
      <Detail />
    </main>
  );
};

const Detail = () => {
  const pTexts = [
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.",
    "Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam.",
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
              <li className="list__item" key={`ulItem-${i}`}>
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
                  src={`../../img/user-${i + 2}.jpg`}
                />
              ))
            }
          </div>
        </div>
      </div>
      
      <div className="user-reviews">
        User reviews
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
