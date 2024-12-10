import React from 'react';
import './LeftSlider.css';

const leftImages = ['left-0', 'left-1', 'left-2', 'left-3'];


export default function LeftSlider() {
  return (
    <div>
      <article class="wrapper">
        <div class="marquee">
          <div class="marquee__group">
            {leftImages.map((imageName, index) => (
              <img
                key={index}
                src={`/images/${imageName}.jpeg`}
                alt={`Left Image ${index}`}
              />
            ))}
          </div>
          <div aria-hidden="true" class="marquee__group">
            {leftImages.map((imageName, index) => (
              <img
                key={index}
                src={`/images/${imageName}.jpeg`}
                alt={`Left Image ${index}`}
              />
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}