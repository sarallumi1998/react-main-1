import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../src/img/zomato-logo.png';
import './App.css';
const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/"><img src={logo} alt="Logo" /></Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/foods">Order Variety Foods</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
