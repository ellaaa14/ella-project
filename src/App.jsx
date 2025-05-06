import React from 'react';
import './App.css';
import Hero from './assets/components/Hero'; 
import AboutMe from './assets/components/AboutMe';
import Blog from './assets/components/Blog';
import Experience from './assets/components/Experience';
import Projects from './assets/components/Projects';
import Contact from './assets/components/Contact';
import Certificate from './assets/components/Certificate';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/certificate" element={<Certificate />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
