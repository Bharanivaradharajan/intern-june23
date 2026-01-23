import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-top">

        {/* About */}
        <div className="footer-column">
          <h4>About</h4>
          <p>
            Ortho Resource Portal provides curated medical resources,
            research articles, and doctor information for education
            and clinical reference.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Resources</li>
            <li>Doctors</li>
            <li>About</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h4>Contact</h4>
          <p>Email: info@orthoportal.com</p>
          <p>Phone: +91 9XXXXXXXXX</p>
          <p>India</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Ortho Resource Portal. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
