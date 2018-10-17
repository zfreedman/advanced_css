import React from 'react';
export default function StoryPictures() {
  return (
    <div className="story__pictures">
      <img
        alt="Couple with new house"
        className="story__img--1"
        src={require("../img/story-1.jpeg")}
      />

      <img
        alt="Couple with new house"
        className="story__img--2"
        src={require("../img/story-2.jpeg")}
      />
    </div>
  );
};
