import React from 'react';
import picture from  '../public/images/Maktub-primary_logo.png'
const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
            <img src={ picture }/>
        </div>
        <div className="menu">
          <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="/about">HEADER STYLES</a></li>
            <li><a href="/Tag">TAG</a></li>
            <li><a href="/Author">AUTHOR</a></li>
            <li><a href="/contact">CONTACT</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
