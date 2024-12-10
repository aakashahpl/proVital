import { React, useEffect, useState } from 'react';
import './Landing.css';
import card_svg from '../assets/health-card.svg';
import location_svg from '../assets/location.svg';
import { CgSearch } from "react-icons/cg";
import LeftSlider from './LeftSlider';
import RightSlider from './RightSlider';
import HorizontalSlider from './HorizontalSlider';

export default function Main() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateView = () => {
      setIsMobile(window.innerWidth <= 1000);
    };
    window.addEventListener('resize', updateView);
    updateView();
    return () => window.removeEventListener('resize', updateView);
  }, []);


  return (
    <div className='landing-component'>
      <main>
        <div className="content-wrapper">
          {!isMobile && (
            <div className="image-grid">
              <LeftSlider />
              <RightSlider />
            </div>
          )}
          <div className="content-heading">
            <h1 className="content-main">Book an appointment with <span className="highlight">lifestyle medicine</span> experts</h1>
            <p className="content-tagline">Optimize your lifestyle and reverse chronic diseases.</p>
          </div>
          <form className="search-form">
            <div className="input-group">
              <CgSearch size={30} />
              <input type="text" placeholder="Condition, procedure, specialty..." />
            </div>
            <div className="input-group">
              <img src={location_svg} alt="Icon" />
              <input type="text" placeholder="City, state, or zipcode" />
            </div>
            <div className="input-group">
              <img src={card_svg} alt="Icon" />
              <input type="text" placeholder="Insurance carrier" />
            </div>
            <button type="submit"><CgSearch size={30} />Find now</button>
          </form>

        </div>
      </main>
      <div className="slanting-div"></div>
      {isMobile && (
        <div className="image-grid">
          <HorizontalSlider />
        </div>
      )}
    </div>
  );
}
