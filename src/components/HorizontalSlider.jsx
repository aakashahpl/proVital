import React from 'react';
import './HorizontalSlider.css';

const AllImages = ['left-0', 'left-1', 'left-2', 'left-3', 'right-0', 'right-1', 'right-2', 'right-3'];

export default function HorizontalSlider() {
  return (
    <div>
      <article className="wrapper3">
        <div className="marquee3">
          <div className="marquee__group3">
            {AllImages.map((imageName, index) => (
              <div
                key={index}
                className="imageContainer3"
                style={{ backgroundImage: `url(/images/${imageName}.jpeg)` }}
              ></div>
            ))}
          </div>
          <div aria-hidden="true" className="marquee__group3">
            {AllImages.map((imageName, index) => (
              <div
                key={index}
                className="imageContainer3"
                style={{ backgroundImage: `url(/images/${imageName}.jpeg)` }}
              ></div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}

