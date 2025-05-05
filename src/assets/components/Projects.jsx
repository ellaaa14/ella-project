import React from 'react';
import Navbar from './Navbar';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Todo List Application",
      description: "A responsive and interactive Todo List application built with React and Vite. Features include task creation, completion tracking, and priority setting.",
      image: "/react (1).jpeg",
      technologies: ["React", "Vite", "CSS", "LocalStorage"],
      github: "https://github.com/joymarupok/todolist",
      demo: "https://joyjoytodolist.netlify.app"
    },
    {
      id: 2,
      title: "Pokemon Explorer with PokeAPI",
      description: "An interactive Pokemon application that uses the PokeAPI to display Pokemon information, stats, and abilities. Built with React and Vite for optimal performance.",
      image: "/react (2).jpeg",
      technologies: ["React", "Vite", "API Integration", "CSS"],
      github: "https://github.com/ellaaa14/pokemon-explorer",
      demo: "https://joypkmn.netlify.app/"
    },
    {
      id: 3,
      title: "Public Employment Service Office - Zamboanga City",
      description: "A comprehensive web application for the Public Employment Service Office in Zamboanga City. Built with Laravel, it helps connect job seekers with employers and manages employment services.",
      image: "/react (3).jpeg",
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
      github: "https://github.com/ellaaa14/peso-zamboanga",
      demo: "https://www.pesozambo.xyz/JOB/pages/index.php"
    }
  ];

  return (
    <section className="projects-section">
      <Navbar />

      <div className="projects-container">
        <h1 className="section-title">My Projects</h1>
        <p className="projects-intro">
          Here are some of the projects I've worked on. Each project represents my skills and passion for web development.
        </p>
        
        <div className="project-cards">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-button github">GitHub Repo</a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-button demo">Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
