import React from "react";
import {Link , NavLink}  from 'react-router-dom'

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
                  <Link to='/' className='Home'>Home</Link>
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link">
                     <Link to='/TodoList' className='TodoList'>TodoList</Link>
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link">
                    <Link to='/Counter' className='logo'>Counter</Link>
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link "> 
                    <Link to='/Courses' className='Crud-App'>CrudApp</Link>
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link "> 
                    <Link to='/Color' className='Color-UI'>Color UI</Link>
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link "> 
                    <Link to='/Search' className='Search-Items'>Search Items</Link>
                </span>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
