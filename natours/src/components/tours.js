import React from "react";

export default () => {
  const tours = [
    [
      3,
      "very easy",
      2,
      "sea explorer",
      30,
      "cozy hostels",
    ],
    [
      7,
      "medium",
      6,
      "forest hiker",
      40,
      "provided tents",
    ],
    [
      5,
      "hard",
      3,
      "snow adventurer",
      15,
      "provided tents",
    ]
  ].map(makeTour);

  return (
    <section className="section-tours">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          Most popular tours
        </h2>
      </div>
      <div className="row">
        {tours.map((e, i) => TourCard(e, i + 1))}
      </div>
    </section>
  );
};

const TourCard = ({
  days,
  difficulty, 
  guideCount,
  heading,
  peopleCount,
  sleepWhere,
}, i) => {

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
          <div className={`card__picture card__picture--${i}`}>
            &nbsp;
          </div>

          <h4 className={`card__heading`}>
            <span
              className={`card__heading-span card__heading-span--${i}`}>
              {heading}
            </span>
          </h4>

          <div className="card__details">
            <ul>
              <li>{days}</li>
              <li>{peopleCount}</li>
              <li>{guideCount}</li>
              <li>{sleepWhere}</li>
              <li>{difficulty}</li>
            </ul>
          </div>
        </div>
        <div className={classMap["back"]}>
          back
        </div>
      </div>
    </div>
  );
};

const makeTour = ([
  days,
  difficulty, 
  guideCount,
  heading,
  peopleCount,
  sleepWhere,
]) => {
  const peopleStr = peopleCount === 1 ? "person" : "people";

  return {
    days: `${days} day tour`,
    difficulty: `Difficulty: ${difficulty.toLowerCase()}`,
    guideCount: `${guideCount} guide${guideCount === 1 ? "" : "s"}`,
    heading: `The ${heading}`,
    peopleCount: `Up to ${peopleCount} ${peopleStr}`,
    sleepWhere: `Sleep in: ${sleepWhere.toLowerCase()}`,
  };
}
