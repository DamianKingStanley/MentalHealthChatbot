import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import {
  FaSearch,
  FaUserCircle,
  FaPenNib,
  FaRoute,
  FaHandsHelping,
  FaUserShield,
  FaAmbulance,
  FaForumbee,
  FaMicrophone,
  FaVideo,
  FaPodcast,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = () => {
      const token = sessionStorage.getItem("studentData");
      return token !== null && token !== undefined;
    };

    setIsLoggedIn(checkLoginStatus());
  }, []);

  const handleChatBot = () => {
    const isLoggedIn = sessionStorage.getItem("studentData");

    if (isLoggedIn) {
      window.location.href = "/mental-health-bo";
    } else {
      window.location.href = "/login";
    }
  };

  const handlePostClick = () => {
    const isLoggedIn = sessionStorage.getItem("studentData");

    if (isLoggedIn) {
      window.location.href = "/assistant-bot";
    } else {
      window.location.href = "/login";
    }
  };
  const handleButtonClick = () => {
    const isLoggedIn = sessionStorage.getItem("studentData");
  };

  const handleLogout = () => {
    sessionStorage.removeItem("studentData");
    window.location.href = "/";
  };

  const login = () => {
    window.location.href = "/login";
  };

  const [user, setUser] = useState(null);
  useEffect(() => {
    const userData = sessionStorage.getItem("studentData");

    if (userData) {
      const parsedData = JSON.parse(userData);
      setUser(parsedData);
    }
  }, []);

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const userData = JSON.parse(sessionStorage.getItem("studentData"));
        if (!userData || !userData.result.id) {
          console.error("User ID is undefined");
          return;
        }

        const userId = userData.result.id;

        const response = await fetch(
          `https://mental-server.onrender.com/user/profile/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${userData.token}`,
            },
          }
        );

        const data = await response.json();

        if (response.ok) {
          setUser({
            ...data,
            profilePicture: data.profilePicture,
          });
        } else {
          console.log(data);
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    getUserProfile();
  }, []);

  return (
    <div>
      <section className="navbarsection">
        <div className="nav-lists">
          <Link to="/" smooth={true} duration={500}>
            <h3>Mental Health</h3>
          </Link>
          <ul>
            <li>
              <Link to="/" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="dropdown">
              <ScrollLink to="resources" smooth={true} duration={500}>
                Resources
              </ScrollLink>
              <div className="dropdown-content">
                <ScrollLink to="resources" smooth={true} duration={500}>
                  <FaPenNib id="NavFaIcon" />
                  Articles and Guidelines
                </ScrollLink>
                <ScrollLink to="resources" smooth={true} duration={500}>
                  <FaRoute id="NavFaIcon" />
                  Tips and Strategy
                </ScrollLink>
              </div>
            </li>
            <li className="dropdown">
              <Link onClick={handlePostClick}>Chatbot</Link>
              <div className="dropdown-content">
                <ScrollLink to="community" smooth={true} duration={500}>
                  <FaHandsHelping id="NavFaIcon" />
                  Support Services
                </ScrollLink>
                <ScrollLink to="community" smooth={true} duration={500}>
                  <FaUserShield id="NavFaIcon" />
                  Peer Support Group
                </ScrollLink>
                <ScrollLink to="community" smooth={true} duration={500}>
                  <FaAmbulance id="NavFaIcon" />
                  Emergency Contacts
                </ScrollLink>
              </div>
            </li>
            {/* <li>
              <Link onClick={handlePostClick}>ChatBot</Link>
            </li> */}
            <li className="dropdown">
              <ScrollLink to="community" smooth={true} duration={500}>
                Community
              </ScrollLink>
              <div className="dropdown-content">
                <ScrollLink to="community" smooth={true} duration={500}>
                  <FaForumbee id="NavFaIcon" />
                  Forum
                </ScrollLink>
                <ScrollLink to="testimonies" smooth={true} duration={500}>
                  <FaMicrophone id="NavFaIcon" />
                  Students Testimonies
                </ScrollLink>
              </div>
            </li>
            <li className="dropdown">
              <ScrollLink to="media" smooth={true} duration={500}>
                Multimedia
              </ScrollLink>
              <div className="dropdown-content">
                <ScrollLink to="videos" smooth={true} duration={500}>
                  <FaVideo id="NavFaIcon" />
                  Videos
                </ScrollLink>
                <ScrollLink to="podcasts" smooth={true} duration={500}>
                  <FaPodcast id="NavFaIcon" />
                  Podcasts
                </ScrollLink>
              </div>
            </li>
          </ul>
        </div>
        <div className="searchdiv">
          <div className="SLU">
            {isLoggedIn && (
              <div className="dropdown">
                <div className="userImage">
                  {user?.profilePicture ? (
                    <img
                      src={user?.profilePicture}
                      alt="Profile"
                      className="profilePictureNav"
                    />
                  ) : (
                    <FaUserCircle className="profileIconNav" />
                  )}
                </div>
              </div>
            )}
            <input
              type="search"
              name="search"
              id="searchbar"
              placeholder="search"
            />
            <FaSearch id="searchIcon" />
            {!isLoggedIn && (
              <button id="loginBtn" onClick={login}>
                LOGIN
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
