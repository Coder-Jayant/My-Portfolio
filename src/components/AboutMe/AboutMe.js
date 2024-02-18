import React from 'react';
import PropTypes from 'prop-types';
 
const AboutMe = ({ education, experience, interests }) => {
  return (
    <section id="aboutMe" className="section aboutme-section">
      <div className="container">
        <h2 className="section-heading">About Me</h2>
        <div className="aboutme-content">
          <div className="timeline">
            <h3>Education</h3>
            {education.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </div>
          <div className="timeline">
            <h3>Experience</h3>
            {experience.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </div>
          <div className="interests">
            <h3>Interests</h3>
            <ul>
              {interests.map((interest, index) => (
                <li key={index}>{interest}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

AboutMe.propTypes = {
  education: PropTypes.arrayOf(PropTypes.object).isRequired,
  experience: PropTypes.arrayOf(PropTypes.object).isRequired,
  interests: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const TimelineItem = ({ title, subtitle, year }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-content">
        <h4>{title}</h4>
        <p>{subtitle}</p>
      </div>
      <div className="timeline-year">
        <span>{year}</span>
      </div>
    </div>
  );
};

TimelineItem.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default AboutMe;
