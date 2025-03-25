import React from 'react';
import WeatherComponent from '../components/WeatherComponent';
import './home.css'; // import home page styles

function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1>Hi, I'm Torii Barnard</h1>
          <p>I'm a passionate full-stack developer, cybersecurity enthusiast, and lifelong learner.</p>
        </div>
      </section>

      <WeatherComponent />

      <section className="skills">
        <h2>My Skills</h2>
        <div className="skills-container">
          <div className="skill-item">
            <h3>Full-Stack Development</h3>
            <p>Building dynamic and scalable web applications using modern technologies.</p>
          </div>
          <div className="skill-item">
            <h3>Cybersecurity</h3>
            <p>Exploring penetration testing, vulnerability assessments, and secure coding practices.</p>
          </div>
          <div className="skill-item">
            <h3>Mobile App Development</h3>
            <p>Developing intuitive Android apps with a focus on performance and usability.</p>
          </div>
        </div>
      </section>

      <section id="projects" className="projects-preview">
        <h2>Featured Projects</h2>
        <div className="projects-container">
          <div className="project-item">
            <h3>QuickCash</h3>
            <p>A job posting app that connects employers with job seekers. I worked on the backend and the user interface.</p>
          </div>
          <div className="project-item">
            <h3>Chess Game</h3>
            <p>A Python-based chess game with an interactive interface using Pygame. It includes real-time gameplay and AI opponent.</p>
          </div>
        </div>
      </section>

      <section className="cta">
        <p>Interested in working with me? Let's create something amazing together!</p>
        <a href="#contact" className="cta-button">Contact Me</a>
      </section>
    </div>
  );
}

export default Home;
