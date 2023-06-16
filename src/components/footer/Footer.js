import React from 'react';
import './Footer.css'
import logo from '../../assets/amazon_logo.png'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="logo">
                        <img src={logo} alt="Website Logo" />
                    </div>
                    <div className="copyright">
                        <p>&copy; {new Date().getFullYear()} Primezon. All rights reserved.</p>
                    </div>
                    <div className="portfolio-link">
                        <a href="https://www.yourportfolio.com">
                            {/* PortFolio Icon */}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
