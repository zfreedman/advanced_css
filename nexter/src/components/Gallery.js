import React from 'react'

export default function Gallery() {
  return (
    <section className="gallery">
    (figure.gallery__item.gallery__item--$>img.gallery__img*14)*14
    {
      " ".repeat(14).split("").map((e, i) => {
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
