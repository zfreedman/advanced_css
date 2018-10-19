import React, { Component } from 'react'

const logos = [
  "bbc",
  "forbes",
  "techcrunch",
  "bi",
];

export default () => {
  return (
    <header className="header">
      <img
        alt="Nexter logo"
        className="header__logo"
        src={ require("../img/logo.png") }
      />

      <h3 className="heading-3">Your own home:</h3>

      <h1 className="heading-1">The ultimate personal freedom</h1>

      <button className="btn header__btn">View our properties</button>

      <div className="header__seenon-text">Seen on</div>

      <div className="header__seenon-logos">
        { renderLogos(logos) }
      </div>
    </header>
  );
};

const renderLogos = arr => arr.map((e, i) => {
  const text = `Seen on logo ${ i }`;

  return (
    <img
      alt={ text }
      key={ text }
      src={ require(`../img/logo-${ e }.png`) }
    />
  );
});
