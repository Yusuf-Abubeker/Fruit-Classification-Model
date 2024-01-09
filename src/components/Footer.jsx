import React from "react";
import {
  FaHome,
  FaInfo,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 p-4 text-white py-8">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="flex items-center mb-4">
          <span className="text-2xl font-bold mr-2">Image Classifier</span>
          <div className="h-1 w-10 bg-blue-500"></div>
        </div>
        <p className="text-sm text-gray-200 mb-6">
          © 2024 Image Classifier. All rights reserved.(This project built by Group-2 for ml course)
        </p>
        
        <div className="mt-4 flex space-x-4">
          <a
            href="#"
            className="text-gray-300 hover:text-blue-500 transition duration-300 flex items-center"
          >
            <FaFacebook className="mr-2" /> Facebook
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-blue-500 transition duration-300 flex items-center"
          >
            <FaTwitter className="mr-2" /> Twitter
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-blue-500 transition duration-300 flex items-center"
          >
            <FaLinkedin className="mr-2" /> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
