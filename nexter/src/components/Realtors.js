import React, { Component } from 'react'

class Realtor {
  constructor (name, saleCount) {
    this.name = name;
    this.saleCount = saleCount;
  }
}

const realtors = [
  new Realtor("Erik Feinman", 245),
  new Realtor("Kim Brown", 212),
  new Realtor("Toby Ramsey", 198),
];

export default () => {
  return (
    <div className="realtors">
      <h3 className="heading-3">Top 3 realtors</h3>
      {
        (
          <div className="realtors__list">
          {
            realtors.map((e, i) => {
              ++i;

              return (
                <div className="realtors__item" key={`realtor ${i}`}>
                  <img
                    alt={ `Realtor ${i}` }
                    className="realtors__img"
                    src={ require(`../img/realtor-${i}.jpeg`) }
                  />

                  <div className="realtors__details">
                    <h4 className="heading-4 heading-4--light">
                      { e.name }
                    </h4>

                    <p className="realtors__sold">
                      { e.saleCount } houses sold
                    </p>
                  </div>
                </div>
              );
            })
          }
          </div>
        )
      }
    </div>
  );
};
