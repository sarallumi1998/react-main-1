import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../src/img/zomato-logo.png';
import './App.css';
const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="#a"><img src={logo} alt="Logo" /></Link>
      </div>
      <nav>
        <ul>
          <li><Link to="#a">Home</Link></li>
          <li><Link to="#a">About</Link></li>
          <li><Link to="#a">Order Variety Foods</Link></li>
          <li><Link to="#a">Contact Us</Link></li>
          <li><Link to="#a">Login</Link></li>
          <li><Link to="#a">Sign Up</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
