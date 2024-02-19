import React from 'react';
import PropTypes from 'prop-types';
import { ReactTyped } from 'react-typed'; // Use react-typed for text animation
import Biopic from '../../Data/utilities/biopic.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLetterboxd, faLinkedin, faWhatsapp, faYahoo } from '@fortawesome/free-brands-svg-icons';
import { faMailBulk, faMailForward } from '@fortawesome/free-solid-svg-icons';
import { SiGmail } from "react-icons/si";
const Introduction = ({ title, subtitle }) => {
  return (
    <section id="introduction" className="section introduction-section">
      <div className="container text-center">
        <span style={{ marginTop: '12vh' }}> <h1 className="intro-heading">
          {title} <span className="intro-subtitle">{subtitle}</span>
        </h1>
          {/* <span><img src={Biopic} className='bio-pic'></img></span> */}
          <span><ReactTyped
            strings={['Full Stack Developer',
              'Web Developer',
              'Data Analyst',
            ]}
            typeSpeed={70}
            backSpeed={50}
            loop
            className="typed-text"
          />
          </span>
          <div className='bio-text'>
            Passionate about tech and driven by creativity, I'm a Full Stack Developer committed to excellence. My fascination with great Technologies like Machine learning fuels my journey to transform ideas into compelling digital experiences.
          </div>
        </span>
        <span className='biopic-container'>
          <img src={Biopic} className='bio-pic'></img>
          <span biopic-container-icons>
          <a className='icon-3' href='https://www.linkedin.com/in/jayant-verma-042966268'><FontAwesomeIcon icon={faLinkedin} /></a>
          <a className='icon-3'  href='https://www.github.com/Coder-Jayant'><FontAwesomeIcon icon={faGithub} /></a>
          <a className='icon-3'  href='mailto:jayantmailac@gmail.com'><SiGmail /></a>
        </span>
        </span>
       

      </div>
    </section>
  );
};

Introduction.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Introduction;
