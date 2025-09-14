import React from 'react'
import './Team.css';
import neehal from '../../../assets/img/neehalphoto.jpg'
import avinash from '../../../assets/img/avinash.png'
import kaushal from '../../../assets/img/kaushal.jpg'

import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";

const Team = () => {
    return (
        <div>
            <section id="Team" className="team-section">
                <h2>Our Developer Team</h2>
                <p className="subtitle">Our developer team is a passionate group of experienced professionals dedicated to building innovative,
                    scalable, and reliable digital solutions.
                    With expertise spanning front-end and back-end technologies, mobile and web development, and modern frameworks,
                    we turn ideas into powerful applications. We believe in clean code, agile practices,
                    and continuous learning to ensure we deliver high-quality software that meets and exceeds client expectations.</p>
                <div className="team-members">
                    <div className="team-card">
                        <img src={neehal} alt="Neehal P Prajapati" />
                        <h3>Neehal P Prajapati</h3>
                        <p>Developer</p>
                        <div className='team-social-icons'>
                            <a href="http://" target='_blank'> <FaFacebook /></a>
                            <a href="http://" target='_blank'><FaInstagram /></a>
                            <a href="http://" target='_blank'><FaGithub /></a>
                            <a href="http://" target='_blank'>  <BsGlobe2 /></a>
                        </div>
                    </div>
                    <div className="team-card">
                        <img src={avinash} alt="Avinash Lokhande" />
                        <h3>Avinash Lokhande</h3>
                        <p>Developer</p>
                        <div className='team-social-icons'>
                            <a href="https://www.facebook.com/avinash.lokhande.3194/" target='_blank'> <FaFacebook /></a>
                            <a href="https://www.instagram.com/__itz__avinash__code_crushers_/" target='_blank'><FaInstagram /></a>
                            <a href="https://github.com/avinashlokhandebms" target='_blank'><FaGithub /></a>
                            <a href="https://avinash-lokhande-profile.vercel.app/" target='_blank'>  <BsGlobe2 /></a>
                        </div>
                    </div>
                    <div className="team-card">
                        <img src={kaushal} alt="Kaushal Patil" />
                        <h3>Kaushal Patil</h3>
                        <p>Developer</p>
                        <div className='team-social-icons'>
                            <a href="https://www.facebook.com/kaushal.patil.5872/" target='_blank'> <FaFacebook /></a>
                            <a href="https://www.instagram.com/chiku_the_ghost?igsh=amsxcWRmYTRwem5x" target='_blank'><FaInstagram /></a>
                            <a href="https://github.com/kaushal-1999" target='_blank'><FaGithub /></a>
                            <a href="https://kaushalportfolio.vercel.app/" target='_blank'>  <BsGlobe2 /></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Team