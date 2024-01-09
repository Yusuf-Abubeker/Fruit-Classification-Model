import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfo, FaEnvelope } from 'react-icons/fa';
import logo from '/apple-touch-icon.png';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
          <div className="text-white font-bold text-xl">Image Classifier</div>
        </div>
        <div className="space-x-4 flex items-center">
          <Link to="/" className="text-white hover:text-gray-300 transition duration-300 flex items-center">
            <FaHome className="mr-2" /> Home
          </Link>
          <Link to="/about" className="text-white hover:text-gray-300 transition duration-300 flex items-center">
            <FaInfo className="mr-2" /> About
          </Link>
          <Link to="/contact" className="text-white hover:text-gray-300 transition duration-300 flex items-center">
            <FaEnvelope className="mr-2" /> Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
