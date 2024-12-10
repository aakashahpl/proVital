import React from 'react';
import './landing.css';
import logo from '../assets/logo.png';
import card_svg from '../assets/health-card.svg';
import location_svg from '../assets/location.svg';
import { IoIosArrowDown } from "react-icons/io";
import { CgSearch } from "react-icons/cg";
import ImageSlider from './imageSlider';




const leftImages = ['left-0', 'left-1', 'left-2', 'left-3'];
const rightImages = ['right-0', 'right-1', 'right-2', 'right-3'];





export default function Main() {
  return (
    <div className='landing-component'>
      <nav>
        <div className="logo">
          <img src={logo} alt="ProVital Logo" style={{ width: '140px', height: '80px' }} />
        </div>
        <div className="nav-links">
          <a href="#" className="nav-option">List your practice</a>
          <a href="#" className="nav-option">For Employers</a>
          <a href="#" className="nav-option">Courses</a>
          <a href="#" className="nav-option">Books</a>
          <a href="#" className="nav-option">Speakers</a>
          <a href="#" className="nav-option">Doctors</a>
          <a href="#" className="login-option">Login / Signup <IoIosArrowDown /></a>

        </div>
        {/* <div className="auth-links">
          <div>
            <span>Doctor</span>
            <a href="#">Login</a>
            <a href="#">Sign up</a>
          </div>
          <div>
            <span>Patients</span>
            <a href="#">Login</a>
            <a href="#">Sign up</a>
          </div>
        </div> */}
      </nav>

      <main>
        <div className="content-wrapper">
          <div className="image-grid">
            <ImageSlider/>
            {/* <div className="column right">
              {rightImages.map((imageName, index) => (
                <img
                  key={index}
                  src={`/images/${imageName}.jpeg`} 
                  alt={`Right Image ${index}`}
                />
              ))}
            </div> */}
          </div>
          <div className="content">
            <h1>Book an appointment with <span className="highlight">lifestyle medicine</span> experts</h1>
            <p>Optimize your lifestyle and reverse chronic diseases.</p>
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

        {/* <section className="how-it-works">
          <h2>HOW IT WORKS</h2>
          <div className="subtitle">
          <h3>Lifestyle as medicine:</h3>
          <span>The six pillars</span>
          </div>
          <div className="pillars">
          <button>Nutrition</button>
          <button>Physical activity</button>
          <button>Restorative sleep</button>
            <button>Stress management</button>
            <button>Social connection</button>
            <button>Substance abuse</button>
            </div>
            </section> */}
      </main>
      <div className="slanting-div"></div>

    </div>
  );
}
