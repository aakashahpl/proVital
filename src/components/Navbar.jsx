import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { IoArrowForward } from "react-icons/io5";

export const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginMenuOpen, setLoginMenuOpen] = useState(false);

  useEffect(() => {
    const updateView = () => {
      setIsMobile(window.innerWidth <= 1000);
    };
    window.addEventListener('resize', updateView);
    updateView();
    return () => window.removeEventListener('resize', updateView);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const toggleLoginMenu = () => {
    setLoginMenuOpen(!loginMenuOpen);
  };

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="ProVital Logo" style={{ width: '140px', height: '80px' }} />
      </div>
      {!isMobile && (
        <div className="nav-links">
          <a href="#" className="nav-option">List your practice</a>
          <a href="#" className="nav-option">For Employers</a>
          <a href="#" className="nav-option">Courses</a>
          <a href="#" className="nav-option">Books</a>
          <a href="#" className="nav-option">Speakers</a>
          <a href="#" className="nav-option">Doctors</a>
          <a href="#" className="login-option" onClick={toggleLoginMenu}>Login / Signup <IoIosArrowDown /></a>
          {loginMenuOpen && (
            <div className='auth-container-2'>
              <div className='auth'>
                <h3>Doctor</h3>
                <a href='/' className='auth-button'>
                  <span>Login</span>
                  <span>Sign up</span>
                </a>
              </div>
              <div className='auth patient'>
                <h3>Patients</h3>
                <a href='/' className='auth-button'>
                  <span>Login</span>
                  <span>Sign up</span>
                </a>
              </div>
            </div>

          )}
        </div>
      )}

      {isMobile && (
        <div onClick={toggleMenu}>
          {menuOpen ? <RxCross2 size={25} /> : <GiHamburgerMenu size={25} />}
        </div>
      )}

      {menuOpen && (
        <div className="mobile-nav">
          <div className='auth-container'>
            <div className='auth'>
              <h3>Doctor</h3>
              <a href='/' className='auth-button'>Login   Sign up</a>
            </div>
            <div className='auth patient'>
              <h3>Patients</h3>
              <a href='/' className='auth-button'>Login   Sign up</a>
            </div>
          </div>
          <div className='option-container'>
            <a href="/" className="mobile-nav-option">List your practice <IoArrowForward size={20} color="#8d8d8d" /></a>
            <a href="/" className="mobile-nav-option">For Employers <IoArrowForward size={20} color="#8d8d8d" /></a>
            <a href="/" className="mobile-nav-option">Courses <IoArrowForward size={20} color="#8d8d8d" /></a>
            <a href="/" className="mobile-nav-option">Books <IoArrowForward size={20} color="#8d8d8d" /></a>
            <a href="/" className="mobile-nav-option">Speakers <IoArrowForward size={20} color="#8d8d8d" /></a>
            <a href="/" className="mobile-nav-option">Doctors <IoArrowForward size={20} color="#8d8d8d" /></a>
          </div>
        </div>
      )}
    </nav>
  );
};
