import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="site-footer-container">
        <div className="site-footer-top">
          {/* About */}
          <div className="site-footer-column site-footer-about">
            <h4>About</h4>
            <p>
              Ortho Resource Portal provides curated medical resources,
              research articles, and doctor information for education
              and clinical reference.
            </p>
          </div>

          {/* Quick Links */}
          <div className="site-footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>Resources</li>
              <li>Doctors</li>
              <li>About</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="site-footer-column">
            <h4>Contact</h4>
            <p>Email: info@orthoportal.com</p>
            <p>Phone: +91 9XXXXXXXXX</p>
            <p>India</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="site-footer-bottom">
          <p>© {new Date().getFullYear()} Ortho Resource Portal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;