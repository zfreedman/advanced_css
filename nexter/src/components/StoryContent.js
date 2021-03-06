import React from 'react'

const storyText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus. Quidem consequatur harum volupta!";

export default function StoryContent() {
  return (
    <div className="story__content">
      <h3 className="heading-3 mb-sm">Happy customers</h3>

      <h2 className="heading-2 heading-2--dark mb-md">
        &ldquo;The best decision of our lives&rdquo;
      </h2>

      <p className="story__text">{storyText}</p>

      <button className="btn">Find your own home</button>
    </div>
  );
};
