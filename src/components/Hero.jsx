import React from 'react';
import heroimage from '../assets/Ella.jpg'


const Hero = () => {
    return (
        <section className="hero">
            <nav className="navbar">
                <div className="nav-brand">Ella Mae Sarausos</div>
                    <ul className="nav-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
            </nav>
            <div className="hero-content">
                <h1>Hi, I'm Ella Mae Sarausos</h1>
                <p>Welcome to my portfolio</p>
                <button className="hero-button"> My Work</button>
            </div>
            <div className="hero-image">
            <img src={heroimage} alt="ellaa" />
            </div>
        </section>
        
    );
};

export default Hero;
