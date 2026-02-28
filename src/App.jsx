import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Routes,Route } from "react-router-dom";

const App = () => {

  return (
    <>
      <div className="font-inter text-soft-neutral bg-accent-dark min-h-screen">
        <Navbar />
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/About" element={<About />}/>
              <Route path="/Skills" element={<Skills />}/>
              <Route path="/Projects" element={<Projects />}/>
              <Route path="Contact/" element={<Contact />}/>
          </Routes>
      </div>
    </>
  );
};

export default App;