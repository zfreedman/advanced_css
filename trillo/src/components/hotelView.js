import React from "react";

export default () => {
  return (
    <main className="hotel-view">
      <PhotoGallery />
      <Overview />
    </main>
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
