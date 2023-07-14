import React from 'react';
import picture from  'public/images/Maktub-primary_logo.png'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
           <div className="footer-logo">
            <img src={ picture } alt="Logo" />
          </div> 
          <nav className="footer-nav">
            <ul className="footer-menu">
              <li className="menu-item"><a href="/">HOME</a></li>
              <li className="menu-item"><a href="/about">ABOUT</a></li>
              <li className="menu-item"><a href="/services">SERVICES</a></li>
              <li className="menu-item"><a href="/contact">CONTACT</a></li>
            </ul>
          </nav>
          <div className="footer-social">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
