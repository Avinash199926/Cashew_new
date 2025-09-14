import React from 'react';
import './Services.css';
import { IoMdWifi, IoLogoAndroid } from "react-icons/io";
import { FaLaptopCode } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa6";
import { MdOutlineSupportAgent } from "react-icons/md";
const Services = () => {
  return (
    <div>
      <div className="wrapper">
        <h2 className="services-heading11">Our Services</h2>
        <div class="box-area">
          <div class="icon-area">
            <p className="icon">
              <IoMdWifi className='icon-shadow' />
            </p>
          </div>
          <h6>WiFi Hotspot Solution</h6>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, nobis?</p>
        </div>
        <div class="box-area">
          <div class="icon-area">
            <p className="icon">
              <FaLaptopCode className='icon-shadow' />
            </p>
          </div>
          <h6>UI/UX Design</h6>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, nobis?</p>
        </div>
        <div class="box-area">
          <div class="icon-area">
            <p className="icon">
              <IoLogoAndroid className='icon-shadow' />
            </p>
          </div>
          <h6>Mobile Apps</h6>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, nobis?</p>
        </div>
        <div class="box-area">
          <div class="icon-area">
            <p className="icon">
              <FaNetworkWired className='icon-shadow' />
            </p>
          </div>
          <h6>Networking</h6>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, nobis?</p>
        </div>
        <div class="box-area">
          <div class="icon-area">
            <p className="icon">
              <MdOutlineSupportAgent className='icon-shadow' />
            </p>
          </div>
          <h6>Desk Support</h6>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, nobis?</p>
        </div>
      </div>
    </div>
  )
}

export default Services