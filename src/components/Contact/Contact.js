import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import PropTypes from 'prop-types';

const Contact = ({ contactInfo }) => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-heading">Contact Me</h2>
        <div className="contact-content">
          <div className="contact-form">
            <form>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" rows="4" required />
              </div>
              <button type="submit">Send Message</button>
            </form>
          </div>
          <div className="contact-info">
            {contactInfo.map((info, index) => (
              <ContactInfoCard key={index} {...info} />
            ))}
            <div className="social-icons">
              <FontAwesomeIcon icon={faLinkedin} className="icon" />
              <FontAwesomeIcon icon={faTwitter} className="icon" />
              <FontAwesomeIcon icon={faGithub} className="icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Contact.propTypes = {
  contactInfo: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.object.isRequired, // FontAwesome icon object
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const ContactInfoCard = ({ icon, label, value }) => {
  return (
    <div className="contact-info-card">
      <FontAwesomeIcon icon={icon} className="icon" />
      <div className="info-details">
        <h3>{label}</h3>
        <p>{value}</p>
      </div>
    </div>
  );
};

ContactInfoCard.propTypes = {
  icon: PropTypes.object.isRequired, // FontAwesome icon object
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Contact;
