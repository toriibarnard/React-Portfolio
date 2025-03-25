import React, { useState, useEffect } from 'react';
import './projects.css';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // fetch project data from the JSON file
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/projects.json');
        if (!response.ok) throw new Error('Failed to fetch projects');
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) return <p>Loading projects...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="projects-container">
      <section className="projects-header">
        <h2>Featured Projects</h2>
        <p>Here are a few of the projects I’ve worked on, demonstrating my skills in web development, mobile apps, and more!</p>
      </section>

      <section className="projects-list">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <span>Technologies Used: {project.technologies.join(', ')}</span>
          </div>
        ))}
      </section>

      <section className="projects-footer">
        <p>If you’re interested in collaborating on any project or have questions, feel free to reach out!</p>
      </section>
    </div>
  );
}

export default Projects;

