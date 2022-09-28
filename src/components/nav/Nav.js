import React from 'react';
import './nav.css';

const Nav = () => {
  return (
    <nav className={`nav `}>
      <ul>
        <li>
          <a href="/">Explore</a>
        </li>
        <li className="active">
          <a href="/">My courses</a>
        </li>
        <li>
          <a href="/">Become an instructor</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
