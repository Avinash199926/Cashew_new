import React from 'react';
import './About.css';
import ChartUp from '../../../assets/img/svg/chart_kcf.svg'
import Deal from '../../../assets/img/svg/chart_kcf.svg';
import handshake from '../../../assets/img/svg/chart_kcf.svg'

const About = () => {
  return (
    <div className="aboutus-container">
      <h2 className='about-header'>About Us</h2>
      <div className="about-containt">
        <div className="about-containt-img">
          <img src={Deal} alt="About Us" />
        </div>
        <div className="about-containt-info ">
          <h1 className='heading-color'>We've been in business</h1>
          <p>Malvan, located in Maharashtra's Konkan region, is a significant hub for the cashew nut industry in India, known for its cultivation, processing, and popular brands like Zantye Kaju. The region benefits from a favorable climate for growing cashews, a native crop introduced by the Portuguese centuries ago. Visitors can buy high-quality whole, roasted, and flavored cashew nuts directly from factory outlets such as Zantye's, which are highly regarded for their premium products.
          </p>
        </div>
      </div>

      <div className="about-containt about-containt-bg">
        <div className="about-containt-info">
          <h1>100%  Cashew Processing & Trading</h1>
          <p>
           . 100% Farm-to-Market Traceability
            <br/>
           . Strong farmer partnerships ensuring fair trade and sustainability
            <br/>
           . End-to-end logistics & supply chain expertise
             <br/>
           .  Commitment to customer satisfaction, quality, and trust
            <br/> 
          </p>
        </div>
        <div className="about-containt-img ">
          <img src={handshake} alt="About Us" />
        </div>
      </div>

      <div className="about-containt">
        <div className="about-containt-img">
          <img src={ChartUp} alt="About Us" />
        </div>
        <div className="about-containt-info ">
          <h1 className='heading-color'>Why us?</h1>
          <p>
            <ul className='about-list'>
              <li>Widely Used...<br />
                Preferred by ISPs and WiFi HotSpot operators across India.</li>
              <li>100% Cloud-Hosted...<br />
                Powered by Amazon AWS for high availability.</li>
              <li>Easy Setup... <br />
                Requires only a MikroTik router to start managing internet traffic.</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
