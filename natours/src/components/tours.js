import React from "react";

export default () => {
  const tours = [1, 2, 3];

  return (
    <section className="section-tours">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          Most popular tours
        </h2>
      </div>
      <div className="row">
        {tours.map(TourCard)}
      </div>
    </section>
  );
};

const TourCard = (i) => {
  const classes = ["back", "front"];
  const classMap = classes.reduce((acc, str) => {
    acc[str] = `card__side card__side--${str} card__side--${str}-${i}`;
    return acc;
  }, {});


  return (
    <div className="col-1-of-3">
      <div className="card">
        <div
          className={classMap["front"]}>
          front
        </div>
        <div className={classMap["back"]}>
          back
        </div>
      </div>
    </div>
  );
};
