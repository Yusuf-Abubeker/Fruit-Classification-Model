// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // If you are using React Router

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          Image Classifier
        </div>
        <div className="space-x-4">
          {/* Example navigation links (replace with your actual routes) */}
          <Link to="/" className="text-white hover:text-gray-300 transition duration-300">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-gray-300 transition duration-300">
            About
          </Link>
          <Link to="/contact" className="text-white hover:text-gray-300 transition duration-300">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
