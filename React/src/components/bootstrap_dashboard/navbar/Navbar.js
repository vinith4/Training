import React from "react";
import Styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-light ${Styles.navcolor}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Project Management Tool
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link  " aria-current="page" href="/dashboard/home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/dashboard/projects">
                 Projects
                </a>
              </li> 
              <li className="nav-item">
                <a className="nav-link whiteLink" href="#">
                  My Task
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={'nav-link whiteLink '}
                  href="#"
                 
                >
                  Chat
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link whiteLink ${Styles.navcolor}`}
                  href="/login"
                 
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
