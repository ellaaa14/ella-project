import React from 'react';
import Navbar from './Navbar';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "TechTrek",
      role: "Quality Assurance Tester",
      duration: "2023 - Present",
      description: "Responsible for testing software applications to ensure they meet quality standards. Identify and document bugs, verify fixes, and collaborate with development teams to improve product quality.",
      skills: ["Manual Testing", "Test Case Development", "Bug Tracking", "Quality Assurance", "Software Testing"]
    }
  ];

  return (
    <section className="experience-section">
      <Navbar />

      <div className="experience-container">
        <h1 className="section-title">Professional Experience</h1>
        
        <div className="experience-timeline">
          {experiences.map(exp => (
            <div key={exp.id} className="experience-card">
              <div className="experience-header">
                <h2>{exp.role}</h2>
                <h3>{exp.company}</h3>
                <p className="experience-duration">{exp.duration}</p>
              </div>
              <div className="experience-body">
                <p>{exp.description}</p>
                <div className="skills-container">
                  {exp.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="education-section">
          <h2>Education</h2>
          <div className="education-card">
            <h3>Bachelor of Science in Information Technology</h3>
            <p>Western Mindanao State University</p>
            <p>2020 - Present</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
