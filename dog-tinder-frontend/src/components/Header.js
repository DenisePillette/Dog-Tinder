import React from "react";
import '../styles/header.css'

export const Header = (props) => {
  return(
    <header>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <span className="logo-container">
        <a href="/"><img className="logo" src="../assets/images/IMG_1164.PNG"/></a>
      </span>
      <a className="navbar-brand" href="/">Dog Tinder</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/new_dog">Create Profile
              <span className="sr-only">
                (current)
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">About</a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
          <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    </header>
  );
};

export default Header
