import "./Header.css"; 
import { useState } from "react";
import logo from "../Assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa"; // Hamburger and close icons from react-icons

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="logo" className="logo-image" />
      </div>

      {/* Hamburger icon for mobile */}
      <button className="hamburger-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Navigation menu */}
      <nav className={`nav ${isOpen ? "open" : ""}`}>
        <ul className="nav-list">
          <li className="nav-item">About</li>
          <li className="nav-item">Blessing Plans</li>
          <li className="nav-item">Prayer Towers</li>
          <li className="nav-item">Job Opportunities</li>
          <li className="nav-item">Contact</li>
          <li className="nav-item">Programs</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
