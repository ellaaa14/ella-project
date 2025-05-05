import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import heroimage from '../pic/Ella.jpg';

const Hero = () => {
    return (
        <section className="hero">
            <Navbar />
            <div className="hero-content">
                <h1>Hi, I'm Ella Mae Sarausos</h1>
                <p>Welcome to my portfolio</p>
                <Link to="/projects" className="hero-button">My Work</Link>
            </div>    
            <div className="hero-image">
                <img src={heroimage} alt="Ella Mae Sarausos" />
            </div>
        </section>
    );
};

export default Hero;
