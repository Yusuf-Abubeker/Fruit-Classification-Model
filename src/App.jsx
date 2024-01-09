import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ModelTest from "./components/ModelTest";
import Navbar from "./components/NavBar";
import AboutPage from "./components/About";
import ContactPage from "./components/Contact";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default App;
