// Home.js
import React from "react";
import { Link } from "react-router-dom";
import bgimg from "/fruitai.jpeg";
import ModelTest from "./ModelTest";

const Home = () => {
  const handleGetStartedClick = () => {
    // Scroll to the bottom of the screen
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };
  return (
    <>
      <section className="p-8 min-h-screen flex flex-wrap items-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
        <div className="container mx-auto flex items-center justify-center lg:w-1/2">
          <div className="text-center text-white">
            <h1 className="text-5xl font-extrabold mb-4">
              Welcome to Image Classifier
            </h1>
            <p className="text-lg text-center mb-8">
              Welcome to our user-friendly image classification tool. This
              sophisticated tool excels in the classification of objects within
              images. Our model is specifically designed to categorize fruit
              images into 14 distinct categories. For more detailed information,
              please navigate to the 'About' page. Thank you for choosing our
              platform.
            </p>

            <button
              onClick={handleGetStartedClick}
              className="inline-block bg-blue-500 text-white px-6 py-3 rounded-full transition duration-300 transform hover:scale-105 hover:bg-blue-700"
            >
              Get Started
            </button>
          </div>
        </div>
        <div className="lg:w-1/2">
          <img
            src={bgimg}
            alt="Event Background"
            className="w-56 h-auto object-cover object-center rounded-lg shadow-lg ml-2 "
          />
        </div>
      </section>
      <ModelTest />
    </>
  );
};

export default Home;
