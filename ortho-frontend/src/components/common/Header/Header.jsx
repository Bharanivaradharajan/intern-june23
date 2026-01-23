import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

import logoLeft from "../../../assets/logo-left.png";
import logoRight from "../../../assets/logo-right.png";

const Header = () => {
  return (
    <header className="header">
      {/* TOP SECTION */}
      <div className="header-top">
        <div className="header-logo-box left">
          <img src={logoLeft} alt="Left Logo" className="header-logo" />
        </div>

        <div className="header-title-box">
          <h1>
            RUSA 2.0-RI & QI-BioMaterials-NANO Informatics on the role of Nano-HAP
            in Orthopedic
          </h1>
          <p>Knowledge • Research • Care</p>
        </div>

        <div className="header-logo-box right">
          <img src={logoRight} alt="Right Logo" className="header-logo" />
        </div>
      </div>

      {/* NAVIGATION */}
      <nav className="header-nav">
        <ul>
          <li>
            <NavLink to="/resources" className={({ isActive }) => isActive ? "active" : ""}>
              Resources
            </NavLink>
          </li>

          <li>
            <NavLink to="/doctors" className={({ isActive }) => isActive ? "active" : ""}>
              Doctors
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
