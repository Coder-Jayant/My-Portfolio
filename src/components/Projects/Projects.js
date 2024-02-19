import React from 'react';
import PropTypes from 'prop-types';

const Projects = ({ projects }) => {
  return (
    <section id="projects" className="section projects-section">

      <div className='text-center'>
        <h2 className="project-heading">Projects Showcase</h2>
        </div>
      <div className="projects-container">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}

      
      </div>
    </section>
  );
};

Projects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} className="project-image" />
      <div className="project-details">
        <h3>{project.title}</h3>
       <span className='text-container'>{project.description}</span>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          Explore Project..
        </a>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default Projects;
