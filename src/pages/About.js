import React from 'react';
import './about.css';  // import about page styles

function About() {
  return (
    <div className="about-container">
      <section className="about-header">
        <h2>About Me</h2>
        <p>Hi, I'm Torii Barnard, a passionate full-stack developer with a love for technology and cybersecurity. Currently studying Computer Science at Dalhousie University, I'm always eager to learn and grow in the field of software development.</p>
      </section>

      <section className="about-skills">
        <h3>My Skills</h3>
        <div className="skills-list">
          <div className="skill-item">
            <h4>Full-Stack Development</h4>
            <p>Experience in building dynamic web applications using modern frameworks like React.js, Node.js, and Express.</p>
          </div>
          <div className="skill-item">
            <h4>Cybersecurity</h4>
            <p>Skilled in penetration testing, vulnerability assessments, and secure coding practices to build robust and secure applications.</p>
          </div>
          <div className="skill-item">
            <h4>Mobile App Development</h4>
            <p>Developing Android apps with a focus on user experience, performance, and scalability using Java and Kotlin.</p>
          </div>
        </div>
      </section>

      <section className="about-education">
        <h3>Education</h3>
        <ul>
          <li>Currently pursuing a Bachelor's in Computer Science at Dalhousie University (Expected Graduation: 2026)</li>
          <li>Completed coursework in Data Structures, Web Development, and Cybersecurity</li>
        </ul>
      </section>

      <section className="about-experience">
        <h3>Experience</h3>
        <ul>
          <li>
            <strong>Web Development Intern</strong> at TecBox International LTD - Developed and maintained websites for small businesses, integrating content and improving user experience.
          </li>
          <li>
            <strong>Personal Projects</strong> - Developed various applications like "QuickCash" (job posting app) and a Python-based Chess Game.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default About;
