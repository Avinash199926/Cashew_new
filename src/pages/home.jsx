import React from 'react';
import Hero from '../pages/User/hero/Hero';
import Services from '../pages/User/OurServices/Services';
import About from '../pages/User/About/About';
import Team from '../pages/User/Team/Team';
import './Home.css';
import Contact from '../pages/User/Contact/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Team />
      <Contact />
    </>
  );
};

export default Home;
