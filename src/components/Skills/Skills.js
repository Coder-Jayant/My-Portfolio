import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faCode, faPalette, faRocket } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import mern from '../../Data/react.svg' 
const skills = [{'title':'MERN', 'icon':mern}]
const Skills = ({ skills }) => {
  return (
  <section id="skills" className="section skills-section">
      <div className="container text-center">
        <h2 className="section-heading">Skills Overview</h2>
        <div className="skills-icons">
          {skills.map((skill, index) => (
            <SkillIcon key={index} icon={skill.icon} title={skill.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

Skills.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      icon: PropTypes.object.isRequired, // FontAwesome icon object
    })
  ).isRequired,
};

const SkillIcon = ({ icon, title }) => {
  return (
    <div className="skill-icon">
      <FontAwesomeIcon icon={icon} size="4x" />
      <p>{title}</p>
    </div>
  );
};

SkillIcon.propTypes = {
  icon: PropTypes.object.isRequired, // FontAwesome icon object
  title: PropTypes.string.isRequired,
};

export default Skills;
