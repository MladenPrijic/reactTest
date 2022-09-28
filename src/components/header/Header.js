import React from 'react';
import Nav from '../nav/Nav';
import './header.css';

const Header = () => {
  return (
    <header className={`header`}>
      <div className={`wrapp`}>
        <div className="logo">
          <a href="/" className={`logo-link`}>
            <span className="logo-icon"></span>
            <span className="logo-text">Blockchain</span>
          </a>
        </div>

        <Nav />

        <div className="account">
          <div className="notification">
            <span>1</span>
          </div>
          <div className="user">
            <img src="https://thumbs.dreamstime.com/b/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg" alt="Mladen Prijic" />

            <span>Mladen Prijic</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
