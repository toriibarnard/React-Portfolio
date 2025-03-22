import React from 'react';
import './projects.css'; // import projects page styles

function Projects() {
  return (
    <div className="projects-container">
      <section className="projects-header">
        <h2>Featured Projects</h2>
        <p>Here are a few of the projects I’ve worked on, demonstrating my skills in web development, mobile apps, and more!</p>
      </section>

      <section className="projects-list">
        <div className="project-card">
          <h3>QuickCash</h3>
          <p>A job posting app for job seekers and employers to connect. Developed using React, Firebase, and styled with custom CSS.</p>
          <span>Technologies Used: React, Firebase, CSS</span>
        </div>

        <div className="project-card">
          <h3>Chess Game</h3>
          <p>A Python-based chess game built with Pygame. I implemented game logic, a player vs AI mode, and a user interface for the game.</p>
          <span>Technologies Used: Python, Pygame</span>
        </div>

        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>This personal portfolio website, built with React, is a showcase of my skills, projects, and experience in software development.</p>
          <span>Technologies Used: React, HTML, CSS</span>
        </div>
      </section>

      <section className="projects-footer">
        <p>If you’re interested in collaborating on any project or have questions, feel free to reach out!</p>
      </section>
    </div>
  );
}

export default Projects;
