import React from 'react'

const links = [
  "Find your dream home",
  "Request proposal",
  "Download home planner",
  "Contact us",
  "Submit your property",
  "Come work with us",
];

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="nav">
        {
          links.map((e, i) => (
            <li className="nav__item" key={`link ${i}`}>
              <a href="" className="nav__link">{e}</a>
            </li>
          ))
        }
      </ul>

      <p className="copyright">
        &copy; Copyright 2017 by Jonas Schmedtmann. Feel free to use this project for your own purposes. This does NOT apply if you plan to produce your own video course or tutorials based on this project.
      </p>
    </footer>
  );
}
