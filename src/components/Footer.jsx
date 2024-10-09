// Footer.js
import React from 'react';
import { useTheme } from '../ThemeContext'; // Adjust the path if necessary

const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
    <footer
      className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} text-${
        isDarkMode ? 'white' : 'gray-800'
      } py-4 shadow-[0_4px_8px_+4px_rgba(0,0,0,0.2)]`}
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        {/* Left align "All Rights Reserved" */}
        <div className="text-sm text-center sm:text-left mb-2 sm:mb-0">
          &copy; {new Date().getFullYear()} D'souza Philip. All Rights Reserved.
        </div>

        {/* Right align email */}
        <div className="text-sm text-center sm:text-right">
          <a
            href="mailto:Capfoundation.philip@gmail.com"
            className="hover:text-blue-400 transition duration-300 ease-in-out"
          >
            Capfoundation.philip@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
