import React from 'react';
import PropTypes from 'prop-types';
import {ReactTyped} from 'react-typed'; // Use react-typed for text animation
import Biopic from '../../Data/biopic.jpg'

const Introduction = ({ title, subtitle }) => {
  return (
    <section id="introduction" className="section introduction-section">
      <div className="container text-center">
        <h1 className="intro-heading">
          {title} <span className="intro-subtitle">{subtitle}</span>
        </h1>
        <span><img src={Biopic} className='bio-pic'></img></span>
        <ReactTyped
          strings={[ 'Speed Learner',
                     'Passionate Developer ',
                     'Creative Enthusiast',
                     'Problem Solver'
                    ]}
          typeSpeed={70}
          backSpeed={50}
          loop
          className="typed-text"
        />
      </div>
    </section>
  );
};

Introduction.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Introduction;
