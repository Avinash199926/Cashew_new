import React from 'react';
// import { ReactComponent as ComputerIcon } from '../../../assets/img/computer.svg';
// import { ReactComponent as LaptopIcon } from '../../../assets/img/laptop.svg';
import './Hero.css';

const Hero = () => {

  // const loginRedirect = () => {
  //   window.location.href = "/login"
  // }

  return (
    <section className="hero">

      {/* <ComputerIcon className="computer left-computer" />

      <LaptopIcon className="computer right-computer" /> */}

      {/* <div className="data-packets">
        <span className="packet packet-left-to-right" />
        <span className="packet packet-right-to-left" />
      </div> */}

      <h1 className='heroCenter'>
        Clean <br/>& <br />Crunchy Cashew Nuts
      </h1>
      {/* <button onClick={loginRedirect} className="cta-btn">Get Started</button> */}
    </section>
  );
};

export default Hero;
