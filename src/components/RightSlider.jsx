import React from 'react';
import styles from './RightSlider.module.css';

const rightImages = ['right-0', 'right-1', 'right-2', 'right-3'];

export default function RightSlider() {
  return (
    <div>
      <article className={styles.wrapper}>
        <div className={styles.marquee}>
          <div className={styles.marquee__group}>
            {rightImages.map((imageName, index) => (
              <div
                key={index}
                className={styles.imageContainer}
                style={{ backgroundImage: `url(/images/${imageName}.jpg)` }}
              ></div>
            ))}
          </div>

          <div aria-hidden="true" className={styles.marquee__group}>
            {rightImages.map((imageName, index) => (
              <div
                key={index}
                className={styles.imageContainer}
                style={{ backgroundImage: `url(/images/${imageName}.jpg)` }}
              ></div>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
