import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faCode, faPalette, faRocket,fabReact } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { ExpressLogo,MongoLogo,DjangoLogo, CppLogo, MlIcon, TailwindLogo,JavascriptLogo,MysqlLogo, PostmanLogo } from '../../Data/Icons';
// import Card from './Card';
const Skills = ({ skills }) => {
         
  return (
  <section  className="section skills-section">
      <div id="skills" className=" text-center">
       <span >  <h2 className="skills-heading">Skills Overview</h2></span>
        <div className="skills-icons ">
          {skills.map((skill, index) => (
            <span className="skill-card  card ">
              <span className='wrapper'>
              {(skill.title == 'MongoDB') && (<MongoLogo className='icon-2'/>)}
              {(skill.title == 'Express') && (<ExpressLogo className='icon-2'/>)  }
              {(skill.title == 'Django') && (<DjangoLogo className='icon-2'/>)}
              {(skill.title == 'C/C++') && (<CppLogo className='icon-2'/>)  }
              {(skill.title == 'Javascript') && (<JavascriptLogo className='icon-2'/>) }
              {(skill.title == 'Tailwind') && (<TailwindLogo className='icon-2'/>) }
              {(skill.title == 'MySQL') && (<MysqlLogo className='icon-2'/>) }
              {(skill.title == 'Machine Learning') && (<MlIcon className='icon-2'/>) }
              {(skill.title == 'Postman') && (<PostmanLogo className='icon-2'/>) }
           
            {/* <Icon skill = {skill}/> */}
            <SkillIcon key={index} icon={skill.icon} title={skill.title} />
            </span>
            </span>
            // <Card skill = {skill} index={index} />
         

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
      icon: PropTypes.object, // FontAwesome icon object
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





