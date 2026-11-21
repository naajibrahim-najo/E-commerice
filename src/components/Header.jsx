import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import { MagnifyingGlassIcon, SunIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
// import {link} from react-router-dom
function Header() {
  return (
    <div>

      <header className="bg-gray-800 text-white p-4 flex items-center justify-between gap-10">
        <img src={logo} alt="Logo" className="h-11 w-11" />
        <nav className="flex space-x-4">
          <Link to="/" className="hover:text-gray-400">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-400">
            About
          </Link>
          <Link to="/contact" className="hover:text-gray-400">
            Contact
          </Link>
          <SunIcon className="h-6 w-6 text-yellow-400 hover:text-gray-400" />
          <button>
          <MagnifyingGlassIcon className="h-6 w-6 text-white hover:text-gray-400" />
          </button>
          <ShoppingBagIcon className='h-6 w-6 text-white hover:text-gray-400'/>
          
        </nav>
      </header>
       </div>
    );
  }


export default Header;