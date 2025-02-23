import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">Ella Mae Sarausos</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;