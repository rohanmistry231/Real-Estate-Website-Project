// src/components/Navbar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../ThemeContext'; // Import the theme context

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme(); // Use the theme context
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md fixed w-full top-0 z-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <div className="flex-shrink-0">
            <Link to="/" className={`${isDarkMode ? 'text-white' : 'text-blue-600'} text-3xl font-bold`}>
              D'souza Philip
            </Link>
          </div>

          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className={`${isDarkMode ? 'text-gray-300' : 'text-gray-800'} hover:text-blue-500 transition duration-150`}>
              Home
            </Link>
            <Link to="/properties" className={`${isDarkMode ? 'text-gray-300' : 'text-gray-800'} hover:text-blue-500 transition duration-150`}>
              Properties
            </Link>
            <Link to="/contact" className={`${isDarkMode ? 'text-gray-300' : 'text-gray-800'} hover:text-blue-500 transition duration-150`}>
              Contact
            </Link>

            <button
              onClick={toggleDarkMode}
              className={`px-3 py-1.5 rounded-lg shadow-md border focus:outline-none transition duration-300 ${
                isDarkMode ? 'bg-gray-900 text-white border-gray-700' : 'bg-gray-100 text-gray-800 border-gray-300'
              } flex items-center justify-center`}
              style={{ width: '100px' }} // Adjusted width for uniformity
            >
              {isDarkMode ? '☀️ Light' : '🌙 Dark'}
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDarkMode}
              className={`mr-2 px-2 py-1 rounded-lg shadow-md border focus:outline-none transition duration-300 ${
                isDarkMode ? 'bg-gray-900 text-white border-gray-700' : 'bg-gray-100 text-gray-800 border-gray-300'
              } flex items-center justify-center`}
              style={{ width: '50px' }} // Smaller width for mobile
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
            <button onClick={toggleMenu} className={`${isDarkMode ? 'text-gray-300' : 'text-gray-800'} focus:outline-none`}>
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg space-y-2 px-4 pt-2 pb-3 transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        } fixed top-14 right-0 h-screen w-64 overflow-y-auto z-40`}
        style={{ borderRadius: '10px' }}
      >
        <Link to="/" className={`block ${isDarkMode ? 'text-gray-300' : 'text-gray-800'} hover:text-blue-500 py-2 transition duration-150`} onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/properties" className={`block ${isDarkMode ? 'text-gray-300' : 'text-gray-800'} hover:text-blue-500 py-2 transition duration-150`} onClick={toggleMenu}>
          Properties
        </Link>
        <Link to="/contact" className={`block ${isDarkMode ? 'text-gray-300' : 'text-gray-800'} hover:text-blue-500 py-2 transition duration-150`} onClick={toggleMenu}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
