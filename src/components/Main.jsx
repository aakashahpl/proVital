import React from 'react';
import './main.css';
import logo from '../assets/logo.png';
import card_svg from '../assets/health-card.svg';
import location_svg from '../assets/location.svg';
import { IoIosArrowDown } from "react-icons/io";
import { CgSearch } from "react-icons/cg";




const leftImages = ['left']


export default function Main() {
  return (
    <>
      <nav>
        <div class="logo">
          <img src={logo} alt="ProVital Logo" style={{ width: '140px', height: '80px' }} />
        </div>
        <div class="nav-links">
          <a href="#" class="nav-option">List your practice</a>
          <a href="#" class="nav-option">For Employers</a>
          <a href="#" class="nav-option">Courses</a>
          <a href="#" class="nav-option">Books</a>
          <a href="#" class="nav-option">Speakers</a>
          <a href="#" class="nav-option">Doctors</a>
          <a href="#" class="login-option">Login / Signup <IoIosArrowDown /></a>

        </div>
        {/* <div class="auth-links">
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
        <div class="content-wrapper">
          <div class="image-grid">
            <div class="column left">
              <img src="https://via.placeholder.com/300x200" alt="Healthy Cooking" />
              <img src="https://via.placeholder.com/300x200" alt="Meditation" />
            </div>
            <div class="column right">
              <img src="https://via.placeholder.com/300x200" alt="Exercise" />
              <img src="https://via.placeholder.com/300x200" alt="Consultation" />
            </div>
          </div>
          <div class="content">
            <h1>Book an appointment with <span class="highlight">lifestyle medicine</span> experts</h1>
            <p>Optimize your lifestyle and reverse chronic diseases.</p>
          </div>
          <form class="search-form">
            <div class="input-group">
              <CgSearch size={30} />
              <input type="text" placeholder="Condition, procedure, specialty..." />
            </div>
            <div class="input-group">
            <img src={location_svg} alt="Icon" />
              <input type="text" placeholder="City, state, or zipcode" />
            </div>
            <div class="input-group">
              <img src={card_svg} alt="Icon" />
              <input type="text" placeholder="Insurance carrier" />
            </div>
            <button type="submit"><CgSearch size={30} />Find now</button>
          </form>
        </div>

        {/* <section class="how-it-works">
          <h2>HOW IT WORKS</h2>
          <div class="subtitle">
            <h3>Lifestyle as medicine:</h3>
            <span>The six pillars</span>
          </div>
          <div class="pillars">
            <button>Nutrition</button>
            <button>Physical activity</button>
            <button>Restorative sleep</button>
            <button>Stress management</button>
            <button>Social connection</button>
            <button>Substance abuse</button>
          </div>
        </section> */}
      </main>

    </>
  );
}
