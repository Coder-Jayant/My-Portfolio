import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          <div className="copyright">
            <p>&copy; 2024 Jayant Verma. All Rights Reserved.</p>
          </div>
          <div className="additional-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            {/* Add more links as needed */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
