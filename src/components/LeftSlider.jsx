import React from 'react';
import './LeftSlider.css';

const leftImages = ['left-0', 'left-1', 'left-2', 'left-3'];

export default function LeftSlider() {
  return (
    <div>
      <article className="wrapper">
        <div className="marquee">
          <div className="marquee__group">
            {leftImages.map((imageName, index) => (
              <div
                key={index}
                className="image-container"
                style={{ backgroundImage: `url(/images/${imageName}.jpeg)` }}
              ></div>
            ))}
          </div>
          <div aria-hidden="true" className="marquee__group">
            {leftImages.map((imageName, index) => (
              <div
                key={index}
                className="image-container"
                style={{ backgroundImage: `url(/images/${imageName}.jpeg)` }}
              ></div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}