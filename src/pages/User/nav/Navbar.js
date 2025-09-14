import React, { useState, useEffect } from 'react';
import './Navbar.css';
import gif from '../../../assets/video/KCF.png';


const Navbar = () => {
  const [activeSession, setactiveSession] = useState('home');

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setactiveSession(id);
    }

    const menuCheckbox = document.getElementById('menu-checkbox');
    if (menuCheckbox) menuCheckbox.checked = false;
  };

  const scrollUp = () => {
    window.location.href = '/';
  };

  // Optional: Scroll-based navbar background change
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (window.scrollY > 10) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav>
      <div className="navbar">
        <div className="logo">
          <img src={gif} alt="logo" className="logo-video" />
          <span className="logo-text">
            {/* K <span className="highlight">C</span> F */}
          </span>
        </div>
        <input type="checkbox" id="menu-checkbox" />
        <label htmlFor="menu-checkbox" className="menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <ul className="nav-links">
          <li><button className={activeSession === 'home' ? 'active' : ''} onClick={scrollUp}>Home</button></li>
          <li><button className={activeSession === 'about' ? 'active' : ''} onClick={() => scrollToSection('about')}>About</button></li>
          <li><button className={activeSession === 'services' ? 'active' : ''} onClick={() => scrollToSection('services')}>Services</button></li>
          <li><button className={activeSession === 'team' ? 'active' : ''} onClick={() => scrollToSection('about')}>Team</button></li>
          {/* <li><button className={activeSession === 'pricing' ? 'active' : ''} onClick={() => scrollToSection('pricing')}>Pricing</button></li> */}
          <li><button className={activeSession === 'contact' ? 'active' : ''} onClick={() => scrollToSection('contact')}>Contact</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
