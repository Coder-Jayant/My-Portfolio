import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-scroll'; // Use react-scroll for smooth scrolling
import PropTypes from 'prop-types';

const Header = () => {
  return (
    <Navbar bg="dark-purple" variant="dark" expand="lg" className="navbar-3d" >
      
      {/* <Navbar.Brand href= '#' className="brand-3d"> */}
        {/* <span className="name"> JAYANT VERMA </span> */}
      {/* </Navbar.Brand> */}
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
      <Navbar.Collapse id="basic-navbar-nav">
       
        <Nav className="jump-to justify-content-center align-item-center">
          <NavLink to="#introduction">Introduction</NavLink>
          <NavLink to="/#skills">Skills</NavLink>
          <NavLink to="projects">Projects</NavLink>
          <NavLink to="aboutMe">About-Me</NavLink>
          <NavLink to="workExperince">WorkExperience</NavLink>
          <NavLink to="contact">Contact</NavLink>
          {/* Add links for other sections with smooth scrolling */}
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>
  );
};

const NavLink = ({ to, children }) => (
  <Link to={to} component={Link} spy={true} smooth={true} offset={50} duration={500} className="nav-link">
    {children}
  </Link>
);

NavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Header;
