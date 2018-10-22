import React from 'react'

export default function Gallery() {
  return (
    <section className="gallery">
    {
      " ".repeat(14).split("").map((e, i) => {
        // could just do i + 1 everywhere, but this is easier
        // also note that i is a local value and does not change
        // map indexing for future elements
        ++i;

        return (
          <figure
            className={`gallery__item gallery__item--${i}`}
            key={`gallery house ${i}`}
          >
            <img
              alt={`Gallery image ${i}`}
              className="gallery__img"
              src={require(`../img/gal-${i}.jpeg`)}
            />
          </figure>
        );
      })
    }
    </section>
  );
}
