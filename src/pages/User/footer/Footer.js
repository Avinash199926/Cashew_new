import React from 'react'
import './Footer.css'
import { FaGithub, FaFacebook, FaTwitter, FaMailBulk } from "react-icons/fa";


const Footer = () => {
    return (
        <footer>
            <div class="footer-container">
                <div class="footer-column">
                    <h3>About Us</h3>
                    <p>Our all-in-one ISP Billing and Bandwidth Management Software. Designed specifically for internet service providers (ISPs), our platform streamlines customer management, 
                        automates billing, and optimizes bandwidth control—helping ISPs scale efficiently with greater visibility, control, and customer satisfaction.
                    </p>
                </div>
                <div class="footer-column">
                    <h3>Services</h3>
                    <a href="#">Web Development</a>
                    <a href="#">Mobile Apps</a>
                    <a href="#">UI/UX Design</a>
                    <a href="#">Cloud Solutions</a>
                </div>
                <div class="footer-column">
                    <h3>Contact</h3>
                    <a href="#">Email: support@company.com</a>
                    <a href="#">Phone: 9209033491</a>
                    <a href="#">Thane, Maharashtra</a>
                </div>
                <div class="footer-column">
                    <h3>Follow Us</h3>
                    <div class="social-icons">
                        <a href="#">< FaFacebook /> </a>
                        <a href="#">< FaTwitter /> </a>
                        <a href="#">< FaMailBulk /> </a>

                        <a href="#">< FaGithub /> </a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                &copy; 2025 BitsManagementSystem. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer