import React, { useState } from 'react';
import PropTypes from 'prop-types';

const WorkExperience = ({ experiences }) => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const handleExperienceClick = (index) => {
    setSelectedExperience(selectedExperience === index ? null : index);
  };

  return (
    <section name='workExperience' id="workExperience" className="section workexperience-section">
      <div className="container">
        <h2 className="section-heading">Work Experience</h2>
        <div className="workexperience-content">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              index={index}
              experience={experience}
              isSelected={selectedExperience === index}
              onClick={handleExperienceClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

WorkExperience.propTypes = {
  experiences: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      details: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const ExperienceCard = ({ index, experience, isSelected, onClick }) => {
  return (
    <div
      className={`experience-card ${isSelected ? 'selected' : ''}`}
      onClick={() => onClick(index)}
    >
      <img src={experience.logo} alt={`${experience.company} Logo`} className="company-logo" />
      <div className="experience-details">
        <h3>{experience.company}</h3>
        <p>{experience.role}</p>
        <p>{experience.description}</p>
        {isSelected && <p className="details">{experience.details}</p>}
      </div>
    </div>
  );
};

ExperienceCard.propTypes = {
  index: PropTypes.number.isRequired,
  experience: PropTypes.shape({
    company: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
  }).isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default WorkExperience;
