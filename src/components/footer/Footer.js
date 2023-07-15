import React from 'react';
import './Footer.css'
import logo from '../../assets/amazon_logo.png'
import { VscGoToFile } from 'react-icons/vsc'

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
                        <a href="/">
                            <VscGoToFile />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
