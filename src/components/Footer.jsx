// Footer.js
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useTheme } from '../ThemeContext'; // Adjust the path if necessary

const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
    <footer className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} text-${isDarkMode ? 'white' : 'gray-800'} py-4 shadow-[0_4px_8px_+4px_rgba(0,0,0,0.2)]`}>
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <div className="mb-2 md:mb-0 text-center sm:text-left">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} D'souza Philip. All Rights Reserved.
          </p>
          <p className="text-sm">
            <a
              href="mailto:Capfoundation.philip@gmail.com"
              className="hover:text-blue-400 transition duration-300 ease-in-out"
            >
              Capfoundation.philip@gmail.com
            </a>
          </p>
        </div>

        <div className="flex space-x-4 mt-2 sm:mt-0">
          <a
            href="https://facebook.com"
            className="hover:text-blue-500 transition duration-300 ease-in-out"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://twitter.com"
            className="hover:text-blue-400 transition duration-300 ease-in-out"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://instagram.com"
            className="hover:text-pink-500 transition duration-300 ease-in-out"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
