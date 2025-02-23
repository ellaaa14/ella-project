import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import aboutmeimage from '../pic/Ella.jpg';

const AboutMe = () => {
  return (
    <section className="about-me">
      <nav className="navbar">
        <div className="nav-brand">Ella Mae Sarausos</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>  {/* Link to Hero */}
          <li><Link to="/about">About</Link></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="container">
        <div className="aboutmeimage">
          <img src={aboutmeimage} alt="Ella Mae Sarausos" />
        </div>
        <div className="bio">
          <h2>About Me</h2>
          <p>
            Hello! I'm <strong>Ella Mae Sarausos</strong>, a BSIT student from <strong>WMSU</strong>. 
            I specialize in creating clean, responsive websites and applications. With a deep interest in front-end 
            technologies, I enjoy bringing design to life with code. My goal is to build innovative solutions that make a difference.
          </p>
          <p>
            I have experience working with HTML, CSS, JavaScript, and various front-end frameworks like React. 
            When I'm not coding, you'll find me exploring new web technologies, reading, or hiking in nature.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
