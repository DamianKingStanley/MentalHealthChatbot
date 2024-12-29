import React, { useState, useEffect, useRef } from "react";
import "./Navibar.css";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaHandshake,
  FaUser,
  FaSignOutAlt,
  FaUserCircle,
  FaFacebookMessenger,
  FaChessBoard,
  FaPeopleCarry,
  FaVideo,
} from "react-icons/fa";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";

const Navibar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavbarToggle = (event) => {
    event.stopPropagation(); // Prevent event bubbling
    toggleMenu();
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const checkLoginStatus = () => {
      const token = sessionStorage.getItem("studentData");
      return token !== null && token !== undefined;
    };

    setIsLoggedIn(checkLoginStatus());
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("studentData");
    window.location.href = "/";
  };

  const [user, setUser] = useState(null);
  useEffect(() => {
    const userData = sessionStorage.getItem("studentData");

    if (userData) {
      const parsedData = JSON.parse(userData);
      setUser(parsedData);
    }
  }, []);

  return (
    <nav className={`navbar ${isOpen ? "open" : ""}`} ref={navbarRef}>
      <div className="navbar-brand">
        <Link to="/" smooth={true} duration={500}>
          <h3>MENTAL HEALTH</h3>
        </Link>
      </div>

      <button className="navbar-toggle" onClick={handleNavbarToggle}>
        {isOpen ? (
          <FaTimes className="navbar-toggle-icon" />
        ) : (
          <FaBars className="navbar-toggle-icon" />
        )}
      </button>

      <ul className={`navbar-nav ${isOpen ? "open" : ""}`}>
        <li className="nav-item">
          <Link
            className="nav-link"
            onClick={toggleMenu}
            to="/"
            smooth={true}
            duration={500}
          >
            <FaHome /> Home
          </Link>
        </li>

        <li className="nav-item">
          <ScrollLink
            className="nav-link"
            onClick={toggleMenu}
            to="resources"
            smooth={true}
            duration={500}
          >
            <FaHandshake /> Resources
          </ScrollLink>
        </li>

        <li className="nav-item">
          <ScrollLink
            className="nav-link"
            onClick={toggleMenu}
            to="community"
            smooth={true}
            duration={500}
          >
            <FaPeopleCarry /> Community
          </ScrollLink>
        </li>
        <li className="nav-item">
          <ScrollLink
            className="nav-link"
            onClick={toggleMenu}
            to="media"
            smooth={true}
            duration={500}
          >
            <FaVideo /> MultiMedia
          </ScrollLink>
        </li>
        <div>
          {isLoggedIn && (
            <div className="user-info">
              <span className="username">
                <FaUserCircle /> {user?.result?.username}
              </span>
              <ul className="user-options">
                <li onClick={handleLogout}>
                  <FaSignOutAlt /> Sign Out
                </li>
              </ul>
            </div>
          )}
          {!isLoggedIn && (
            <div>
              <button id="LoginBtn">
                <Link to="/login">Login</Link>
              </button>
            </div>
          )}
        </div>
      </ul>
    </nav>
  );
};

export default Navibar;
