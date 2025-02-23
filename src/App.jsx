import React from 'react';
import './App.css';
import Hero from './assets/components/Hero'; 
import AboutMe from './assets/components/AboutMe';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/about" element={<AboutMe />} />
    </Routes>
  );
}

export default App;