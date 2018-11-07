import React, { Component } from "react";

const Nav = () => {
  return (
    <div>
      <header className="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <span className="navbar-brand">App-Reactjs</span>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <span className="nav-link">
                  <a href='/' className='Home'>Home</a>
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link">
                     <a href='/Form' className='Form'>Form</a>
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link">
                    <a href='/Counter' className='logo'>Counter</a>
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link disabled">Disabled</span>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
