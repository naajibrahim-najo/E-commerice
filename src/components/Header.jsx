import React, { Component } from 'react';
import logo from '../assets/logo.jpg';
// import {link} from react-router-dom
function Header() {
  return (
    <div>

      <header className="bg-gray-800 text-white p-4">
        <img src={logo} alt="Logo" className="h-11 w-11" />
        {/* <h1 className="text-2xl font-bold text-white">Home page</h1> */}
        {/* <img src={download} alt="Logo" className="h-8 w-8" /> */}
        {/* <Link to="/home" className="text-white hover:text-gray-300 ml-4">
          Home
        </Link>
        <Link to="/about" className="text-white hover:text-gray-300 ml-4">
          About
        </Link>
        <Link to="/contact" className="text-white hover:text-gray-300 ml-4">
          Contact
        </Link> */}
      </header>
       </div>
    );
  }


export default Header;